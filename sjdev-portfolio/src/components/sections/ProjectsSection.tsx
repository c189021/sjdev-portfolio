import { useEffect, useMemo, useState } from "react";
import type { Project, ProjectDomain, ProjectKind } from "../../types/content";
import { DOMAIN_LABELS, KIND_LABELS, PROJECTS } from "../../data";
import { Chip, Reveal, SectionShell } from "../common";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

type DomainFilter = ProjectDomain | "all";
type KindFilter = ProjectKind | "all";

const DOMAIN_FILTERS: { value: DomainFilter; label: string }[] = [
  { value: "all", label: "전체" },
  ...(Object.entries(DOMAIN_LABELS) as [ProjectDomain, string][]).map(
    ([value, label]) => ({ value, label })
  ),
];

const KIND_FILTERS: { value: KindFilter; label: string }[] = [
  { value: "all", label: "전체" },
  ...(Object.entries(KIND_LABELS) as [ProjectKind, string][]).map(
    ([value, label]) => ({ value, label })
  ),
];

// URL 해시(#project=guider)로 특정 프로젝트 모달을 직접 열 수 있다
const HASH_PATTERN = /^#project=(.+)$/;

const ProjectsSection = () => {
  const [domainFilter, setDomainFilter] = useState<DomainFilter>("all");
  const [kindFilter, setKindFilter] = useState<KindFilter>("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // 해시 → 모달 상태 동기화 (최초 진입 + 브라우저 뒤로가기 대응)
  useEffect(() => {
    const readHash = () => {
      const match = window.location.hash.match(HASH_PATTERN);
      setSelectedId(match ? decodeURIComponent(match[1]) : null);
    };
    readHash();
    window.addEventListener("hashchange", readHash);
    return () => window.removeEventListener("hashchange", readHash);
  }, []);

  const openProject = (projectId: string) => {
    window.location.hash = `project=${projectId}`;
  };

  const closeProject = () => {
    // 히스토리를 오염시키지 않고 해시만 제거
    history.replaceState(
      null,
      "",
      window.location.pathname + window.location.search
    );
    setSelectedId(null);
  };

  const filtered = useMemo(
    () =>
      PROJECTS.filter(
        (p) =>
          (domainFilter === "all" || p.domains.includes(domainFilter)) &&
          (kindFilter === "all" || p.kind === kindFilter)
      ),
    [domainFilter, kindFilter]
  );

  const isDefaultView = domainFilter === "all" && kindFilter === "all";
  const featuredProjects = filtered.filter((p) => p.featured);
  const restProjects = filtered.filter((p) => !p.featured);
  const selectedProject: Project | null =
    PROJECTS.find((p) => p.id === selectedId) ?? null;

  return (
    <SectionShell
      id="projects"
      eyebrow="Projects"
      title="프로젝트"
      description="만들고, 검증하고, 배포한 기록 — 카드를 누르면 상세가 열립니다."
    >
      {/* ===== 필터 ===== */}
      <Reveal>
        <div className="flex flex-col gap-2.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="w-8 text-xs font-semibold text-muted">분야</span>
            {DOMAIN_FILTERS.map(({ value, label }) => (
              <Chip
                key={value}
                active={domainFilter === value}
                onClick={() => setDomainFilter(value)}
              >
                {label}
              </Chip>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="w-8 text-xs font-semibold text-muted">유형</span>
            {KIND_FILTERS.map(({ value, label }) => (
              <Chip
                key={value}
                active={kindFilter === value}
                onClick={() => setKindFilter(value)}
              >
                {label}
              </Chip>
            ))}
            <span className="ml-auto text-xs font-medium text-muted">
              {filtered.length}개 프로젝트
            </span>
          </div>
        </div>
      </Reveal>

      {/* ===== 목록 ===== */}
      {isDefaultView ? (
        <div className="mt-8 space-y-10">
          {/* 대표 프로젝트 */}
          <div>
            <p className="text-sm font-bold text-muted">대표 프로젝트</p>
            <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project, index) => (
                <Reveal key={project.id} delay={index * 0.08}>
                  <ProjectCard
                    project={project}
                    variant="featured"
                    onOpen={openProject}
                  />
                </Reveal>
              ))}
            </div>
          </div>
          {/* 그 외 프로젝트 */}
          <div>
            <p className="text-sm font-bold text-muted">그 외 프로젝트</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {restProjects.map((project, index) => (
                <Reveal key={project.id} delay={Math.min(index * 0.06, 0.3)}>
                  <ProjectCard
                    project={project}
                    variant="compact"
                    onOpen={openProject}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      ) : (
        // 필터 적용 뷰 — key 교체로 등장 애니메이션 재실행
        <div
          key={`${domainFilter}-${kindFilter}`}
          className="mt-8 grid animate-fade-in-up gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              variant="compact"
              onOpen={openProject}
            />
          ))}
          {filtered.length === 0 && (
            <p className="col-span-full rounded-xl border border-dashed border-line bg-surface p-8 text-center text-sm text-muted">
              선택한 조건에 해당하는 프로젝트가 없습니다.
            </p>
          )}
        </div>
      )}

      {/* ===== 상세 모달 ===== */}
      <ProjectModal project={selectedProject} onClose={closeProject} />
    </SectionShell>
  );
};

export default ProjectsSection;
