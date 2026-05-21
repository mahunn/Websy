"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const { messages: m } = useLanguage();
  const h = m.hero;

  return (
    <section className="relative overflow-hidden pt-16 sm:pt-24">
      <div className="container-page relative pb-20 sm:pb-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/60 px-3 py-1 text-[11px] font-medium tracking-wide text-ink-muted shadow-sm backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand/40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            {h.badge}
          </span>

          <h1 className="mt-8 text-balance text-[2.5rem] font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[4rem]">
            {h.title}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-ink-muted sm:text-xl">
            {h.subtext}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/contact" variant="primary" className="min-w-[200px]">
              {h.ctaPrimary}
            </Button>
            <Button href="/work" variant="secondary" className="min-w-[200px]">
              {h.ctaSecondary}
            </Button>
          </div>
        </div>

        <div className="relative mx-auto mt-20 max-w-5xl">
          <div className="absolute -inset-x-8 -top-8 bottom-0 -z-10 rounded-[2.5rem] bg-gradient-to-b from-brand-soft/60 via-transparent to-transparent blur-2xl" aria-hidden />
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: h.cardServices, href: "/services", value: h.previewServices },
              { label: h.cardWork, href: "/work", value: h.previewWork },
              { label: h.cardContact, href: "/contact", value: h.previewContact }
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative flex flex-col gap-2 rounded-2xl p-6 text-left glass glass-hover"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
                  {item.label}
                </p>
                <p className="text-base font-semibold leading-snug text-ink">
                  {item.value}
                </p>
                <span className="mt-2 inline-flex items-center gap-1 text-sm text-ink-subtle transition-colors group-hover:text-ink">
                  Explore
                  <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
