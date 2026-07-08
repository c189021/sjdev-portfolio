import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  CornerDownRight,
  ExternalLink,
  Gauge,
  Github,
  Trophy,
} from "lucide-react";
import type { Project, ProjectOutcome } from "../../types/content";
import { DOMAIN_LABELS, KIND_LABELS } from "../../data";
import { Button, Modal, Pending, Tag } from "../common";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

// 소제목 공통 스타일
const SubHeading = ({ children }: { children: string }) => (
  <h4 className="text-xs font-bold uppercase tracking-[0.08em] text-accent">
    {children}
  </h4>
);

const OUTCOME_ICON: Record<ProjectOutcome["kind"], typeof Trophy> = {
  award: Trophy,
  publication: BookOpen,
  metric: Gauge,
  etc: CheckCircle2,
};

const ProjectModal = ({ project, onClose }: ProjectModalProps) => (
  <Modal open={project !== null} onClose={onClose}>
    {project && (
      <div className="p-6 sm:p-8">
        {/* ===== 헤더 ===== */}
        <div className="flex flex-wrap gap-1.5">
          {project.domains.map((domain) => (
            <Tag key={domain} variant="soft">
              {DOMAIN_LABELS[domain]}
            </Tag>
          ))}
          <Tag>{KIND_LABELS[project.kind]}</Tag>
          {project.status === "planned" && <Tag>예정</Tag>}
          {project.status === "in-progress" && (
            <Tag variant="soft">진행 중</Tag>
          )}
        </div>
        <h3 className="mt-3 text-2xl font-extrabold tracking-tight">
          {project.title}
          <span className="ml-2 text-base font-bold text-muted">
            {project.subtitle}
          </span>
        </h3>
        <p className="mt-3 border-l-2 border-accent/50 pl-3 text-[13.5px] leading-relaxed text-muted">
          “{project.tagline}”
        </p>

        {/* 기간 · 팀 · 역할 */}
        <div className="mt-5 grid gap-3 rounded-xl border border-line bg-surface p-4 sm:grid-cols-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-muted">
              기간
            </p>
            <p className="mt-1 text-[13px] font-medium">
              {project.period ?? <Pending label="확인 대기" />}
            </p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-muted">
              팀 구성
            </p>
            <p className="mt-1 text-[13px] font-medium">
              {project.team.size !== null
                ? `${project.team.size}인${
                    project.team.members ? ` · ${project.team.members}` : ""
                  }`
                : project.team.members ?? <Pending label="확인 대기" />}
            </p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-muted">
              나의 역할
            </p>
            <p className="mt-1 text-[13px] font-medium">
              {project.myRole ?? <Pending label="확인 대기" />}
            </p>
          </div>
        </div>

        {/* 기술 스택 */}
        {project.techStack.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
        ) : (
          <div className="mt-4">
            <Pending label="기술 스택 확인 대기" />
          </div>
        )}

        {/* 링크 — null이면 대기 표시, 필드 자체가 없으면 해당 없음 */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {project.links.github !== undefined &&
            (project.links.github ? (
              <Button variant="ghost" size="sm" href={project.links.github} external>
                <Github size={14} /> GitHub
              </Button>
            ) : (
              <Pending label="GitHub 링크" />
            ))}
          {project.links.paper !== undefined &&
            (project.links.paper ? (
              <Button variant="ghost" size="sm" href={project.links.paper} external>
                <BookOpen size={14} /> 논문 보기
              </Button>
            ) : (
              <Pending label="논문 링크" />
            ))}
          {project.links.site !== undefined &&
            (project.links.site ? (
              <Button variant="ghost" size="sm" href={project.links.site} external>
                <ExternalLink size={14} /> 사이트
              </Button>
            ) : (
              <Pending label="사이트 URL" />
            ))}
          {project.links.demo && (
            <Button variant="ghost" size="sm" href={project.links.demo} external>
              <ExternalLink size={14} /> 데모
            </Button>
          )}
        </div>

        <hr className="my-6 border-line" />

        {/* ===== 본문 ===== */}
        <div className="space-y-7">
          <div>
            <SubHeading>개요</SubHeading>
            <p className="mt-2 text-sm leading-relaxed text-ink/90">
              {project.summary}
            </p>
          </div>

          {project.status === "planned" ? (
            <div className="rounded-xl border border-dashed border-line bg-sunken/50 p-4 text-[13px] text-muted">
              기획 단계의 예정 프로젝트입니다. 개발 착수 후 핵심 구현·문제
              해결·성과가 채워집니다.
            </div>
          ) : (
            <>
              <div>
                <SubHeading>핵심 기술 구현</SubHeading>
                {project.implementation.length > 0 ? (
                  <ul className="mt-3 space-y-2.5">
                    {project.implementation.map((impl) => (
                      <li key={impl.title} className="flex gap-3">
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <p className="text-sm leading-relaxed">
                          <span className="font-bold">{impl.title}</span>
                          <span className="text-muted"> — {impl.description}</span>
                        </p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="mt-2">
                    <Pending label="핵심 구현 내용 확인 대기" />
                  </div>
                )}
              </div>

              <div>
                <SubHeading>문제 해결</SubHeading>
                {project.problemSolving.length > 0 ? (
                  <div className="mt-3 space-y-3">
                    {project.problemSolving.map((ps) => (
                      <div
                        key={ps.problem}
                        className="rounded-xl border border-line bg-surface p-4"
                      >
                        <p className="text-sm font-semibold leading-relaxed">
                          {ps.problem}
                        </p>
                        <p className="mt-2 flex gap-2 text-sm leading-relaxed text-muted">
                          <CornerDownRight
                            size={15}
                            className="mt-0.5 shrink-0 text-accent"
                          />
                          <span>
                            {ps.approach}
                            {ps.result && (
                              <span className="font-medium text-ink">
                                {" "}
                                → {ps.result}
                              </span>
                            )}
                          </span>
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="mt-2">
                    <Pending label="문제 해결 경험 — 사실 확인 후 추가" />
                  </div>
                )}
              </div>

              <div>
                <SubHeading>성과</SubHeading>
                {project.outcomes.length > 0 ? (
                  <div className="mt-3 space-y-4">
                    {/* Before → After 수치 카드 */}
                    {project.outcomes.some((o) => o.metric) && (
                      <div className="grid gap-3 sm:grid-cols-2">
                        {project.outcomes
                          .filter((o) => o.metric)
                          .map((o) => (
                            <div
                              key={o.text}
                              className="rounded-xl border border-line bg-sunken/50 p-3.5"
                            >
                              <p className="text-xs font-medium text-muted">
                                {o.metric!.label}
                              </p>
                              <p className="mt-1.5 flex flex-wrap items-center gap-1.5">
                                <span className="text-sm text-muted">
                                  {o.metric!.before}
                                </span>
                                <ArrowRight size={13} className="text-muted" />
                                <span className="text-lg font-extrabold text-accent">
                                  {o.metric!.after}
                                </span>
                                {o.metric!.delta && (
                                  <span className="ml-auto rounded-full bg-accent-soft px-2 py-0.5 text-[11px] font-bold text-accent">
                                    {o.metric!.delta}
                                  </span>
                                )}
                              </p>
                            </div>
                          ))}
                      </div>
                    )}
                    {/* 수상·논문·기타 성과 */}
                    <ul className="space-y-2">
                      {project.outcomes
                        .filter((o) => !o.metric)
                        .map((o) => {
                          const Icon = OUTCOME_ICON[o.kind];
                          return (
                            <li key={o.text} className="flex gap-2.5 text-sm">
                              <Icon
                                size={16}
                                className="mt-0.5 shrink-0 text-accent"
                              />
                              <span className="leading-relaxed">{o.text}</span>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                ) : (
                  <div className="mt-2">
                    <Pending label="성과 수치 — 확인 대기" />
                  </div>
                )}
              </div>

              {/* 스크린샷 갤러리 (자료 대기) */}
              <div>
                <SubHeading>스크린샷 · 시연</SubHeading>
                {project.media?.video || project.media?.images?.length ? (
                  <div className="mt-3 space-y-3">
                    {project.media.video && (
                      <video
                        src={project.media.video}
                        controls
                        className="w-full rounded-lg border border-line"
                      />
                    )}
                    {project.media.images && project.media.images.length > 0 && (
                      <div className="flex gap-3 overflow-x-auto pb-2">
                        {project.media.images.map((src) => (
                          <img
                            key={src}
                            src={src}
                            alt={`${project.title} 스크린샷`}
                            className="h-44 rounded-lg border border-line object-cover"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="mt-3 rounded-xl border border-dashed border-amber-500/50 bg-amber-500/5 p-4 text-[13px] text-muted">
                    스크린샷·시연 GIF 자리입니다 — 자료를 전달해 주시면
                    갤러리로 표시됩니다.
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    )}
  </Modal>
);

export default ProjectModal;
