"use client";

import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ui/contact-form";
import { useLanguage } from "@/components/providers/language-provider";
import { contact, getWhatsAppUrl } from "@/lib/site-config";
import {
  BoltIcon,
  ChatBubbleIcon,
  ShieldIcon,
  WhatsappIcon,
  MailIcon,
} from "@/components/ui/icons";

const nudgeIcons = [BoltIcon, ChatBubbleIcon, ShieldIcon];

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

export function CtaSection() {
  const { messages: m } = useLanguage();
  const c = m.cta;

  return (
    <section id="contact" className="section-pad relative z-10">
      <div className="container-page">
        <div className="relative border-2 border-line bg-paper-surface">

          <div className="grid grid-cols-1 items-start gap-10 p-8 sm:p-12 lg:grid-cols-12 lg:gap-14">
            <div className="space-y-8 lg:col-span-5">
              <div>
                <p className="eyebrow">{c.eyebrow}</p>
                <h2 className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-[2.6rem]">
                  <HighlightedTitle title={c.title} highlight={c.titleHighlight} />
                </h2>
                <p className="mt-4 text-base leading-relaxed text-ink-muted">
                  {c.description}
                </p>
              </div>

              <ul className="space-y-3">
                {c.nudges.map((text, i) => {
                  const Icon = nudgeIcons[i] ?? BoltIcon;
                  return (
                    <li
                      key={text}
                      className="flex items-center gap-3 text-sm text-ink-muted"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center border-2 border-line bg-paper-alt text-brand">
                        <Icon className="h-4 w-4" />
                      </span>
                      {text}
                    </li>
                  );
                })}
              </ul>

            </div>

            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
