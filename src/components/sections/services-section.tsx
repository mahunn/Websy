"use client";

import Link from "next/link";

const services = [
  {
    icon: "🛒",
    title: "Ecommerce",
    tags: ["Products", "Cart", "Payments"],
    href: "/services",
  },
  {
    icon: "🎯",
    title: "Landing Pages",
    tags: ["Ads", "Conversion", "A/B"],
    href: "/services",
  },
  {
    icon: "🏢",
    title: "Business Sites",
    tags: ["Brand", "SEO", "Trust"],
    href: "/services",
  },
  {
    icon: "⚡",
    title: "Performance",
    tags: ["Speed", "Core Vitals", "Uptime"],
    href: "/services",
  },
];

export function ServicesSection({ preview = false }: { preview?: boolean }) {
  return (
    <section className="section-pad relative z-10">
      <div className="container-page">
        {/* Header */}
        <div className="mb-12 flex items-end justify-between">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">What we build</h2>
          {preview && (
            <Link href="/services" className="text-sm font-semibold text-brand hover:text-brand-hover transition-colors">
              All services →
            </Link>
          )}
        </div>

        {/* Visual service cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group relative flex flex-col overflow-hidden rounded-2xl glass glass-hover p-6"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              {/* Big icon */}
              <span className="text-5xl">{s.icon}</span>

              <h3 className="mt-5 text-base font-bold text-ink group-hover:text-brand transition-colors">
                {s.title}
              </h3>

              {/* Feature pills */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {s.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-brand-soft border border-brand/5 px-2.5 py-0.5 text-[11px] text-brand">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Arrow reveal */}
              <span className="mt-5 text-sm font-semibold text-brand opacity-0 transition-all group-hover:opacity-100">→</span>

              <div className="pointer-events-none absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-brand/[0.07] blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
