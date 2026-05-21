import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-paper px-5 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">404</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-ink-muted">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-soft transition-all hover:bg-brand-hover hover:shadow-lift"
      >
        Back to home
        <span aria-hidden>→</span>
      </Link>
    </div>
  );
}
