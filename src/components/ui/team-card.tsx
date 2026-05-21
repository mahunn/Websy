"use client";

import Image from "next/image";
import { useLanguage } from "@/components/providers/language-provider";

type TeamCardProps = {
  name: string;
};

const PROFILE_PHOTOS: Record<string, string> = {
  "Mahin Ahmad": "/profile_pic/Mahin.jpg",
  "Nokib Al Hasan": "/profile_pic/Nokib.jpg",
  "Kamrul Hasan": "/profile_pic/Kamrul.png"
};

export function TeamCard({ name }: TeamCardProps) {
  const { messages: m } = useLanguage();
  const member = m.team.members[name];
  const photo = PROFILE_PHOTOS[name];
  const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2);

  return (
    <article className="group overflow-hidden rounded-2xl glass glass-hover">
      {/* Photo */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-white/30">
        {photo ? (
          <Image
            src={photo}
            alt={name}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-4xl font-semibold text-ink-soft">
            {initials}
          </div>
        )}
      </div>

      {/* Info — glass tray at the bottom */}
      <div className="p-5">
        <h3 className="text-base font-semibold tracking-tight text-ink">{name}</h3>
        <p className="mt-0.5 text-xs font-semibold text-brand">{member.role}</p>
        <p className="mt-2 text-xs leading-relaxed text-ink-muted">{member.description}</p>
      </div>
    </article>
  );
}
