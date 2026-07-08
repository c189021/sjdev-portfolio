import type { Activity } from "../types/content";

export const ACTIVITIES: Activity[] = [
  // ===== 교내 =====
  {
    id: "student-council",
    track: "campus",
    title: "학생회장",
    organization: "홍익대학교 소프트웨어융합학과",
    period: "2026",
    status: "ongoing",
    todos: ["확인 필요: 주요 활동 2~3개"],
  },
  {
    id: "class-rep",
    track: "campus",
    title: "과대표 (4개 학년도)",
    period: "2021 · 2022 · 2025 · 2026학년도",
    status: "ongoing",
    todos: [],
  },
  {
    id: "mri-ra",
    track: "campus",
    title: "학부 연구보조(RA) 장학생 — 병렬 MRI 영상복원 연구",
    organization: "홍익대학교 (지도교수 오창현)",
    period: "2025.9 – 2025.12",
    status: "completed",
    bullets: [
      "fastMRI 공개 의료영상 데이터셋 기반 데이터 수집·로딩·전처리·구조 분석 보조",
      "k-space(sensor domain) 데이터 로딩, 복소수 처리, 푸리에 변환 기반 이미지 변환 실습",
      "가속화 정도(acceleration factor)의 영상 복원 영향 분석, 단일 딥러닝 모델 입력 데이터 구조 정리·실험 준비",
    ],
    todos: [],
  },
  {
    id: "node-club",
    track: "campus",
    title: "자기주도학습동아리 N.O.D.E",
    organization: "Network Of Developer Evolution",
    period: null,
    status: "ongoing",
    description:
      "운영진으로 활동. 팀 포트폴리오 웹사이트 결과물로 우수동아리 상장 수상.",
    relatedProjectIds: ["node-portfolio"],
    todos: ["확인 필요: 활동 기간"],
  },
  {
    id: "csf4-club",
    track: "campus",
    title: "자기주도학습동아리 csf4",
    period: null,
    status: "ongoing",
    description: "백준 모의고사 중심 알고리즘 스터디. 운영진으로 활동.",
    todos: ["확인 필요: 활동 기간"],
  },

  // ===== 대외 =====
  {
    id: "hanium",
    track: "external",
    title: "한이음 드림업",
    period: "2026",
    status: "ongoing",
    description:
      "산학 멘토링 기반 ICT 실무 프로젝트 — Otto 프로젝트와 동일 주제로 진행 중.",
    relatedProjectIds: ["otto"],
    todos: [],
  },
  {
    id: "ai-video-contest",
    track: "external",
    title: "AI 영상 창작 경진대회 — 장려상",
    organization: "제2회 BAXPO CUP · 제5회 CoGAI 2026",
    period: "2026",
    status: "completed",
    description: "생성형 AI 기반 월드컵 홍보 영상 출품, 장려상 수상.",
    todos: [],
  },
  {
    id: "sejong-contest",
    track: "external",
    title: "세종 데이터 AI 활용 경진대회",
    period: null,
    status: "ongoing",
    description: "데이터·AI 활용 경진 참가 — 수상 결과 대기 중.",
    todos: ["대기: 수상 결과 확정 시 반영"],
  },
  {
    id: "biohealth",
    track: "external",
    title: "바이오헬스",
    period: null,
    status: "planned", // 미착수 — 시작 전에는 화면 노출 안 함
    todos: ["대기: 미착수 — 시작 시 내용 채움 (그 전까지 비노출)"],
  },

  // ===== 교육 수료 =====
  {
    id: "edu-devops",
    track: "education",
    title: "DevOps 전문가 양성과정",
    organization: "세종지역산업진흥원",
    period: "2026.04 – 2026.05",
    status: "completed",
    description: "수료. 발표회에서 Guider로 최우수상 수상.",
    relatedProjectIds: ["guider"],
    todos: [],
  },
  {
    id: "edu-esg",
    track: "education",
    title: "ESG 웹 콘텐츠 리더 양성과정 4기",
    organization: "한국경제TV·고용노동부 미래내일 일경험",
    period: "2025.09 – 2025.12",
    status: "completed",
    description: "웹 콘텐츠 제작(광고·마케팅) 직무 과정 수료.",
    todos: ["대기: 수료증 이미지 (추가 예정)"],
  },
  {
    id: "edu-metaverse",
    track: "education",
    title: "메타버스 융합SW아카데미 5기",
    period: "2025.01 – 2025.07",
    status: "completed",
    description: "수료. 수료작으로 시니어 디지털 교육 웹 애플리케이션 개발.",
    relatedProjectIds: ["senior-edu"],
    todos: [
      "확인 필요: 주관 기관명",
      "대기: 수료증 이미지",
    ],
  },
];
