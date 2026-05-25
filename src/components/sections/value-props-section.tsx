"use client";

// Visual differentiators — icon + short label, no paragraphs
const points = [
  { icon: "⚡", label: "48h first draft" },
  { icon: "🎨", label: "Custom design" },
  { icon: "📱", label: "Mobile-first" },
  { icon: "🔍", label: "SEO built-in" },
  { icon: "💬", label: "WhatsApp support" },
  { icon: "💰", label: "Fixed pricing" },
];

export function ValuePropsSection() {
  return (
    <section className="section-pad relative z-10">
      <div className="container-page">
        <h2 className="mb-10 text-2xl font-bold text-ink sm:text-3xl">Why Websy</h2>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {points.map((p) => (
            <div
              key={p.label}
              className="group relative flex flex-col items-center gap-3 overflow-hidden rounded-2xl glass glass-hover py-7 px-4 text-center"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="text-4xl">{p.icon}</span>
              <p className="text-xs font-semibold leading-tight text-ink-muted group-hover:text-ink transition-colors">
                {p.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
