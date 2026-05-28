"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

type FaqItem = {
  question: string;
  answer: string;
};

export function FaqAccordion({ items }: { items: readonly FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line rounded-2xl glass">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-paper-tint sm:px-7"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold text-ink transition-colors group-hover:text-brand">
                {item.question}
              </span>
              <span
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-ink-subtle transition-all duration-300",
                  isOpen && "rotate-45 border-brand bg-brand text-white"
                )}
                aria-hidden
              >
                +
              </span>
            </button>
            {isOpen ? (
              <div className="px-6 pb-6 sm:px-7">
                <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
                  {item.answer}
                </p>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
