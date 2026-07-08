import type { HTMLAttributes } from "react";
import { cn } from "../../utils/helpers";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** 호버 시 살짝 떠오르는 효과 (클릭 가능한 카드에 사용) */
  hover?: boolean;
}

const Card = ({ hover = false, className, children, ...rest }: CardProps) => (
  <div
    className={cn(
      "rounded-xl border border-line bg-surface p-5",
      hover &&
        "cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_8px_24px_rgba(38,34,26,0.07)]",
      className
    )}
    {...rest}
  >
    {children}
  </div>
);

export default Card;
