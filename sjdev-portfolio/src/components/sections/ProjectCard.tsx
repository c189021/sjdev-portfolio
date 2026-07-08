import { ArrowRight } from "lucide-react";
import type { Project, ProjectDomain } from "../../types/content";
import { DOMAIN_LABELS, KIND_LABELS } from "../../data";
import { Card, Tag } from "../common";
import ProjectCover from "./ProjectCover";

// 도메인 태그 — 도메인 고유색으로 표시
const DOMAIN_TAG_CLASS: Record<ProjectDomain, string> = {
  "ai-llm": "bg-domain-ai/10 text-domain-ai",
  web: "bg-domain-web/10 text-domain-web",
  "ml-data": "bg-domain-ml/10 text-domain-ml",
  research: "bg-domain-research/10 text-domain-research",
};

// 대표작 카드 하단에 노출할 성과 필 — refId 기준 표시용 축약 라벨
const OUTCOME_PILL: Record<string, string> = {
  "pub-guider": "KSII 국제 논문지",
  "pub-otto": "대한전자공학회 논문",
  "pub-refactory": "ASK 논문 게재",
  "award-devops": "발표회 최우수상",
  "award-otto": "우수학생논문상",
  "award-node": "총장상 · 우수동아리",
};

interface ProjectCardProps {
  project: Project;
  variant: "featured" | "compact";
  onOpen: (projectId: string) => void;
}

const ProjectCard = ({ project, variant, onOpen }: ProjectCardProps) => {
  const isFeatured = variant === "featured";
  const visibleTech = project.techStack.slice(0, isFeatured ? 4 : 3);
  const hiddenTechCount = project.techStack.length - visibleTech.length;
  const pills = isFeatured
    ? project.outcomes
        .map((o) => (o.refId ? OUTCOME_PILL[o.refId] : null))
        .filter((label): label is string => label !== null)
    : [];

  return (
    <Card
      hover
      onClick={() => onOpen(project.id)}
      className={`group flex h-full flex-col overflow-hidden p-0 ${
        project.status === "planned" ? "opacity-80" : ""
      }`}
    >
      {/* 썸네일 */}
      <ProjectCover project={project} />

      {/* 본문 */}
      <div className={`flex flex-1 flex-col ${isFeatured ? "p-5" : "p-4"}`}>
        <div className="flex flex-wrap items-center gap-1.5">
          <span
            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-bold ${
              DOMAIN_TAG_CLASS[project.domains[0]]
            }`}
          >
            {DOMAIN_LABELS[project.domains[0]]}
          </span>
          <Tag>{KIND_LABELS[project.kind]}</Tag>
          {project.status === "planned" && <Tag>예정</Tag>}
          {project.status === "in-progress" && (
            <Tag variant="soft">진행 중</Tag>
          )}
        </div>

        <h3
          className={`mt-3 font-extrabold tracking-tight ${
            isFeatured ? "text-lg" : "text-[15.5px]"
          }`}
        >
          {project.title}
        </h3>
        <p className="mt-0.5 line-clamp-1 text-[12.5px] font-medium text-muted">
          {project.subtitle}
        </p>

        <div className="mt-3.5 flex flex-wrap gap-1.5">
          {visibleTech.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
          {hiddenTechCount > 0 && <Tag>+{hiddenTechCount}</Tag>}
        </div>

        <div className="mt-auto flex items-end justify-between gap-3 pt-4">
          <div className="flex flex-wrap gap-1.5">
            {pills.map((label) => (
              <span
                key={label}
                className="inline-flex items-center rounded-full border border-line bg-canvas px-2.5 py-0.5 text-[11px] font-semibold text-muted"
              >
                {label}
              </span>
            ))}
          </div>
          <span className="flex shrink-0 items-center gap-1 text-[12.5px] font-bold text-accent transition-transform duration-200 group-hover:translate-x-0.5">
            자세히 <ArrowRight size={13} />
          </span>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
