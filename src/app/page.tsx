import Navigation from "@/components/portfolio/Navigation";
import HeroSection from "@/components/portfolio/HeroSection";
import SummarySection from "@/components/portfolio/SummarySection";
import TechStack from "@/components/portfolio/TechStack";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import Footer from "@/components/portfolio/Footer";

export default function Page() {
  return (
    <main
      style={{
        backgroundColor: "#0a0f1e",
        minHeight: "100vh",
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      <Navigation />
      <HeroSection />
      <TechStack />
      <SummarySection />
      <ProjectsSection />
      <Footer />
    </main>
  );
}
