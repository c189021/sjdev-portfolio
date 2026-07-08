import type { ReactNode } from "react";
import { cn } from "../../utils/helpers";

// 필터 칩 — 클릭 가능(onClick)하면 버튼으로, 아니면 표시용 span으로 렌더링

interface ChipProps {
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

const Chip = ({ children, active = false, onClick, className }: ChipProps) => {
  const classes = cn(
    "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
    active
      ? "border border-accent bg-accent font-bold text-on-accent"
      : "border border-line bg-surface text-muted",
    onClick && !active && "hover:border-muted hover:text-ink",
    className
  );

  if (onClick) {
    return (
      <button onClick={onClick} className={classes}>
        {children}
      </button>
    );
  }
  return <span className={classes}>{children}</span>;
};

export default Chip;
