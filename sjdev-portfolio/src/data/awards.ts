import type { Award } from "../types/content";

export const AWARDS: Award[] = [
  {
    id: "award-devops",
    title: "DevOps 전문가 양성과정 발표회 최우수상",
    issuer: "세종지역산업진흥원",
    date: "2026.05",
    projectId: "guider",
    status: "confirmed",
    imageUrl: "/awards/devops-award.png",
    todos: [],
  },
  {
    id: "award-otto",
    title: "대한전자공학회 하계학술대회 우수학생논문상",
    issuer: "대한전자공학회",
    date: "2026.6",
    projectId: "otto",
    status: "confirmed",
    imageUrl: "/awards/otto-award.png",
    todos: [],
  },
  {
    id: "award-node",
    title: "우수동아리 상장 — N.O.D.E",
    issuer: "홍익대학교 총장",
    date: "2025 (1학기)",
    projectId: "node-portfolio",
    status: "confirmed",
    imageUrl: "/awards/node-award.png",
    todos: [],
  },
  {
    id: "award-ai-video",
    title: "AI 영상 창작 경진대회 장려상",
    issuer: "제2회 BAXPO CUP · 제5회 CoGAI 2026 AI 영상 창작 경진대회",
    date: "2026",
    status: "confirmed",
    imageUrl: "/awards/ai-video-award.png",
    todos: [],
  },
  {
    id: "award-sejong",
    title: "세종 데이터 AI 활용 경진대회",
    issuer: null,
    date: null,
    status: "pending", // 2026-07 기준 진행 중 — 수상 결과 대기, 확정 전에는 노출 보류
    imageUrl: null,
    todos: [
      "대기: 수상 결과 확정 시 상 이름·등급 반영, 미수상 시 이 항목 삭제",
    ],
  },
];
