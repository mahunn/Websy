"use client";

import { CtaSection } from "@/components/sections/cta-section";
import { ServiceDetail } from "@/components/ui/service-detail";
import { PageHero } from "@/components/ui/page-hero";
import { useLanguage } from "@/components/providers/language-provider";
import { getWhatsAppUrl, serviceMeta } from "@/lib/site-config";

export function ServicesPageContent() {
  const { messages: m } = useLanguage();
  const p = m.pages.services;

  return (
    <>
      <PageHero
        eyebrow={m.nav.services}
        title={p.title}
        description={p.description}
        primaryCta={{ label: p.ctaPrimary, href: "/contact" }}
        secondaryCta={{ label: p.ctaSecondary, href: getWhatsAppUrl() }}
      />
      <section className="section-pad relative z-10 bg-transparent">
        <div className="container-page space-y-24 sm:space-y-32">
          {serviceMeta.map((service, index) => (
            <ServiceDetail key={service.slug} slug={service.slug} icon={service.icon} reversed={index % 2 === 1} />
          ))}
        </div>
      </section>
      <CtaSection />
    </>
  );
}
