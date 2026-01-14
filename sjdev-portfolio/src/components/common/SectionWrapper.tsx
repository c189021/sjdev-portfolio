// ============================================
// 🎯 SectionWrapper Component
// 섹션 공통 래퍼 (애니메이션, 레이아웃)
// ============================================

import { ReactNode } from "react";
import { useIntersectionObserver } from "../../hooks";
import { cn } from "../../utils/helpers";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  fullHeight?: boolean;
}

const SectionWrapper = ({
  id,
  children,
  className,
  containerClassName,
  fullHeight = true,
}: SectionWrapperProps) => {
  const { ref, isIntersecting } = useIntersectionObserver<HTMLElement>({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "relative px-4 sm:px-6 lg:px-8 py-16 md:py-24",
        fullHeight && "min-h-screen flex items-center",
        className
      )}
    >
      <div
        className={cn(
          "w-full max-w-7xl mx-auto transition-all duration-700",
          isIntersecting
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8",
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
