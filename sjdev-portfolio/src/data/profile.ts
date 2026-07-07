import type { Profile } from "../types/content";

export const PROFILE: Profile = {
  name: "박성진",
  nameEn: null,
  // 헤드라인 초안 — PDF 소개에서 도출. 문구 확정 필요 (todos 참조)
  title: "AI·LLM과 웹을 만드는 개발자",
  bio: [
    "홍익대학교 소프트웨어융합학과 재학. AI/LLM·웹 개발 중심으로 프로젝트를 수행해 왔습니다.",
    "학생회장과 1·2·3·4학년 과대표(4년 연속)로 리더십 경험을 이어왔습니다.",
    "국제 논문지 게재 1편을 포함해 논문 3편, 다수의 수상 이력을 보유하고 있습니다.",
  ],
  education: {
    school: "홍익대학교",
    major: "소프트웨어융합학과",
    status: "재학",
  },
  contact: {
    email: null,
  },
  links: {
    portfolio: "https://박성진.com",
    github: null,
    blog: null,
  },
  todos: [
    "확인 필요: 공개용 이메일 주소",
    "확인 필요: GitHub 주소 — 후보: github.com/c189021(저장소 계정) / PDF 헤더의 jsnbsg·sjjw1111 중 어느 것을 공개할지",
    "확인 필요: 기술 블로그(Tistory) 주소",
    "확인 필요: 영문 이름 표기 (git 설정상 'SeoungJin Park')",
    "확인 필요: 헤드라인(title) 문구 확정 — 현재는 초안",
  ],
};
