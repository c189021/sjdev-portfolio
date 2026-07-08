import { useRef } from "react";
import {
  Activity,
  ClipboardCheck,
  Compass,
  GraduationCap,
  HeartPulse,
  Monitor,
  Plug,
  Scale,
  Thermometer,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { Project, ProjectDomain } from "../../types/content";

// 실제 썸네일이 없는 프로젝트는 도메인 컬러 제너러티브 커버로 표시.
// 실물 이미지가 오면 data의 media.thumbnail만 지정하면 자동 교체된다.

const DOMAIN_GRADIENT: Record<ProjectDomain, [string, string]> = {
  "ai-llm": ["#7c3aed", "#4c1d95"],
  web: ["#0d9488", "#134e4a"],
  "ml-data": ["#f59e0b", "#92400e"],
  research: ["#e11d48", "#881337"],
};

const PROJECT_ICON: Record<string, LucideIcon> = {
  guider: Compass,
  otto: HeartPulse,
  refactory: Scale,
  "heat-demand": Thermometer,
  "fall-prevention": Activity,
  "senior-edu": GraduationCap,
  "snu-wordpress": Plug,
  "grad-tracker": ClipboardCheck,
  "node-portfolio": Users,
  "metaverse-academy": Monitor,
};

const ProjectCover = ({ project }: { project: Project }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const Icon = PROJECT_ICON[project.id] ?? Compass;
  const [from, to] = DOMAIN_GRADIENT[project.domains[0]];

  // ── 실제 썸네일 (+ 호버 시 시연 영상 재생) ──
  if (project.media?.thumbnail) {
    return (
      <div
        className="group/cover relative aspect-video overflow-hidden bg-sunken"
        onMouseEnter={() => videoRef.current?.play()}
        onMouseLeave={() => {
          videoRef.current?.pause();
          if (videoRef.current) videoRef.current.currentTime = 0;
        }}
      >
        <img
          src={project.media.thumbnail}
          alt={`${project.title} 썸네일`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover/cover:scale-[1.04]"
        />
        {project.media.video && (
          <>
            <video
              ref={videoRef}
              src={project.media.video}
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover/cover:opacity-100"
            />
            <span className="absolute bottom-2.5 right-2.5 rounded-full bg-black/55 px-2.5 py-1 text-[10.5px] font-bold text-white backdrop-blur-sm transition-opacity group-hover/cover:opacity-0">
              ▶ 호버로 시연 재생
            </span>
          </>
        )}
      </div>
    );
  }

  // ── 제너러티브 커버 (썸네일 대기) ──
  return (
    <div
      className="relative aspect-video overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      {/* 도트 패턴 + 링 장식 */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.55) 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      />
      <div
        aria-hidden
        className="absolute -left-10 -top-16 h-44 w-44 rounded-full border-[1.5px] border-white/20"
      />
      <div
        aria-hidden
        className="absolute -bottom-20 right-10 h-52 w-52 rounded-full border-[1.5px] border-white/15"
      />
      <Icon
        aria-hidden
        size={130}
        strokeWidth={1}
        className="absolute -bottom-7 -right-5 rotate-[-8deg] text-white/15 transition-transform duration-500 group-hover:rotate-[-2deg] group-hover:scale-110"
      />
      <span className="absolute inset-0 grid place-items-center">
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/15 text-white ring-1 ring-white/30 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
          <Icon size={26} />
        </span>
      </span>
    </div>
  );
};

export default ProjectCover;
