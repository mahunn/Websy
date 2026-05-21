"use client";

import { WebsyWordmark } from "@/components/brand/websy-wordmark";
import { cn } from "@/lib/cn";

interface LogoProps {
  className?: string;
  compact?: boolean;
}

export function Logo({ className, compact = false }: LogoProps) {
  return (
    <span
      className={cn(
        "group inline-flex items-baseline transition-opacity duration-200 hover:opacity-85",
        className
      )}
    >
      <WebsyWordmark compact={compact} />
    </span>
  );
}
