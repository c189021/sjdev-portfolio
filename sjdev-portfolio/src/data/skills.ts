import type { SkillCategory } from "../types/content";

// 원칙: 근거 없는 숙련도 %가 아니라 "실제로 쓴 프로젝트"를 연결한다.
// projectIds는 src/data/projects.ts의 id를 참조한다.
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "ai-llm",
    label: "AI · LLM",
    skills: [
      { name: "LLM 통합·프롬프트 설계 (Claude)", projectIds: ["guider"] },
      { name: "GPT-4o", projectIds: ["otto"] },
      { name: "Whisper (STT)", projectIds: ["otto"] },
      { name: "KoBERT", projectIds: ["otto"] },
      { name: "MediaPipe", projectIds: ["otto"] },
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
        note: "본 포트폴리오 사이트(React 19 + TypeScript + Tailwind v4) 포함",
      },
      {
        name: "JavaScript",
        projectIds: ["guider", "node-portfolio", "snu-wordpress"],
      },
      { name: "TypeScript", projectIds: [], note: "본 포트폴리오 사이트" },
      { name: "HTML/CSS", projectIds: ["node-portfolio"] },
      { name: "Chrome Extension", projectIds: ["guider"] },
      { name: "Flutter", projectIds: ["otto"] },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { name: "Spring Boot", projectIds: ["fall-prevention", "senior-edu"] },
      { name: "FastAPI", projectIds: ["otto"] },
      { name: "PHP", projectIds: ["snu-wordpress", "node-portfolio"] },
      { name: "WordPress 플러그인", projectIds: ["snu-wordpress"] },
    ],
  },
  {
    id: "data-ml",
    label: "Data · ML",
    skills: [
      { name: "Python", projectIds: ["heat-demand", "fall-prevention"] },
      { name: "LSTM 시계열 예측", projectIds: ["heat-demand"] },
      { name: "TensorFlow/Keras", projectIds: ["heat-demand"] },
      { name: "정적분석 (CC·CBO·LOC)", projectIds: ["refactory"] },
      {
        name: "의료영상 데이터 처리 (fastMRI·k-space)",
        projectIds: [],
        note: "학부 연구보조(RA) — 병렬 MRI 영상복원 연구",
      },
    ],
  },
  {
    id: "db-infra",
    label: "Database · Infra",
    skills: [
      { name: "MySQL", projectIds: ["fall-prevention", "senior-edu"] },
      { name: "PostgreSQL/PostGIS", projectIds: ["otto"] },
      { name: "Redis", projectIds: ["guider"] },
      { name: "ChromaDB", projectIds: ["otto"] },
      { name: "AWS 배포", projectIds: ["node-portfolio"] },
      {
        name: "Git · GitHub Actions",
        projectIds: [],
        note: "본 포트폴리오 사이트 CI/CD 등",
      },
    ],
  },
];
