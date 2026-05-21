"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { ServiceCard } from "@/components/ui/service-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionLink } from "@/components/ui/section-link";
import { serviceMeta } from "@/lib/site-config";

type ServicesSectionProps = {
  preview?: boolean;
};

export function ServicesSection({ preview = false }: ServicesSectionProps) {
  const { messages: m } = useLanguage();

  return (
    <section className="section-pad relative z-10 bg-transparent">
      <div className="container-page">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow={m.services.eyebrow}
            title={m.services.title}
            description={m.services.description}
          />
          {preview ? <SectionLink href="/services" label={m.services.viewAll} /> : null}
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:gap-6">
          {serviceMeta.map((service) => (
            <ServiceCard key={service.slug} slug={service.slug} icon={service.icon} />
          ))}
        </div>
        {!preview ? (
          <p className="mt-12 text-center text-sm text-ink-subtle">
            {m.services.expansion}{" "}
            <a
              href="/about"
              className="font-semibold text-brand underline-offset-4 transition-colors hover:text-brand-hover hover:underline"
            >
              {m.services.expansionLink}
            </a>
            .
          </p>
        ) : null}
      </div>
    </section>
  );
}
