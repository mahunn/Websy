import { HeroSection } from "@/components/sections/hero-section";
import { TrustSection } from "@/components/sections/trust-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ValuePropsSection } from "@/components/sections/value-props-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { CtaSection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <PortfolioSection preview />
      <ServicesSection preview />
      <ValuePropsSection />
      <CtaSection />
    </>
  );
}
