// ============================================
// 🏛️ Header Component
// 네비게이션 헤더
// ============================================

import { useState, useEffect } from "react";
import { cn } from "../../utils/helpers";
import type { NavSection } from "../../types";

interface HeaderProps {
  sections: NavSection[];
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const Header = ({ sections, activeSection, onNavigate }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-navy-950/80 backdrop-blur-xl border-b border-slate-800/50 shadow-lg"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("hero")}
            className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            SJ.dev
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {sections.slice(1).map((section) => (
              <button
                key={section.id}
                onClick={() => handleNavClick(section.id)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  activeSection === section.id
                    ? "text-emerald-400 bg-emerald-400/10"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                )}
              >
                {section.label}
              </button>
            ))}

            {/* CTA Button */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("contact");
              }}
              className="ml-4 px-5 py-2.5 rounded-lg bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-sm font-medium hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-200 hover:-translate-y-0.5"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-800/50 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={cn(
                  "w-full h-0.5 bg-white transition-all duration-300 origin-center",
                  isMobileMenuOpen && "rotate-45 translate-y-2"
                )}
              />
              <span
                className={cn(
                  "w-full h-0.5 bg-white transition-all duration-300",
                  isMobileMenuOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "w-full h-0.5 bg-white transition-all duration-300 origin-center",
                  isMobileMenuOpen && "-rotate-45 -translate-y-2"
                )}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isMobileMenuOpen ? "max-h-96 pb-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-2 pt-2 border-t border-slate-800/50">
            {sections.slice(1).map((section) => (
              <button
                key={section.id}
                onClick={() => handleNavClick(section.id)}
                className={cn(
                  "px-4 py-3 rounded-lg text-left text-sm font-medium transition-all duration-200",
                  activeSection === section.id
                    ? "text-emerald-400 bg-emerald-400/10"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                )}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
