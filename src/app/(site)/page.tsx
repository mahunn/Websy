import { HeroSection } from "@/components/sections/hero-section";
import { TrustSection } from "@/components/sections/trust-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ValuePropsSection } from "@/components/sections/value-props-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { ProcessPreviewSection } from "@/components/sections/process-preview-section";
import { TeamShowcaseSection } from "@/components/sections/team-showcase-section";
import { CtaSection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ServicesSection preview />
      <ValuePropsSection />
      <PortfolioSection preview />
      <ProcessPreviewSection />
      <TeamShowcaseSection />
      <CtaSection />
    </>
  );
}
