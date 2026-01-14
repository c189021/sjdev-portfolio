// ============================================
// 🎨 Theme Constants
// ============================================

// 색상 팔레트 (CSS 변수와 동기화)
export const COLORS = {
  // Primary - Deep Navy Background
  navy: {
    950: "#020617", // 메인 배경
    900: "#0f172a",
    800: "#1e293b",
    700: "#334155",
    600: "#475569",
  },

  // Accent - Emerald
  emerald: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981", // Primary accent
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
  },

  // Secondary Accent - Blue
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6", // Secondary accent
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
  },

  // Neutral
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
  },
} as const;

// 그라디언트 프리셋
export const GRADIENTS = {
  primary: "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",
  subtle:
    "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)",
  glow: "radial-gradient(circle at center, rgba(16, 185, 129, 0.15) 0%, transparent 70%)",
} as const;

// 애니메이션 설정
export const ANIMATIONS = {
  duration: {
    fast: "150ms",
    normal: "300ms",
    slow: "500ms",
  },
  easing: {
    default: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    spring: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  },
} as const;

// 반응형 브레이크포인트
export const BREAKPOINTS = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

// 섹션 높이
export const SECTION_CONFIG = {
  minHeight: "100vh",
  padding: {
    desktop: "6rem",
    mobile: "4rem",
  },
} as const;
