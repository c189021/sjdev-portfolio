import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { NAV_SECTIONS } from "../../data";
import { useTheme } from "../../hooks";
import { cn } from "../../utils/helpers";

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const MENU_SECTIONS = NAV_SECTIONS.filter((s) => s.id !== "hero");

const Header = ({ activeSection, onNavigate }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleNavigate = (sectionId: string) => {
    setMenuOpen(false);
    onNavigate(sectionId);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-canvas/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
        {/* 로고 */}
        <button
          onClick={() => handleNavigate("hero")}
          className="text-[17px] font-extrabold tracking-tight text-ink"
        >
          박성진<span className="text-accent">.</span>
        </button>

        {/* 데스크톱 내비게이션 */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">
            {MENU_SECTIONS.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => handleNavigate(section.id)}
                  className={cn(
                    "border-b-2 pb-0.5 text-sm transition-colors",
                    activeSection === section.id
                      ? "border-accent font-bold text-accent"
                      : "border-transparent text-muted hover:text-ink"
                  )}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          {/* 테마 토글 */}
          <button
            onClick={toggleTheme}
            aria-label={theme === "light" ? "다크 모드로 전환" : "라이트 모드로 전환"}
            className="rounded-lg border border-line bg-surface p-2 text-muted transition-colors hover:text-ink"
          >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          {/* 모바일 메뉴 버튼 */}
          <button
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
            className="rounded-lg border border-line bg-surface p-2 text-muted transition-colors hover:text-ink md:hidden"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {menuOpen && (
        <nav className="border-t border-line bg-canvas md:hidden">
          <ul className="flex flex-col px-5 py-2">
            {MENU_SECTIONS.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => handleNavigate(section.id)}
                  className={cn(
                    "block w-full py-2.5 text-left text-[15px]",
                    activeSection === section.id
                      ? "font-bold text-accent"
                      : "text-muted"
                  )}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
