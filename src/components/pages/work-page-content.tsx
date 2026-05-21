"use client";

import { CtaSection } from "@/components/sections/cta-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { PageHero } from "@/components/ui/page-hero";
import { useLanguage } from "@/components/providers/language-provider";

export function WorkPageContent() {
  const { messages: m } = useLanguage();
  const p = m.pages.work;

  return (
    <>
      <PageHero eyebrow={m.nav.work} title={p.title} description={p.description} primaryCta={{ label: p.cta, href: "/contact" }} />
      <PortfolioSection />
      <CtaSection />
    </>
  );
}
