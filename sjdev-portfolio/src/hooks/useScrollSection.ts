// ============================================
// 🪝 useScrollSection Hook
// 현재 활성 섹션 감지 및 스크롤 관리
// ============================================

import { useState, useEffect, useCallback } from "react";
import type { NavSection } from "../types/content";

interface UseScrollSectionOptions {
  sections: NavSection[];
  offset?: number;
}

interface UseScrollSectionReturn {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  scrollProgress: number;
}

export const useScrollSection = ({
  sections,
  offset = 100,
}: UseScrollSectionOptions): UseScrollSectionReturn => {
  const [activeSection, setActiveSection] = useState<string>(
    sections[0]?.id || ""
  );
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  // 스크롤 진행률 계산
  const calculateScrollProgress = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    return Math.min(100, Math.max(0, progress));
  }, []);

  // 활성 섹션 감지
  const detectActiveSection = useCallback(() => {
    const scrollPosition = window.scrollY + offset;

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      const element = document.getElementById(section.id);

      if (element) {
        const { offsetTop } = element;
        if (scrollPosition >= offsetTop) {
          return section.id;
        }
      }
    }

    return sections[0]?.id || "";
  }, [sections, offset]);

  // 특정 섹션으로 스크롤
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // 헤더 높이 고려
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  }, []);

  // 스크롤 이벤트 핸들러
  useEffect(() => {
    const handleScroll = () => {
      setActiveSection(detectActiveSection());
      setScrollProgress(calculateScrollProgress());
    };

    // 초기 실행
    handleScroll();

    // 스크롤 이벤트 리스너 (throttle 적용)
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollListener, { passive: true });

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, [detectActiveSection, calculateScrollProgress]);

  return {
    activeSection,
    scrollToSection,
    scrollProgress,
  };
};

export default useScrollSection;
