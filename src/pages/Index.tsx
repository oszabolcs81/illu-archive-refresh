import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LegalSection from "@/components/LegalSection";
import CookieConsentBanner from "@/components/CookieConsentBanner";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <LegalSection />
      <Footer />
      {/* Cookie consent banner – rendered outside the normal flow, fixed bottom */}
      <CookieConsentBanner />
    </div>
  );
};

export default Index;
