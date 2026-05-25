"use client";

import { cn } from "@/lib/cn";
import { useLanguage } from "@/components/providers/language-provider";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, messages } = useLanguage();

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-brand/10 bg-brand/[0.05] p-[3px] backdrop-blur-md",
        className
      )}
      role="radiogroup"
      aria-label={messages.lang.label}
    >
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={cn(
          "rounded-full px-2.5 py-1 text-[11px] font-semibold transition-all duration-200",
          locale === "en"
            ? "bg-brand text-white shadow-sm"
            : "text-ink-muted hover:text-ink"
        )}
        aria-pressed={locale === "en"}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLocale("bn")}
        className={cn(
          "rounded-full px-2.5 py-1 text-[11px] font-semibold transition-all duration-200",
          locale === "bn"
            ? "bg-brand text-white shadow-sm"
            : "text-ink-muted hover:text-ink"
        )}
        aria-pressed={locale === "bn"}
      >
        বাং
      </button>
    </div>
  );
}
