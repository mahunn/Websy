export function SiteBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      {/* Animated gradient base */}
      <div className="absolute inset-0 animate-gradient-shift bg-[length:400%_400%] bg-gradient-to-br from-[#E8F0FE] via-[#FDE8E8] via-[40%] to-[#EDE9FE]" />

      {/* Floating blobs — large, vivid, clearly moving */}
      <div className="absolute -top-20 -left-20 h-[800px] w-[800px] animate-blob rounded-full bg-[radial-gradient(circle,rgba(225,29,29,0.22)_0%,transparent_65%)] blur-2xl" />
      <div className="absolute top-[20%] -right-20 h-[750px] w-[750px] animate-blob-delayed rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.25)_0%,transparent_65%)] blur-2xl" />
      <div className="absolute top-[50%] left-[10%] h-[650px] w-[650px] animate-blob-slow rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.20)_0%,transparent_65%)] blur-2xl" />
      <div className="absolute bottom-[-5%] right-[5%] h-[700px] w-[700px] animate-blob rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.22)_0%,transparent_65%)] blur-2xl" />
      <div className="absolute bottom-[15%] -left-10 h-[550px] w-[550px] animate-blob-delayed rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.18)_0%,transparent_65%)] blur-2xl" />

      {/* Fine dot grid */}
      <div className="absolute inset-0 dot-pattern opacity-25" />
    </div>
  );
}
