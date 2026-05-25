"use client";

import Link from "next/link";

const steps = [
  {
    num: "01",
    title: "Tell us about your project",
    desc: "Fill out our quick form or message us on WhatsApp. We respond within 2 hours — no gatekeeping, no sales calls.",
    duration: "Day 1",
    icon: "💬",
  },
  {
    num: "02",
    title: "We craft your strategy",
    desc: "We research your market, competitors, and audience to design a site built around what actually converts — not just what looks good.",
    duration: "Day 1–2",
    icon: "🧠",
  },
  {
    num: "03",
    title: "First draft in 48 hours",
    desc: "You see a real, clickable design in under 48 hours. No waiting weeks. We iterate fast based on your feedback.",
    duration: "Day 2–3",
    icon: "⚡",
  },
  {
    num: "04",
    title: "Launch & grow",
    desc: "We go live, hand over all files, and stay available on WhatsApp. Your success is our reputation.",
    duration: "Day 5–7",
    icon: "🚀",
  },
];

export function ProcessPreviewSection() {
  return (
    <section className="section-pad relative z-10">
      <div className="container-page">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">How It Works</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              From idea to live site in days, not months
            </h2>
          </div>
          <Link href="/process" className="shrink-0 text-sm font-semibold text-brand hover:text-brand-hover transition-colors">
            Full process →
          </Link>
        </div>

        {/* Steps — horizontal timeline on large, stacked on mobile */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.num} className="group relative flex flex-col rounded-2xl p-6 glass glass-hover overflow-hidden transition-all duration-300">
              {/* Connector line (desktop only, not last) */}
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-10 hidden h-px w-4 bg-brand/20 lg:block" style={{ right: "-1rem" }} />
              )}

              {/* Top accent */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />

              {/* Step number */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold tracking-wider text-brand">{step.num}</span>
                <span className="rounded-full border border-brand/10 bg-brand-soft px-2.5 py-1 text-[10px] font-medium text-brand">
                  {step.duration}
                </span>
              </div>

              {/* Icon */}
              <span className="mt-4 text-3xl">{step.icon}</span>

              {/* Title */}
              <h3 className="mt-4 text-base font-bold text-ink group-hover:text-brand transition-colors">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {step.desc}
              </p>

              {/* Hover glow */}
              <div className="pointer-events-none absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-brand/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
