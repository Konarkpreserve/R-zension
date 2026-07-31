import AnimatedBackground from "../shared/components/Background/AnimatedBackground";
import MouseGlow from "../shared/components/Effects/MouseGlow";
import FloatingNavbar from "../shared/components/Navbar/FloatingNavbar";
import Hero from "../shared/components/Hero/Hero";
import ProblemSection from "../shared/components/Sections/ProblemSection";
import BetterWaySection from "../shared/components/Sections/BetterWaySection";
import LiveExperienceSection from "../shared/components/Sections/LiveExperienceSection";
import OracleSection from "../shared/components/Sections/OracleSection";
import CompetitionSection from "../shared/components/Sections/CompetitionSection";
import GrowthSection from "../shared/components/Sections/GrowthSection";
import BuiltForSection from "../shared/components/Sections/BuiltForSection";
import FinalCTASection from "../shared/components/CTA/FinalCTASection";
import Footer from "../shared/components/Footer/Footer";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#070A10] text-[#F1F5F9] selection:bg-cyan-500/30 selection:text-cyan-200">
      <AnimatedBackground />
      <MouseGlow />
      <FloatingNavbar />

      <main className="relative z-10 space-y-12 md:space-y-20">
        <Hero />
        <ProblemSection />
        <BetterWaySection />
        <LiveExperienceSection />
        <OracleSection />
        <CompetitionSection />
        <GrowthSection />
        <BuiltForSection />
        <FinalCTASection />
      </main>

      <Footer />
    </div>
  );
}