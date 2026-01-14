// ============================================
// 💳 Card Component
// 재사용 가능한 카드 컴포넌트
// ============================================

import { ReactNode } from "react";
import { cn } from "../../utils/helpers";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

const Card = ({
  children,
  className,
  hover = true,
  glow = false,
}: CardProps) => {
  return (
    <div
      className={cn(
        "relative rounded-2xl border border-slate-800/50 bg-slate-900/30 backdrop-blur-sm p-6",
        hover &&
          "transition-all duration-300 hover:border-slate-700/50 hover:bg-slate-800/30 hover:-translate-y-1",
        glow && "hover:shadow-xl hover:shadow-emerald-500/10",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
