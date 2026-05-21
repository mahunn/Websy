export function SiteBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      {/* Base */}
      <div className="absolute inset-0 bg-[#F0F6FF]" />

      {/* Large colour washes */}
      <div className="absolute -top-40 -left-40 h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(225,29,29,0.18)_0%,transparent_70%)]" />
      <div className="absolute top-[30%] -right-40 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.20)_0%,transparent_70%)]" />
      <div className="absolute top-[55%] left-[15%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.14)_0%,transparent_70%)]" />
      <div className="absolute bottom-0 right-[10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.14)_0%,transparent_70%)]" />
      <div className="absolute bottom-[20%] -left-20 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.12)_0%,transparent_70%)]" />

      {/* Fine dot grid */}
      <div className="absolute inset-0 dot-pattern opacity-30" />
    </div>
  );
}
