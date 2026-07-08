// ============================================
// useTheme — 다크/라이트 토글
// 초기값은 index.html 인라인 스크립트가 결정(저장값 > OS 설정),
// 여기서는 그 결과를 읽고 토글·저장만 담당한다.
// ============================================

import { useCallback, useState } from "react";

export type ThemeMode = "light" | "dark";

export const useTheme = () => {
  const [theme, setTheme] = useState<ThemeMode>(() =>
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next: ThemeMode = prev === "light" ? "dark" : "light";
      document.documentElement.classList.toggle("dark", next === "dark");
      try {
        localStorage.setItem("theme", next);
      } catch {
        // 저장 실패(시크릿 모드 등)해도 토글 자체는 동작
      }
      return next;
    });
  }, []);

  return { theme, toggleTheme };
};

export default useTheme;
