// ============================================
// 🏷️ Badge Component
// 태그/배지 컴포넌트
// ============================================

import { cn } from "../../utils/helpers";

interface BadgeProps {
  children: string;
  variant?: "default" | "emerald" | "blue" | "purple";
  size?: "sm" | "md";
}

const Badge = ({ children, variant = "default", size = "sm" }: BadgeProps) => {
  const variants = {
    default: "bg-slate-800 text-slate-300 border-slate-700",
    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    blue: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    purple: "bg-purple-500/10 text-purple-400 border-purple-500/30",
  };

  const sizes = {
    sm: "px-2.5 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border font-medium",
        variants[variant],
        sizes[size]
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
