"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  align?: "left" | "center";
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  align = "left",
  primaryCta,
  secondaryCta,
  className
}: PageHeroProps) {
  return (
    <section
      className={cn("relative z-10 border-b border-line bg-transparent", className)}
    >
      <div className="container-page py-20 sm:py-24 lg:py-28">
        <div
          className={cn(
            "max-w-3xl",
            align === "center" && "mx-auto text-center"
          )}
        >
          {eyebrow ? (
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
            {title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted sm:text-xl">
            {description}
          </p>
          {(primaryCta || secondaryCta) && (
            <div
              className={cn(
                "mt-10 flex flex-col gap-3 sm:flex-row",
                align === "center" && "justify-center"
              )}
            >
              {primaryCta ? (
                <Button href={primaryCta.href} variant="primary">
                  {primaryCta.label}
                </Button>
              ) : null}
              {secondaryCta ? (
                <Button href={secondaryCta.href} variant="secondary">
                  {secondaryCta.label}
                </Button>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
