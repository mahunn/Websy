"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { WebsyWordmark } from "@/components/brand/websy-wordmark";
import { cn } from "@/lib/cn";

interface LogoProps {
  className?: string;
  compact?: boolean;
}

export function Logo({ className, compact = false }: LogoProps) {
  const pathname = usePathname();

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo(0, 0);
    }
  }

  return (
    <Link
      href="/"
      onClick={handleClick}
      prefetch
      className={cn(
        "group inline-flex items-baseline transition-opacity duration-200 hover:opacity-85",
        className
      )}
      aria-label="Websy home"
    >
      <WebsyWordmark compact={compact} />
    </Link>
  );
}
