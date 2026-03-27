import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CeoSection from "@/components/CeoSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProcessSection from "@/components/ProcessSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import BookCallButton from "@/components/BookCallButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CursorGlow />
      <Navbar />
      <HeroSection />
      <CeoSection />
      <ServicesSection />
      <WhyUsSection />
      <ProjectsSection />
      <ProcessSection />
      <CtaSection />
      <Footer />
      <BookCallButton />
    </div>
  );
};

export default Index;
