"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/site-config";
import {
  ArrowRightIcon,
  CartIcon,
  TargetIcon,
  BuildingIcon,
  BoltIcon,
  TrendingUpIcon,
} from "@/components/ui/icons";

const serviceIcons = [CartIcon, TargetIcon, BuildingIcon, BoltIcon];

function HighlightedTitle({ title, highlight }: { title: string; highlight: string }) {
  const idx = title.indexOf(highlight);
  if (idx === -1) return <>{title}</>;
  return (
    <>
      {title.slice(0, idx)}
      <span className="text-shimmer">{highlight}</span>
      {title.slice(idx + highlight.length)}
    </>
  );
}

export function HeroSection() {
  const { messages: m } = useLanguage();
  const h = m.hero;
  const home = m.home;

  return (
    <section className="relative overflow-hidden pt-10 sm:pt-16">
      <div className="container-page pb-20 sm:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <div className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-line bg-paper-surface/90 px-3.5 py-1.5 text-xs font-medium text-ink-muted shadow-soft backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-50" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
              </span>
              {h.badge}
            </div>

            <h1
              className="mt-7 animate-fade-up text-[2.35rem] font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]"
              style={{ animationDelay: "80ms" }}
            >
              <HighlightedTitle title={h.title} highlight={h.titleHighlight} />
            </h1>

            <p
              className="mt-5 animate-fade-up text-lg text-ink-muted"
              style={{ animationDelay: "140ms" }}
            >
              {h.subtext}
            </p>

            <div
              className="mt-9 flex animate-fade-up flex-col gap-3 sm:flex-row"
              style={{ animationDelay: "200ms" }}
            >
              <Button href={getWhatsAppUrl()} variant="primary" size="lg">
                {h.ctaPrimary}
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button href="/work" variant="secondary" size="lg">
                {h.ctaSecondary}
              </Button>
            </div>

            <div
              className="mt-10 flex animate-fade-up flex-wrap gap-2"
              style={{ animationDelay: "260ms" }}
            >
              {home.serviceChips.map((label, i) => {
                const Icon = serviceIcons[i] ?? CartIcon;
                return (
                  <Link
                    key={label}
                    href="/services"
                    className="inline-flex items-center gap-1.5 rounded-full border border-line bg-paper-surface/80 px-3 py-1.5 text-xs font-medium text-ink-muted transition-all hover:border-brand/20 hover:text-brand"
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {label}
                  </Link>
                );
              })}
            </div>
          </div>

          <div
            className="relative animate-fade-up lg:pl-4"
            style={{ animationDelay: "180ms" }}
          >
            <div className="animate-float rounded-2xl glass p-3 shadow-premium">
              <div className="flex items-center gap-1.5 border-b border-line px-3 pb-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-300/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
                <span className="mx-auto rounded-md bg-paper-alt px-8 py-1 text-[10px] text-ink-faint">
                  {home.heroMockUrl}
                </span>
              </div>
              <div className="space-y-3 p-4">
                <div className="rounded-xl bg-gradient-to-br from-brand/12 to-accent/8 p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-brand">
                    {m.site.name}
                  </p>
                  <p className="mt-2 text-lg font-bold text-ink">{home.heroMockHeadline}</p>
                  <div className="mt-4 inline-flex rounded-full bg-brand px-4 py-1.5 text-[11px] font-semibold text-white">
                    {home.heroMockCta}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((n) => (
                    <div key={n} className="h-14 rounded-lg bg-paper-alt" />
                  ))}
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-line bg-paper-surface px-3 py-2">
                  <TrendingUpIcon className="h-4 w-4 text-brand" />
                  <span className="text-xs text-ink-muted">{home.heroMockMetric}</span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 rounded-xl glass px-4 py-3 shadow-lift sm:-left-8">
              <p className="text-2xl font-bold text-brand">{home.heroDraftStat}</p>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-subtle">
                {home.heroDraftLabel}
              </p>
            </div>
            <div className="absolute -right-2 -top-3 rounded-xl glass px-4 py-3 shadow-lift sm:-right-6">
              <p className="text-2xl font-bold text-accent">{home.heroLaunchStat}</p>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-subtle">
                {home.heroLaunchLabel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
