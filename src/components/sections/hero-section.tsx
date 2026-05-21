"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";

function HighlightedTitle({ title, highlight }: { title: string; highlight: string }) {
  const idx = title.indexOf(highlight);
  if (idx === -1) return <>{title}</>;

  const before = title.slice(0, idx);
  const after = title.slice(idx + highlight.length);

  return (
    <>
      {before}
      <span className="relative inline-block text-brand">
        <span className="relative z-10">{highlight}</span>
        <span className="absolute inset-x-[-0.15em] bottom-[0.04em] top-[0.5em] -z-0 origin-left animate-highlight-reveal rounded-md bg-brand/[0.07]" />
      </span>
      {after}
    </>
  );
}

export function HeroSection() {
  const { messages: m } = useLanguage();
  const h = m.hero;

  return (
    <section className="relative overflow-hidden pt-8 sm:pt-16">
      <div className="container-page relative pb-20 sm:pb-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/60 px-3 py-1 text-[11px] font-medium tracking-wide text-ink-muted shadow-sm backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand/40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            {h.badge}
          </span>

          <h1 className="mt-8 text-balance text-[2.5rem] font-bold leading-[1.1] tracking-tight text-ink sm:text-6xl lg:text-[4rem]">
            <HighlightedTitle title={h.title} highlight={h.titleHighlight} />
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-xl font-medium text-ink-muted sm:text-2xl">
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

        <div className="mx-auto mt-10 flex items-center justify-center gap-2 sm:mt-14 sm:gap-3">
          {[
            { icon: "🛒", label: "Ecommerce", href: "/services" },
            { icon: "📄", label: "Landing Pages", href: "/services" },
            { icon: "💼", label: "Portfolio", href: "/services" }
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              prefetch
              className="group inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-ink transition-all sm:gap-2.5 sm:px-5 sm:py-2.5 sm:text-sm glass glass-hover"
            >
              <span className="text-sm sm:text-base">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
