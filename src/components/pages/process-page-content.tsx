"use client";

import { CtaSection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/ui/page-hero";
import { useLanguage } from "@/components/providers/language-provider";

export function ProcessPageContent() {
  const { messages: m } = useLanguage();
  const p = m.pages.process;

  return (
    <>
      <PageHero
        eyebrow={m.nav.process}
        title={p.title}
        description={p.description}
        primaryCta={{ label: p.cta, href: "/contact" }}
      />
      <section className="section-pad relative z-10 bg-transparent">
        <div className="container-page max-w-3xl">
          {m.process.items.map((step, index) => (
            <article
              key={step.title}
              className="relative border-l border-line pl-8 pb-12 last:pb-0"
            >
              <span className="absolute -left-[1.1rem] flex h-9 w-9 items-center justify-center rounded-full border border-brand/15 bg-brand-soft text-[11px] font-semibold text-brand backdrop-blur-md shadow-sm">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                {step.title}
              </h2>
              <p className="mt-2 text-base font-medium text-brand">
                {step.description}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                {step.detail}
              </p>
            </article>
          ))}
        </div>
      </section>
      <CtaSection />
    </>
  );
}
