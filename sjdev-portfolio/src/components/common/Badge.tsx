import type { ReactNode } from "react";
import { cn } from "../../utils/helpers";

// 강조용 알약 배지 — 히어로 핵심 지표, 수상·논문 하이라이트 등

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

const Badge = ({ children, className }: BadgeProps) => (
  <span
    className={cn(
      "inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-3 py-1 text-[12.5px] font-semibold text-accent",
      className
    )}
  >
    {children}
  </span>
);

export default Badge;
