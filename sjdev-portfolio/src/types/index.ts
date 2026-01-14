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

// 기술적 성과 타입
export interface TechnicalAchievement {
  category: "performance" | "backend" | "database" | "frontend";
  icon: string;
  title: string;
  description: string;
  metric?: string;
}

// 기술적 난관 해결 타입
export interface SolutionOverlay {
  challenge: string;
  solution: string;
  result: string;
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
  achievements?: TechnicalAchievement[];
  solutionOverlay?: SolutionOverlay;
  erdImage?: string;
  links: {
    github?: string;
    demo?: string;
    notion?: string;
  };
  featured: boolean;
  gridSize?: "large" | "medium" | "small";
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

// 스킬 그룹 타입 (도메인별)
export interface SkillGroup {
  id: string;
  title: string;
  icon: string;
  description: string;
  color: "emerald" | "blue" | "purple" | "orange";
  skills: {
    name: string;
    level: number; // 1-100
    detail?: string;
  }[];
}

// Engineering Metrics 타입
export interface PerformanceComparison {
  label: string;
  before: number;
  after: number;
  unit: string;
  improvement: string;
}

export interface MetricCard {
  id: string;
  title: string;
  value: string | number;
  unit?: string;
  icon: string;
  description: string;
  color: "emerald" | "blue" | "purple" | "orange";
}

// 테마 타입
export type ThemeMode = "dark" | "light";
