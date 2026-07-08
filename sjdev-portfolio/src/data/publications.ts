import type { Publication } from "../types/content";

export const PUBLICATIONS: Publication[] = [
  {
    id: "pub-guider",
    title:
      "An LLM-based Web Navigator (Guider) for Effective Information Search on Complex Websites",
    venue: "KSII 한국인터넷정보학회 국제 논문지",
    venueType: "international-journal",
    date: "2026",
    projectId: "guider",
    pdfUrl: "/papers/guider-ksii.pdf",
    todos: [],
  },
  {
    id: "pub-otto",
    title:
      "멀티모달 AI 분석과 자기 투영 영상을 활용한 개인 맞춤형 감정 객관화 플랫폼",
    venue: "대한전자공학회 하계학술대회",
    venueType: "domestic-conference",
    date: "2026.6",
    award: "우수학생논문상",
    projectId: "otto",
    pdfUrl: "/papers/otto-kiiee.pdf",
    todos: [],
  },
  {
    id: "pub-refactory",
    title: "대형 언어 모델들(LLM)과 인간 코드의 품질 비교 분석",
    venue: "ASK 한국정보처리학회",
    venueType: "domestic-conference",
    date: "2026",
    projectId: "refactory",
    pdfUrl: "/papers/refactory-ask.pdf",
    todos: [],
  },
];
