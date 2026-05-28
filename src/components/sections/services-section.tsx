"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/language-provider";
import {
  CartIcon,
  TargetIcon,
  BuildingIcon,
  BoltIcon,
  ArrowUpRightIcon,
} from "@/components/ui/icons";

const serviceMeta = [
  { slug: "ecommerce", Icon: CartIcon, tags: ["Products", "Cart", "Payments"] },
  { slug: "landing-pages", Icon: TargetIcon, tags: ["Ads", "Conversion", "A/B"] },
  { slug: "business", Icon: BuildingIcon, tags: ["Brand", "SEO", "Trust"] },
  { slug: "performance", Icon: BoltIcon, tags: ["Speed", "Vitals", "Uptime"] },
] as const;

export function ServicesSection({ preview = false }: { preview?: boolean }) {
  const { messages: m } = useLanguage();
  const home = m.home;

  return (
    <section className="section-pad relative z-10">
      <div className="container-page">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="eyebrow">{m.services.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {home.servicesTitlePrefix}{" "}
              <span className="text-shimmer">{home.servicesTitleHighlight}</span>
            </h2>
          </div>
          {preview && (
            <Link href="/services" className="link-arrow shrink-0">
              {m.services.viewAll}
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </Link>
          )}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {serviceMeta.map(({ slug, Icon, tags }) => {
            const service = m.services.items[slug];
            return (
              <Link
                key={slug}
                href={`/services#${slug}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl glass glass-hover p-6"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                <span className="icon-chip icon-chip--lg">
                  <Icon className="h-6 w-6" />
                </span>

                <h3 className="mt-5 text-lg font-bold text-ink transition-colors group-hover:text-brand">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {service.shortDescription}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line bg-paper-alt/70 px-2.5 py-0.5 text-[11px] font-medium text-ink-subtle"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand opacity-0 transition-all duration-300 group-hover:opacity-100">
                  {m.services.learnMore.replace(" →", "")}
                  <ArrowUpRightIcon className="h-3.5 w-3.5" />
                </span>

                <div className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-brand/8 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
