import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { DifferentialsSection } from "@/components/DifferentialsSection";
import { AdvantagesSection } from "@/components/AdvantagesSection";
import { FAQSection } from "@/components/FAQSection";
import { SavingsCalculatorSection } from "@/components/SavingsCalculatorSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <DifferentialsSection />
        <AdvantagesSection />
        <FAQSection />
        <SavingsCalculatorSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
