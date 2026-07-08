import { useScrollSection } from "./hooks";
import { NAV_SECTIONS } from "./data";
import { Header, Footer } from "./components/layout";
import {
  AboutSection,
  ActivitiesSection,
  ContactSection,
  HeroSection,
  ProjectsSection,
  ResearchSection,
} from "./components/sections";

function App() {
  const { activeSection, scrollToSection, scrollProgress } = useScrollSection({
    sections: NAV_SECTIONS,
  });

  return (
    <div className="min-h-screen">
      {/* 스크롤 진행 바 */}
      <div
        className="fixed left-0 top-0 z-60 h-0.5 bg-accent transition-[width] duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <Header activeSection={activeSection} onNavigate={scrollToSection} />

      <main className="pt-16">
        <HeroSection onNavigate={scrollToSection} />
        <AboutSection />
        <ProjectsSection />
        <ResearchSection />
        <ActivitiesSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
