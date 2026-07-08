import type { SkillCategory } from "../types/content";

// 원칙: 근거 없는 숙련도 %가 아니라 "실제로 쓴 프로젝트"를 연결한다.
// projectIds는 src/data/projects.ts의 id를 참조한다.
// icon은 public/icons/의 SVG(브랜드 공식 아이콘) — 없으면 화면에서 모노그램 칩으로 표시.
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "ai-llm",
    label: "AI · LLM",
    skills: [
      {
        name: "Claude",
        projectIds: ["guider"],
        note: "LLM 통합·프롬프트 설계",
        icon: "claude.svg",
      },
      { name: "GPT-4o", projectIds: ["otto"], icon: "openai.svg" },
      {
        name: "Whisper",
        projectIds: ["otto"],
        note: "STT",
        icon: "openai.svg",
      },
      { name: "KoBERT", projectIds: ["otto"] },
      { name: "MediaPipe", projectIds: ["otto"], icon: "mediapipe.svg" },
      { name: "librosa", projectIds: ["otto"] },
      { name: "SFT 파인튜닝", projectIds: ["otto"] },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      {
        name: "React",
        projectIds: [
          "refactory",
          "fall-prevention",
          "senior-edu",
          "node-portfolio",
        ],
        note: "본 포트폴리오 사이트 포함",
        icon: "react.svg",
      },
      {
        name: "JavaScript",
        projectIds: ["guider", "node-portfolio", "snu-wordpress"],
        icon: "javascript.svg",
      },
      {
        name: "TypeScript",
        projectIds: [],
        note: "본 포트폴리오 사이트",
        icon: "typescript.svg",
      },
      { name: "HTML/CSS", projectIds: ["node-portfolio"], icon: "html5.svg" },
      {
        name: "Chrome 확장",
        projectIds: ["guider"],
        icon: "chrome.svg",
      },
      { name: "Flutter", projectIds: ["otto"], icon: "flutter.svg" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      {
        name: "Spring Boot",
        projectIds: ["fall-prevention", "senior-edu"],
        icon: "spring.svg",
      },
      { name: "FastAPI", projectIds: ["otto"], icon: "fastapi.svg" },
      {
        name: "PHP",
        projectIds: ["snu-wordpress", "node-portfolio"],
        icon: "php.svg",
      },
      {
        name: "WordPress",
        projectIds: ["snu-wordpress"],
        note: "커스텀 플러그인 개발",
        icon: "wordpress.svg",
      },
    ],
  },
  {
    id: "data-ml",
    label: "Data · ML",
    skills: [
      {
        name: "Python",
        projectIds: ["heat-demand", "fall-prevention"],
        icon: "python.svg",
      },
      {
        name: "TensorFlow/Keras",
        projectIds: ["heat-demand"],
        note: "LSTM 시계열 예측",
        icon: "tensorflow.svg",
      },
      {
        name: "정적분석",
        projectIds: ["refactory"],
        note: "CC·CBO·LOC — 분석 도구 직접 개발",
      },
      {
        name: "의료영상 처리",
        projectIds: [],
        note: "fastMRI·k-space — 학부 연구보조(RA)",
      },
    ],
  },
  {
    id: "db-infra",
    label: "Database · Infra",
    skills: [
      {
        name: "MySQL",
        projectIds: ["fall-prevention", "senior-edu"],
        icon: "mysql.svg",
      },
      {
        name: "PostgreSQL",
        projectIds: ["otto"],
        note: "PostGIS 포함",
        icon: "postgresql.svg",
      },
      { name: "Redis", projectIds: ["guider"], icon: "redis.svg" },
      { name: "ChromaDB", projectIds: ["otto"] },
      { name: "AWS", projectIds: ["node-portfolio"], icon: "aws.svg" },
      {
        name: "Git·GitHub Actions",
        projectIds: [],
        note: "본 사이트 CI/CD 포함",
        icon: "git.svg",
      },
    ],
  },
];
