import type { NavSection, SiteConfig } from "../types/content";
import type {
  ProjectDomain,
  ProjectKind,
  ProjectStatus,
} from "../types/content";

export const NAV_SECTIONS: NavSection[] = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "activities", label: "Activities" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const SITE: SiteConfig = {
  nav: NAV_SECTIONS,
  meta: {
    // 초안 — 문구 확정 필요 (todos 참조)
    title: "박성진 | AI·LLM & 웹 개발자 포트폴리오",
    description:
      "홍익대학교 소프트웨어융합학과. AI/LLM·웹 개발 중심 프로젝트 10개, 국제 논문지 게재 포함 논문 3편, 다수 수상.",
    url: "https://박성진.com",
  },
  resume: { pdfPath: null },
  todos: [
    "확인 필요: 메타 타이틀·설명 문구 확정",
    "결정 필요: 이력서(PDF) 다운로드 기능 채택 여부 (PHASE 3)",
  ],
};

// ===== 화면 표시용 라벨 =====
export const DOMAIN_LABELS: Record<ProjectDomain, string> = {
  "ai-llm": "AI · LLM",
  web: "웹",
  "ml-data": "ML · 데이터",
  research: "연구",
};

export const KIND_LABELS: Record<ProjectKind, string> = {
  team: "팀",
  personal: "개인",
  freelance: "외주",
  work: "근로",
};

export const STATUS_LABELS: Record<ProjectStatus, string> = {
  completed: "완료",
  "in-progress": "진행 중",
  planned: "예정",
};
