import { createFileRoute } from "@tanstack/react-router";
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Raio Solar — Energia Solar em Belém e Região | Economia de até 95%" },
      { name: "description", content: "Empresa 100% paraense especializada em energia solar. Reduza sua conta de energia em até 95%. Atendimento em Belém e região metropolitana desde 2015." },
      { property: "og:title", content: "Raio Solar — Energia Solar em Belém e Região" },
      { property: "og:description", content: "Reduza sua conta de energia em até 95% com a força do sol do Pará. Tecnologia de vanguarda e engenharia 100% paraense." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
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
