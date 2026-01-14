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
    techStack: ["React", "TypeScript", "Spring Boot", "MySQL", "Tailwind CSS"],
    role: "Full-Stack Developer",
    duration: "2025.09 - 2025.12",
    highlights: [
      "JWT 기반 인증 시스템 구현",
      "RESTful API 설계 및 구현",
      "반응형 UI/UX 디자인",
      "MySQL 데이터베이스 스키마 설계",
    ],
    links: {
      github: "https://github.com/yourusername/project-1",
      demo: "https://your-demo-url.com",
    },
    featured: true,
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
    links: {
      github: "https://github.com/yourusername/portfolio",
    },
    featured: true,
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
    links: {
      github: "https://github.com/yourusername/team-project",
      notion: "https://notion.so/project-doc",
    },
    featured: false,
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
