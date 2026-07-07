// ============================================
// 콘텐츠 데이터 타입 정의 (src/data/* 전용)
//
// 규약: 원본 PDF(박성진_포트폴리오_정리본)에서 ●/(수정 필요)/(예정)로
// 표시된 미확정 값은 사실처럼 넣지 않는다. 값은 null(또는 빈 배열)로 두고,
// 해당 항목의 todos에 "확인 필요: ..." 형태로 기록한다.
// 초안 문구가 있으면 todos 안에 "초안: '...'"으로 보존한다.
// 모든 todos가 비어야 배포 가능한 상태다.
// ============================================

export type ProjectDomain = "ai-llm" | "web" | "ml-data" | "research";
export type ProjectKind = "team" | "personal" | "freelance" | "work";
export type ProjectStatus = "completed" | "in-progress" | "planned";

export interface ProjectMetric {
  label: string; // "과업 완료 시간"
  before: string; // "5분 30초"
  after: string; // "1분 10초"
  delta?: string; // "-79%"
}

export interface ProjectOutcome {
  kind: "award" | "publication" | "metric" | "etc";
  text: string;
  metric?: ProjectMetric;
  /** awards/publications 항목 id 상호 참조 */
  refId?: string;
}

export interface Project {
  id: string; // 필터·딥링크·상호참조 키 (예: "guider")
  title: string;
  subtitle: string;
  tagline: string; // 큰따옴표 한 줄 소개
  summary: string; // 개요 문단
  period: string | null;
  status: ProjectStatus;
  kind: ProjectKind;
  domains: ProjectDomain[];
  featured: boolean;
  techStack: string[];
  team: { size: number | null; members?: string };
  myRole: string | null;
  implementation: { title: string; description: string }[];
  problemSolving: { problem: string; approach: string; result?: string }[];
  outcomes: ProjectOutcome[];
  links: {
    github?: string | null;
    demo?: string | null;
    paper?: string | null;
    site?: string | null;
  };
  media?: { thumbnail?: string; images?: string[] };
  todos: string[];
}

export interface Publication {
  id: string;
  title: string;
  venue: string; // "KSII 한국인터넷정보학회 국제 논문지"
  venueType: "international-journal" | "domestic-conference";
  date: string | null;
  award?: string; // "우수학생논문상"
  projectId?: string;
  pdfUrl: string | null;
  todos: string[];
}

export interface Award {
  id: string;
  title: string;
  issuer: string | null;
  date: string | null;
  projectId?: string;
  status: "confirmed" | "pending"; // 세종 대회 = 결과 대기(pending)
  imageUrl: string | null; // 상장 이미지 (기능 채택 시)
  todos: string[];
}

export type ActivityTrack = "campus" | "external" | "education";

export interface Activity {
  id: string;
  track: ActivityTrack;
  title: string;
  organization?: string;
  period: string | null;
  status: "ongoing" | "completed" | "planned";
  description?: string;
  bullets?: string[];
  relatedProjectIds?: string[];
  todos: string[];
}

export interface Certification {
  id: string;
  name: string;
  status: "acquired" | "planned"; // 수료 과정은 Activity(education)로 관리
  issuer: string | null;
  date: string | null;
  todos: string[];
}

export interface SkillItem {
  name: string;
  /** 이 스택을 실제로 사용한 프로젝트 id — 근거 연결 */
  projectIds: string[];
  /** 프로젝트 외 근거 (예: RA 연구, 본 포트폴리오 사이트) */
  note?: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  skills: SkillItem[];
}

export interface Profile {
  name: string;
  nameEn: string | null;
  title: string; // 헤드라인 (예: "AI·LLM과 웹을 만드는 개발자")
  bio: string[]; // 소개 문장 배열
  education: { school: string; major: string; status: string };
  contact: { email: string | null };
  links: {
    portfolio: string;
    github: string | null;
    blog: string | null;
  };
  todos: string[];
}

export interface NavSection {
  id: string;
  label: string;
}

export interface SiteConfig {
  nav: NavSection[];
  meta: { title: string; description: string; url: string };
  resume: { pdfPath: string | null }; // 이력서 다운로드 기능 채택 시 사용
  todos: string[];
}
