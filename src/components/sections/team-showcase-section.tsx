"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/language-provider";
import { TeamCard } from "@/components/ui/team-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { teamMeta } from "@/lib/site-config";

export function TeamShowcaseSection() {
  const { messages: m } = useLanguage();

  return (
    <section className="section-pad relative z-10 bg-transparent">
      <div className="container-page">
        <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow={m.nav.about}
            title={m.team.homepageTitle}
            description={m.team.homepageDesc}
            align="left"
            className="max-w-3xl"
          />
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {teamMeta.map((member) => (
            <TeamCard key={member.name} name={member.name} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/team"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-hover"
          >
            <span>{m.team.viewFullTeam}</span>
            <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
