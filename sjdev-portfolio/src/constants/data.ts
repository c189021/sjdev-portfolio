// ============================================
// 📊 Portfolio Data Constants
// ============================================

import type {
  PersonalInfo,
  TechStack,
  Project,
  Experience,
  NavSection,
} from "../types";

// 개인 정보
export const PERSONAL_INFO: PersonalInfo = {
  name: "성진",
  nameEn: "Sungjin",
  title: "Full-Stack Developer",
  bio: "프론트엔드의 섬세한 사용자 경험부터 백엔드의 견고한 데이터 아키텍처까지, 전체 개발 사이클을 아우르는 풀스택 개발자입니다.",
  university: "홍익대학교",
  major: "소프트웨어융합학과",
  contact: {
    email: "your.email@example.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    blog: "https://yourblog.com",
  },
};

// 네비게이션 섹션
export const NAV_SECTIONS: NavSection[] = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

// 기술 스택
export const TECH_STACKS: TechStack[] = [
  // Frontend
  { name: "React", icon: "⚛️", category: "frontend", proficiency: "advanced" },
  {
    name: "TypeScript",
    icon: "📘",
    category: "frontend",
    proficiency: "advanced",
  },
  {
    name: "Next.js",
    icon: "▲",
    category: "frontend",
    proficiency: "intermediate",
  },
  {
    name: "Tailwind CSS",
    icon: "🎨",
    category: "frontend",
    proficiency: "advanced",
  },
  { name: "HTML/CSS", icon: "🌐", category: "frontend", proficiency: "expert" },
  {
    name: "JavaScript",
    icon: "💛",
    category: "frontend",
    proficiency: "expert",
  },

  // Backend
  {
    name: "Spring Boot",
    icon: "🍃",
    category: "backend",
    proficiency: "advanced",
  },
  { name: "Java", icon: "☕", category: "backend", proficiency: "advanced" },
  {
    name: "Node.js",
    icon: "💚",
    category: "backend",
    proficiency: "intermediate",
  },
  {
    name: "REST API",
    icon: "🔗",
    category: "backend",
    proficiency: "advanced",
  },

  // Database
  { name: "MySQL", icon: "🐬", category: "database", proficiency: "advanced" },
  {
    name: "PostgreSQL",
    icon: "🐘",
    category: "database",
    proficiency: "intermediate",
  },
  { name: "Redis", icon: "🔴", category: "database", proficiency: "learning" },

  // DevOps & Tools
  { name: "Git", icon: "📦", category: "devops", proficiency: "advanced" },
  {
    name: "Docker",
    icon: "🐳",
    category: "devops",
    proficiency: "intermediate",
  },
  { name: "AWS", icon: "☁️", category: "devops", proficiency: "learning" },

  // Tools
  { name: "Figma", icon: "🎯", category: "tools", proficiency: "intermediate" },
  { name: "VS Code", icon: "💻", category: "tools", proficiency: "expert" },
  {
    name: "IntelliJ IDEA",
    icon: "🧠",
    category: "tools",
    proficiency: "advanced",
  },
];

