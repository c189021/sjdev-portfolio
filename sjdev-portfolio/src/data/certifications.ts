import type { Certification } from "../types/content";

// 수료 과정(DevOps·ESG·메타버스 아카데미)은 activities.ts의 education 트랙에서 관리.
// 여기는 자격증만: 보유(acquired) / 취득 예정(planned).
// PDF 지침: 취득 예정분은 보유와 명확히 구분해 표시하거나, 지원 시점에 미취득이면 제외.
export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-gpt",
    name: "대화형 GPT(생성AI) 전문가 자격증 3급",
    status: "acquired",
    issuer: "국제문화기술진흥원",
    date: "2026.06",
    todos: [],
  },
  // ----- 취득 예정 (노출 여부는 사이트 구현 시 결정) -----
  {
    id: "cert-engineer-info",
    name: "정보처리기사",
    status: "planned",
    issuer: null,
    date: null,
    todos: [],
  },
  { id: "cert-sqld", name: "SQLD", status: "planned", issuer: null, date: null, todos: [] },
  { id: "cert-adsp", name: "ADSP", status: "planned", issuer: null, date: null, todos: [] },
  {
    id: "cert-toeic-speaking",
    name: "토익스피킹",
    status: "planned",
    issuer: null,
    date: null,
    todos: [],
  },
  {
    id: "cert-prompt",
    name: "프롬프트 엔지니어",
    status: "planned",
    issuer: null,
    date: null,
    todos: [],
  },
  { id: "cert-csts", name: "CSTS", status: "planned", issuer: null, date: null, todos: [] },
  { id: "cert-aws", name: "AWS", status: "planned", issuer: null, date: null, todos: [] },
  {
    id: "cert-aice",
    name: "KT AICE",
    status: "planned",
    issuer: null,
    date: null,
    todos: [],
  },
];
