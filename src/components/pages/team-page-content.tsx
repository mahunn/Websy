"use client";

import { CtaSection } from "@/components/sections/cta-section";
import { TeamCard } from "@/components/ui/team-card";
import { PageHero } from "@/components/ui/page-hero";
import { useLanguage } from "@/components/providers/language-provider";
import { teamMeta } from "@/lib/site-config";

export function TeamPageContent() {
  const { messages: m } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={m.footer.team}
        title={m.team.heroTitle}
        description={m.team.heroDesc}
        primaryCta={{ label: m.team.cta, href: "/contact" }}
      />
      <section className="section-pad relative z-10 bg-transparent">
        <div className="container-page">
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
            {teamMeta.map((member) => (
              <TeamCard key={member.name} name={member.name} />
            ))}
          </div>
          <p className="mx-auto mt-14 max-w-2xl text-center text-sm leading-relaxed text-ink-muted sm:text-base">
            {m.team.footerNote}
          </p>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
