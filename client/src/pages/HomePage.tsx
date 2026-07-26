import { useState } from "react";
import AnimatedBackground from "../shared/components/Background/AnimatedBackground";
import MouseGlow from "../shared/components/Effects/MouseGlow";
import FloatingNavbar from "../shared/components/Navbar/FloatingNavbar";
import Hero from "../shared/components/Hero/Hero";
import TrustedBySection from "../shared/components/Sections/TrustedBySection";
import WhySection from "../shared/components/Sections/WhySection";
import UserJourneySection from "../features/journey/components/UserJourneySection";
import OracleSection from "../features/oracle/components/OracleSection";
import LeaderboardSection from "../features/leaderboard/components/LeaderboardSection";
import AnalyticsSection from "../features/analytics/components/AnalyticsSection";
import TestimonialsSection from "../shared/components/Sections/TestimonialsSection";
import FaqSection from "../shared/components/Sections/FaqSection";
import FinalCtaSection from "../shared/components/Sections/FinalCtaSection";
import Footer from "../shared/components/Footer/Footer";
import EarlyAccessModal from "../features/onboarding/components/EarlyAccessModal";

export default function HomePage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleOpenDemoModal = () => setIsDemoModalOpen(true);
  const handleCloseDemoModal = () => setIsDemoModalOpen(false);

  return (
    <div className="relative min-h-screen bg-[#070a10] text-[#f8fafc] overflow-x-hidden">
      {/* Background Lighting & Effects */}
      <AnimatedBackground />
      <MouseGlow />

      {/* Navigation */}
      <FloatingNavbar onOpenDemoModal={handleOpenDemoModal} />

      {/* Main Content Layout */}
      <main className="relative z-10">
        {/* Section 1: Hero */}
        <Hero onOpenDemoModal={handleOpenDemoModal} />

        {/* Section 2: Enterprise Partners (Trusted By) */}
        <TrustedBySection />

        {/* Section 3: Why R-zension */}
        <WhySection />

        {/* Section 4: Visual User Journey (How R-zension Works) */}
        <UserJourneySection onOpenDemoModal={handleOpenDemoModal} />

        {/* Section 5: Oracle AI Mission Control */}
        <OracleSection onOpenDemoModal={handleOpenDemoModal} />

        {/* Section 6: Global Ascension Leaderboard */}
        <LeaderboardSection onOpenDemoModal={handleOpenDemoModal} />

        {/* Section 7: Story-Driven Analytics */}
        <AnalyticsSection onOpenDemoModal={handleOpenDemoModal} />

        {/* Section 8: Executive Testimonials */}
        <TestimonialsSection />

        {/* Section 9: FAQ Accordion */}
        <FaqSection />

        {/* Section 10: Final CTA */}
        <FinalCtaSection onOpenDemoModal={handleOpenDemoModal} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Onboarding / Priority Early Access Modal */}
      <EarlyAccessModal isOpen={isDemoModalOpen} onClose={handleCloseDemoModal} />
    </div>
  );
}