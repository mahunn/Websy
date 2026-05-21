"use client";

import { useLanguage } from "@/components/providers/language-provider";

const accents = [
  { num: "text-emerald-600", dot: "bg-emerald-500" },
  { num: "text-sky-600", dot: "bg-sky-500" },
  { num: "text-orange-600", dot: "bg-orange-500" }
] as const;

export function ValuePropsSection() {
  const { messages: m } = useLanguage();

  return (
    <section className="section-pad relative z-10 bg-transparent">
      <div className="container-page">
        <div className="grid gap-5 md:grid-cols-3">
          {m.valueProps.map((item, index) => (
            <div
              key={item.title}
              className="group relative rounded-2xl p-7 glass glass-hover sm:p-8"
            >
              <div className="flex items-center gap-3">
                <span className={`h-2 w-2 rounded-full ${accents[index].dot}`} />
                <p className={`font-mono text-xs font-semibold tracking-wider ${accents[index].num}`}>
                  0{index + 1}
                </p>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
