import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { CaseStudiesSection } from "./components/CaseStudiesSection";
import { ContributionsSection } from "./components/ContributionsSection";
import { CertificationsSection } from "./components/CertificationsSection";
import { ResumeSection } from "./components/ResumeSection";
import { BlogSection } from "./components/BlogSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0F14] via-[#0F1318] to-[#0B0F14] text-[#E5E7EB] overflow-x-hidden">
      {/* Enhanced background effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Premium noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' seed='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Dynamic radial gradient spots with improved positions */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#38BDF8] opacity-4 blur-[130px] rounded-full" />
        <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-[#2563EB] opacity-3 blur-[140px] rounded-full" />
        <div className="absolute top-1/3 right-1/5 w-[400px] h-[400px] bg-[#60A5FA] opacity-3 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-1/2 w-[600px] h-[600px] bg-[#0EA5E9] opacity-2 blur-[150px] rounded-full" />
        
        {/* Subtle animated overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14]/40 via-transparent to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CaseStudiesSection />
        <ContributionsSection />
        <CertificationsSection />
        <ResumeSection />
        <BlogSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}