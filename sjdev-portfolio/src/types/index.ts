// ============================================
// 📦 Type Definitions for sjdev-portfolio
// ============================================

// 기술 스택 타입
export interface TechStack {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "database" | "devops" | "tools";
  proficiency: "expert" | "advanced" | "intermediate" | "learning";
}

// 프로젝트 타입
export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  techStack: string[];
  role: string;
  duration: string;
  highlights: string[];
  links: {
    github?: string;
    demo?: string;
    notion?: string;
  };
  featured: boolean;
}

// 경험/경력 타입
export interface Experience {
  id: string;
  type: "education" | "work" | "activity";
  title: string;
  organization: string;
  period: string;
  description: string;
  achievements?: string[];
}

// 연락처 타입
export interface Contact {
  email: string;
  github: string;
  linkedin?: string;
  blog?: string;
}

// 개인 정보 타입
export interface PersonalInfo {
  name: string;
  nameEn: string;
  title: string;
  bio: string;
  university: string;
  major: string;
  contact: Contact;
}

// 섹션 네비게이션 타입
export interface NavSection {
  id: string;
  label: string;
  icon?: string;
}

// 테마 타입
export type ThemeMode = "dark" | "light";
