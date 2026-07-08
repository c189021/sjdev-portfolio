import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../../data";

// 논문·수상·활동에서 관련 프로젝트 모달로 점프하는 칩
// (해시 딥링크 → ProjectsSection의 hashchange 리스너가 모달을 연다)

const ProjectLinkChip = ({ projectId }: { projectId: string }) => {
  const project = PROJECTS.find((p) => p.id === projectId);
  if (!project) return null;

  return (
    <button
      onClick={() => {
        window.location.hash = `project=${projectId}`;
      }}
      className="inline-flex items-center gap-1 rounded-full border border-line bg-surface px-2.5 py-0.5 text-[11.5px] font-semibold text-muted transition-colors hover:border-accent/50 hover:text-accent"
    >
      {project.title} <ArrowUpRight size={11} />
    </button>
  );
};

export default ProjectLinkChip;
