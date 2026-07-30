import AnimatedBackground from "../shared/components/Background/AnimatedBackground";
import MouseGlow from "../shared/components/Effects/MouseGlow";
import Hero from "../shared/components/Hero/Hero";
import FloatingNavbar from "../shared/components/Navbar/FloatingNavbar";
import WhySection from "../shared/components/Sections/WhySection";

export default function HomePage() {
  return (
    <>
      <AnimatedBackground />
      <MouseGlow />
      <FloatingNavbar />
      <Hero />
      <WhySection />
    </>
  );
}