import type { ReactNode } from "react";
import { cn } from "../../utils/helpers";

// 모든 섹션의 공통 골격 — 컨테이너 폭·여백·제목 스타일을 한 곳에서 통일

interface SectionShellProps {
  id: string;
  eyebrow: string; // 영문 소제목 (예: "PROJECTS")
  title: string; // 한글 제목
  description?: string;
  children: ReactNode;
  className?: string;
}

const SectionShell = ({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionShellProps) => (
  <section id={id} className={cn("scroll-mt-16 border-b border-line/60", className)}>
    <div className="mx-auto max-w-5xl px-5 py-20 sm:py-24">
      <header>
        <p className="text-xs font-bold uppercase tracking-[0.09em] text-accent">
          {eyebrow}
        </p>
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
          {title}
        </h2>
        {description && (
          <p className="mt-3 max-w-2xl text-[15px] text-muted">{description}</p>
        )}
      </header>
      <div className="mt-10">{children}</div>
    </div>
  </section>
);

export default SectionShell;
