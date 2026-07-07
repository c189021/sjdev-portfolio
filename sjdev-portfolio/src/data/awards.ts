import type { Award } from "../types/content";

export const AWARDS: Award[] = [
  {
    id: "award-devops",
    title: "DevOps 전문가 양성과정 발표회 최우수상",
    issuer: null,
    date: "2026",
    projectId: "guider",
    status: "confirmed",
    imageUrl: null,
    todos: [
      "확인 필요: 주최·수여 기관명",
      "확인 필요: 수상 월",
      "확인 필요: 상장 이미지 제공 여부 (상장 뷰어 기능 채택 시)",
    ],
  },
  {
    id: "award-otto",
    title: "대한전자공학회 하계학술대회 우수학생논문상",
    issuer: "대한전자공학회",
    date: "2026.6",
    projectId: "otto",
    status: "confirmed",
    imageUrl: null,
    todos: ["확인 필요: 상장 이미지 제공 여부 (상장 뷰어 기능 채택 시)"],
  },
  {
    id: "award-node",
    title: "우수동아리 상장 — N.O.D.E",
    issuer: "홍익대학교 총장",
    date: "2025 (1학기)",
    projectId: "node-portfolio",
    status: "confirmed",
    imageUrl: null,
    todos: ["확인 필요: 상장 이미지 제공 여부 (상장 뷰어 기능 채택 시)"],
  },
  {
    id: "award-ai-video",
    title: "AI 영상 창작 경진대회 장려상",
    issuer: null,
    date: null,
    status: "confirmed",
    imageUrl: null,
    todos: [
      "확인 필요: 주최 기관명",
      "확인 필요: 수상 연도",
      "확인 필요: 출품작 내용(생성형 AI 기반 영상 창작) 한 줄 설명",
      "확인 필요: 상장 이미지 제공 여부 (상장 뷰어 기능 채택 시)",
    ],
  },
  {
    id: "award-sejong",
    title: "세종 데이터 AI 활용 경진대회",
    issuer: null,
    date: null,
    status: "pending", // 수상 결과 대기 — 확정 전에는 노출 보류
    imageUrl: null,
    todos: [
      "대기: 수상 결과 확정 시 상 이름·등급 반영, 미수상 시 이 항목 삭제",
    ],
  },
];
