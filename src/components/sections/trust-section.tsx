"use client";

// Visual "before vs after" pain strip — icons only, no paragraphs
const items = [
  { before: "🕸️", after: "⚡", label: "Slow → Fast" },
  { before: "😐", after: "😍", label: "Generic → Unique" },
  { before: "📉", after: "📈", label: "No sales → Converting" },
  { before: "🔍", after: "🏆", label: "Invisible → Found" },
];

export function TrustSection() {
  return (
    <section className="relative z-10 py-10">
      <div className="container-page">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.label}
              className="group relative flex flex-col items-center gap-3 overflow-hidden rounded-2xl glass glass-hover px-4 py-7 text-center"
            >
              {/* Before → After visual */}
              <div className="flex items-center gap-3 text-3xl sm:text-4xl">
                <span className="opacity-40">{item.before}</span>
                <span className="text-base text-brand opacity-60">→</span>
                <span>{item.after}</span>
              </div>
              <p className="text-xs font-semibold text-ink-muted group-hover:text-ink transition-colors">
                {item.label}
              </p>
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
