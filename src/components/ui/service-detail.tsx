"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/language-provider";
import { cn } from "@/lib/cn";

const icons = {
  cart: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l1.732 6.43m0 0 1.732 6.43A1.125 1.125 0 0 0 8.207 12h7.586a1.125 1.125 0 0 0 1.087-.835l1.732-6.43m-11.136 0h11.136M9 21a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm9 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
    </svg>
  ),
  building: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5M3.75 21V7.5a2.25 2.25 0 0 1 2.25-2.25h4.5A2.25 2.25 0 0 1 12.75 7.5V21M3.75 10.5h16.5M9 10.5V6m1.5 0V6m1.5 0V6" />
    </svg>
  ),
  target: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 12H18M7.757 14.757l-1.59 1.59M6 12H4.5m7.257-9.243L12 4.5" />
    </svg>
  ),
  bolt: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
    </svg>
  )
} as const;

type ServiceDetailProps = {
  slug: string;
  icon: keyof typeof icons;
  reversed?: boolean;
};

export function ServiceDetail({ slug, icon, reversed }: ServiceDetailProps) {
  const { messages: m } = useLanguage();
  const service = m.services.items[slug];
  const p = m.pages.services;

  return (
    <article
      id={slug}
      className={cn(
        "grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-16",
        reversed && "lg:[&>div:first-child]:order-2"
      )}
    >
      <div>
        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-soft text-brand">
          {icons[icon]}
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          {service.title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
          {service.description}
        </p>
        <div className="mt-6 rounded-2xl border border-line bg-paper-tint px-4 py-3 text-sm text-ink-muted">
          <span className="mr-1 font-semibold text-brand">{p.idealFor}</span>
          {service.idealFor}
        </div>
      </div>
      <div className="rounded-2xl p-7 glass sm:p-8">
        <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-subtle">
          {p.whatYouGet}
        </h3>
        <ul className="mt-5 space-y-3">
          {service.deliverables.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-sm text-ink sm:text-base"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-xs text-brand">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand-hover"
        >
          {p.discuss}
          <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}
