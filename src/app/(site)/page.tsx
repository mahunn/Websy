import { CtaSection } from "@/components/sections/cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { ProcessPreviewSection } from "@/components/sections/process-preview-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TrustSection } from "@/components/sections/trust-section";
import { ValuePropsSection } from "@/components/sections/value-props-section";
import { TeamShowcaseSection } from "@/components/sections/team-showcase-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PortfolioSection preview />
      <ServicesSection preview />
      <TrustSection />
      <ValuePropsSection />
      <ProcessPreviewSection />
      <TeamShowcaseSection />
      <CtaSection />
    </>
  );
}
