"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/providers/language-provider";
import { portfolio } from "@/lib/site-config";
import { CheckIcon } from "@/components/ui/icons";

const SCREENSHOTS: Record<string, string> = {
  "henley-zone": "/screenshots/henley-zone.png",
  glamora: "/screenshots/glamora.png",
  "mahin-ahmad": "/screenshots/mahin-ahmad.png"
};

type WorkDetailContentProps = {
  slug: string;
};

export function WorkDetailContent({ slug }: WorkDetailContentProps) {
  const { messages: m } = useLanguage();
  const meta = portfolio.find((p) => p.slug === slug);
  const project = m.portfolio.items[slug];
  const d = m.pages.workDetail;
  const screenshot = SCREENSHOTS[slug];

  if (!meta || !project) return null;

  return (
    <>
      <section className="relative z-10 border-b border-line bg-transparent pt-12">
        <div className="container-page">
          <div className="relative aspect-[21/9] max-h-[360px] w-full overflow-hidden rounded-3xl border border-line bg-paper-alt">
            {screenshot ? (
              <Image
                src={screenshot}
                alt={project.title}
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            ) : (
              <>
                <div className="absolute inset-0 dot-pattern opacity-50" />
                <div className="absolute -bottom-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-brand-soft blur-3xl" />
              </>
            )}
          </div>

          <div className="relative -mt-14 pb-12 sm:-mt-16">
            <Link
              href="/work"
              className="text-sm font-semibold text-brand transition-colors hover:text-brand-hover"
            >
              {d.back}
            </Link>
            <div className="mt-6 flex flex-col items-start">
              <span className="badge-ostad border border-line bg-paper-surface text-ink-subtle">
                {project.category}
              </span>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                {project.title}
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-ink-muted">
                {project.description}
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={meta.href} variant="primary">
                {d.viewLive}
              </Button>
              <Button href="/contact" variant="secondary">
                {d.startSimilar}
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="section-pad relative z-10 bg-transparent">
        <div className="container-page grid gap-12 lg:grid-cols-3 lg:gap-16">
          <div className="space-y-10 lg:col-span-2">
            <div>
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-subtle">
                {d.challenge}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
                {project.challenge}
              </p>
            </div>
            <div>
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-subtle">
                {d.solution}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
                {project.solution}
              </p>
            </div>
          </div>
          <aside className="h-fit rounded-2xl p-7 glass sm:p-8">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-subtle">
              {d.outcomes}
            </h2>
            <ul className="mt-5 space-y-3">
              {project.results.map((result) => (
                <li
                  key={result}
                  className="flex items-start gap-3 text-sm text-ink sm:text-base"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                    <CheckIcon className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  {result}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-ink-subtle">
              {d.category}: {project.category}
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
