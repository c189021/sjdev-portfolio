// ============================================
// 🚀 App.tsx - Main Application Entry
// sjdev-portfolio
// ============================================

import { useScrollSection } from "./hooks";
import { NAV_SECTIONS } from "./constants/data";

// Layout Components
import { Header, Footer } from "./components/layout";

// Section Components
import {
  HeroSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ExperienceSection,
  ContactSection,
} from "./components/sections";

function App() {
  // 스크롤 섹션 관리 훅
  const { activeSection, scrollToSection, scrollProgress } = useScrollSection({
    sections: NAV_SECTIONS,
  });

  return (
    <div className="relative min-h-screen bg-navy-950">
      {/* ===== Scroll Progress Bar ===== */}
      <div
        className="fixed top-0 left-0 h-0.5 bg-linear-to-r from-emerald-500 to-blue-500 z-100 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* ===== Header / Navigation ===== */}
      <Header
        sections={NAV_SECTIONS}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* ===== Main Content ===== */}
      <main className="relative">
        {/* Hero Section */}
        <HeroSection onNavigate={scrollToSection} />

        {/* About Section */}
        <AboutSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* ===== Footer ===== */}
      <Footer />

      {/* ===== Background Effects ===== */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>
    </div>
  );
}

export default App;
