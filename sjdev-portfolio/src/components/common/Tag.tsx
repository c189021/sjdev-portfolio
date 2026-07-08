import type { ReactNode } from "react";
import { cn } from "../../utils/helpers";

// 작은 사각 태그 — 기술 스택, 프로젝트 속성 표시용

interface TagProps {
  children: ReactNode;
  /** soft: 포인트색 연한 배경 (도메인 태그 등 강조용) */
  variant?: "default" | "soft";
  className?: string;
}

const Tag = ({ children, variant = "default", className }: TagProps) => (
  <span
    className={cn(
      "inline-flex items-center rounded-md px-2 py-0.5 text-[11.5px] font-medium",
      variant === "default"
        ? "border border-line bg-sunken/70 text-muted"
        : "bg-accent-soft text-accent",
      className
    )}
  >
    {children}
  </span>
);

export default Tag;
