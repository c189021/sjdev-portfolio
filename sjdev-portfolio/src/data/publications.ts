import type { Publication } from "../types/content";

export const PUBLICATIONS: Publication[] = [
  {
    id: "pub-guider",
    title:
      "An LLM-based Web Navigator (Guider) for Effective Information Search on Complex Websites",
    venue: "KSII 한국인터넷정보학회 국제 논문지",
    venueType: "international-journal",
    date: null,
    projectId: "guider",
    pdfUrl: null,
    todos: [
      "확인 필요: 게재 연도/호수",
      "확인 필요: 논문 링크(DOI) 또는 PDF 파일 제공 여부",
    ],
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
    pdfUrl: null,
    todos: ["확인 필요: 논문 링크(DOI) 또는 PDF 파일 제공 여부"],
  },
  {
    id: "pub-refactory",
    title: "대형 언어 모델들(LLM)과 인간 코드의 품질 비교 분석",
    venue: "ASK 한국정보처리학회",
    venueType: "domestic-conference",
    date: null,
    projectId: "refactory",
    pdfUrl: null,
    todos: [
      "확인 필요: 발표 연도/학술대회 회차",
      "확인 필요: 논문 링크(DOI) 또는 PDF 파일 제공 여부",
    ],
  },
];
