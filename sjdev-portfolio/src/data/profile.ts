import type { Profile } from "../types/content";

export const PROFILE: Profile = {
  name: "박성진",
  nameEn: "SeoungJin Park",
  // 헤드라인 초안 — PDF 소개에서 도출. 문구 확정 필요 (todos 참조)
  title: "AI·LLM과 웹을 만드는 개발자",
  intro:
    "AI·LLM과 웹을 만들고, 사용자 실험과 논문으로 검증하는 개발자입니다.",
  bio: [
    "홍익대학교 소프트웨어융합학과에서 AI/LLM·웹 중심으로 프로젝트를 만들어 왔습니다. 만드는 것에서 끝내지 않고, 실험과 논문으로 동작하는 근거를 남기는 개발을 지향합니다.",
    "학생회장과 4개 학년도 과대표로 사람을 모으고 팀을 이끄는 일에도 익숙합니다.",
  ],
  education: {
    school: "홍익대학교",
    major: "소프트웨어융합학과",
    status: "재학",
  },
  contact: {
    email: "sjjw1111@naver.com",
  },
  links: {
    portfolio: "https://박성진.com",
    github: "https://github.com/c189021",
    blog: "https://ddeonggae.tistory.com",
  },
  todos: [],
};
