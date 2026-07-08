import type { ReactNode } from "react";
import { cn } from "../../utils/helpers";

type ButtonVariant = "primary" | "ghost" | "soft";
type ButtonSize = "sm" | "md";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** 있으면 <a>로 렌더링 */
  href?: string;
  /** 새 탭 열기 (href와 함께 사용) */
  external?: boolean;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: "bg-accent text-on-accent hover:bg-accent-hover",
  ghost: "border border-line bg-surface text-ink hover:border-accent/50 hover:text-accent",
  soft: "bg-accent-soft text-accent hover:bg-accent/15",
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: "px-3.5 py-2 text-[13px]",
  md: "px-5 py-2.5 text-sm",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  href,
  external = false,
  onClick,
  className,
  disabled = false,
}: ButtonProps) => {
  const classes = cn(
    "inline-flex items-center justify-center gap-1.5 rounded-lg font-bold transition-colors",
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    disabled && "pointer-events-none opacity-50",
    className
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
};

export default Button;