// 프로젝트
export const PROJECTS: Project[] = [
  {
    id: "project-1",
    title: "풀스택 웹 애플리케이션",
    description:
      "React + Spring Boot + MySQL을 활용한 풀스택 프로젝트. RESTful API 설계부터 프론트엔드 UI/UX까지 전체 개발 사이클을 경험했습니다.",
    thumbnail: "/projects/fullstack-app.png",
    techStack: [
      "React",
      "TypeScript",
      "Spring Boot",
      "MySQL",
      "JPA",
      "Swagger",
    ],
    role: "Full-Stack Developer",
    duration: "2025.09 - 2025.12",
    highlights: [
      "JWT 기반 인증 시스템 구현",
      "RESTful API 설계 및 Swagger 문서화",
      "반응형 UI/UX 디자인",
      "MySQL 데이터베이스 스키마 설계",
    ],
    achievements: [
      {
        category: "performance",
        icon: "⚡",
        title: "쿼리 최적화",
        description: "MySQL 인덱스 최적화를 통한 조인 쿼리 응답 시간 개선",
        metric: "0.5s → 0.1s (80% 단축)",
      },
      {
        category: "backend",
        icon: "🔧",
        title: "REST API 아키텍처",
        description: "Spring Boot + JPA를 활용한 확장성 있는 API 설계",
        metric: "25개 엔드포인트",
      },
      {
        category: "database",
        icon: "🗄️",
        title: "데이터 설계",
        description: "ERD 설계를 통한 데이터 정규화 및 무결성 확보",
        metric: "3NF 정규화",
      },
    ],
    solutionOverlay: {
      challenge: "복잡한 조인 쿼리로 인한 API 응답 지연 문제",
      solution: "MySQL 실행 계획 분석 후 복합 인덱스 설계 및 쿼리 리팩토링",
      result: "평균 응답 시간 80% 단축, 동시 사용자 처리량 3배 향상",
    },
    erdImage: "/projects/fullstack-erd.png",
    links: {
      github: "https://github.com/yourusername/project-1",
      demo: "https://your-demo-url.com",
    },
    featured: true,
    gridSize: "large",
  },
  {
    id: "project-2",
    title: "개인 포트폴리오 웹사이트",
    description:
      "Vite + React + TypeScript + Tailwind v4를 활용한 모던 포트폴리오 사이트. 다크 모드 기반의 고급스러운 UI 구현.",
    thumbnail: "/projects/portfolio.png",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"],
    role: "Frontend Developer & Designer",
    duration: "2026.01",
    highlights: [
      "Tailwind v4 @theme 활용",
      "부드러운 스크롤 애니메이션",
      "반응형 디자인 시스템",
    ],
    achievements: [
      {
        category: "frontend",
        icon: "🎨",
        title: "디자인 시스템",
        description: "Tailwind v4 @theme을 활용한 커스텀 디자인 시스템 구축",
        metric: "50+ 유틸리티",
      },
      {
        category: "performance",
        icon: "🚀",
        title: "성능 최적화",
        description: "Lighthouse 퍼포먼스 점수 최적화",
        metric: "95+ 점수",
      },
    ],
    solutionOverlay: {
      challenge: "복잡한 애니메이션으로 인한 렌더링 성능 저하",
      solution: "Framer Motion의 layout 애니메이션과 will-change 최적화 적용",
      result: "60fps 안정적 유지, FCP 1.2초 달성",
    },
    links: {
      github: "https://github.com/yourusername/portfolio",
    },
    featured: true,
    gridSize: "medium",
  },
  {
    id: "project-3",
    title: "팀 협업 프로젝트",
    description:
      "대학교 팀 프로젝트로 진행한 웹 서비스 개발. Agile 방법론을 적용하여 협업 경험을 쌓았습니다.",
    thumbnail: "/projects/team-project.png",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    role: "Frontend Lead",
    duration: "2025.03 - 2025.06",
    highlights: [
      "팀 리더로서 프론트엔드 아키텍처 설계",
      "Git Flow 브랜치 전략 도입",
      "코드 리뷰 문화 정착",
    ],
    achievements: [
      {
        category: "backend",
        icon: "📦",
        title: "아키텍처 설계",
        description: "컴포넌트 기반 아키텍처로 재사용성 극대화",
        metric: "30+ 컴포넌트",
      },
    ],
    solutionOverlay: {
      challenge: "팀원 간 코드 스타일 불일치로 인한 협업 어려움",
      solution: "ESLint/Prettier 설정 통일 및 Git Flow 브랜치 전략 도입",
      result: "코드 리뷰 시간 50% 단축, 머지 충돌 80% 감소",
    },
    links: {
      github: "https://github.com/yourusername/team-project",
      notion: "https://notion.so/project-doc",
    },
    featured: false,
    gridSize: "small",
  },
];

// 경험/경력
export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    type: "education",
    title: "소프트웨어융합학과",
    organization: "홍익대학교",
    period: "2022.03 - 현재",
    description:
      "컴퓨터 과학 기초부터 소프트웨어 공학, 웹 개발까지 폭넓은 커리큘럼을 이수 중입니다.",
    achievements: ["전공 GPA 4.0+", "우수 프로젝트상 수상"],
  },
  {
    id: "exp-2",
    type: "activity",
    title: "개발 동아리 활동",
    organization: "홍익대학교 IT 동아리",
    period: "2023.03 - 현재",
    description:
      "웹 개발 스터디 및 팀 프로젝트 활동을 통해 실무 경험을 쌓고 있습니다.",
    achievements: ["React 스터디 리더", "해커톤 참여 및 수상"],
  },
  {
    id: "exp-3",
    type: "work",
    title: "프론트엔드 개발 인턴",
    organization: "스타트업 ABC",
    period: "2025.06 - 2025.08",
    description:
      "실제 서비스 개발에 참여하며 React와 TypeScript를 활용한 실무 경험을 쌓았습니다.",
    achievements: ["신규 기능 개발 및 배포", "코드 리뷰 참여"],
  },
];

// 스킬 카테고리 라벨
export const SKILL_CATEGORY_LABELS: Record<TechStack["category"], string> = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  devops: "DevOps",
  tools: "Tools",
};

// 숙련도 라벨
export const PROFICIENCY_LABELS: Record<TechStack["proficiency"], string> = {
  expert: "Expert",
  advanced: "Advanced",
  intermediate: "Intermediate",
  learning: "Learning",
};
