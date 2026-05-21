"use client";

import Link from "next/link";
import { CtaSection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/ui/page-hero";
import { useLanguage } from "@/components/providers/language-provider";
import { contact } from "@/lib/site-config";

export function AboutPageContent() {
  const { messages: m } = useLanguage();
  const a = m.about;

  return (
    <>
      <PageHero
        eyebrow={m.nav.about}
        title={a.heroTitle}
        description={a.heroDesc}
        primaryCta={{ label: a.ctaPrimary, href: "/contact" }}
        secondaryCta={{ label: a.ctaSecondary, href: "/team" }}
      />
      <section className="section-pad relative z-10 bg-transparent">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="space-y-6">
              {a.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className="text-base leading-relaxed text-ink-muted sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="rounded-2xl p-8 glass sm:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
                {a.founderTitle}
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink">
                {contact.founder}
              </h2>
              <p className="mt-1 text-sm font-medium text-brand">{a.founderRole}</p>
              <p className="mt-5 text-sm leading-relaxed text-ink-muted sm:text-base">
                {a.founderBio}
              </p>
              <Link
                href="/team"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand-hover"
              >
                {a.viewTeam}
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
          <div className="mt-20 grid gap-5 sm:grid-cols-3">
            {m.valueProps.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-7 glass"
              >
                <h3 className="text-base font-semibold tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-16 overflow-hidden rounded-3xl border border-line bg-paper-tint p-8 text-center sm:p-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
              {a.expansionTitle}
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-base text-ink sm:text-lg">
              {a.expansionDesc}
            </p>
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
