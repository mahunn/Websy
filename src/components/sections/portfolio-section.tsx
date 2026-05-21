"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { PortfolioCard } from "@/components/ui/portfolio-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionLink } from "@/components/ui/section-link";
import { portfolio } from "@/lib/site-config";

type PortfolioSectionProps = {
  preview?: boolean;
};

export function PortfolioSection({ preview = false }: PortfolioSectionProps) {
  const { messages: m } = useLanguage();

  return (
    <section className="section-pad relative z-10 bg-transparent">
      <div className="container-page">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow={m.portfolio.eyebrow}
            title={m.portfolio.title}
            description={m.portfolio.description}
            align={preview ? "left" : "center"}
            className={preview ? "" : "mx-auto"}
          />
          {preview ? <SectionLink href="/work" label={m.portfolio.viewAll} /> : null}
        </div>
        <div
          className={`mt-14 grid gap-6 ${
            preview ? "lg:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {portfolio.map((project) => (
            <PortfolioCard
              key={project.slug}
              slug={project.slug}
              href={project.href}
              imageTone={project.imageTone}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
