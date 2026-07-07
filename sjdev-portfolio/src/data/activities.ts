import type { Activity } from "../types/content";

export const ACTIVITIES: Activity[] = [
  // ===== 교내 =====
  {
    id: "student-council",
    track: "campus",
    title: "학생회장",
    period: null,
    status: "completed",
    todos: [
      "확인 필요: 어느 조직(학과/단과대)의 학생회장인지",
      "확인 필요: 임기",
      "확인 필요: 주요 활동 2~3개",
      "확인 필요: 현재 진행 중인지 종료됐는지",
    ],
  },
  {
    id: "class-rep",
    track: "campus",
    title: "과대표 (1·2·3·4학년, 4년 연속)",
    period: null,
    status: "ongoing",
    todos: [
      "확인 필요: 학과 과대표가 맞는지",
      "확인 필요: 연도 범위 (예: 2022~2026)",
    ],
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
      "자기주도학습 개발 동아리. 팀 포트폴리오 웹사이트 결과물로 우수동아리 상장 수상.",
    relatedProjectIds: ["node-portfolio"],
    todos: ["확인 필요: 활동 기간", "확인 필요: 동아리 내 역할(운영진 여부 등)"],
  },
  {
    id: "csf4-club",
    track: "campus",
    title: "자기주도학습동아리 csf4",
    period: null,
    status: "ongoing",
    description: "백준 모의고사 중심 알고리즘 스터디.",
    todos: [
      "확인 필요: 활동 기간",
      "확인 필요: 역할·성과 (있으면 보강, 없으면 현재 서술 유지)",
    ],
  },

  // ===== 대외 =====
  {
    id: "hanium",
    track: "external",
    title: "한이음 드림업",
    period: null,
    status: "ongoing",
    description:
      "산학 멘토링 기반 ICT 실무 프로젝트 (졸업작품/종합설계) 진행 중.",
    todos: [
      "확인 필요: 참여 기간(연도)",
      "확인 필요: 프로젝트 주제 — Otto와 동일 건인지 별개인지",
    ],
  },
  {
    id: "ai-video-contest",
    track: "external",
    title: "AI 영상 창작 경진대회 — 장려상",
    period: null,
    status: "completed",
    description: "생성형 AI 기반 영상 창작 출품.",
    todos: ["확인 필요: 주최·연도 (수상 내역과 동일 항목)"],
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
    period: null,
    status: "completed",
    description: "수료. 발표회에서 Guider로 최우수상 수상.",
    relatedProjectIds: ["guider"],
    todos: ["확인 필요: 주관 기관·수료 기간"],
  },
  {
    id: "edu-esg",
    track: "education",
    title: "ESG 웹 콘텐츠 리더 양성과정 4기",
    organization: "한국경제TV·고용노동부 미래내일 일경험",
    period: "2025.09 – 2025.12",
    status: "completed",
    description: "웹 콘텐츠 제작(광고·마케팅) 직무 과정 수료.",
    todos: [],
  },
  {
    id: "edu-metaverse",
    track: "education",
    title: "메타버스 융합SW아카데미 5기",
    period: null,
    status: "completed",
    description: "수료. 수료작으로 시니어 디지털 교육 웹 애플리케이션 개발.",
    relatedProjectIds: ["senior-edu"],
    todos: ["확인 필요: 주관 기관·수료 기간"],
  },
];
