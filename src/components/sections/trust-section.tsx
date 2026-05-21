"use client";

import { useLanguage } from "@/components/providers/language-provider";

export function TrustSection() {
  const { messages: m } = useLanguage();

  return (
    <section className="relative z-10 border-y border-white/40 bg-white/50 py-14 backdrop-blur-xl sm:py-16">
      <div className="container-page">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-subtle sm:text-xs">
          {m.trust.line}
        </p>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {m.trust.logos.map((name) => (
            <div
              key={name}
              className="flex h-14 items-center justify-center rounded-xl border border-line bg-paper text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-subtle transition-colors duration-300 hover:border-line-strong hover:text-ink"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
