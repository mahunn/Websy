import { cn } from "@/lib/cn";

type WebsyWordmarkProps = {
  className?: string;
  compact?: boolean;
  iconOnly?: boolean;
};

/** Shared W letterform — growth stroke + conversion dot */
const W_PATH = "M0 12.5 L4.4 22 L9.4 14.5 L14.4 22 L18.8 8";
const W_DOT = { cx: 18.8, cy: 8, r: 1.85 };

const FONT =
  'var(--font-inter), Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';

/** Icon-only W (favicon, app icon) */
export function WebsyMark({ className }: { className?: string }) {
  return (
    <svg
      className={cn("block shrink-0", className)}
      viewBox="0 0 22 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d={W_PATH}
        stroke="currentColor"
        strokeWidth="2.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={W_DOT.cx} cy={W_DOT.cy} r={W_DOT.r} fill="#9046FF" />
    </svg>
  );
}

/**
 * Single unified wordmark — cool W flows into "ebsy", one SVG, no box or gap
 */
export function WebsyWordmark({
  className,
  compact = false,
  iconOnly = false
}: WebsyWordmarkProps) {
  if (iconOnly) {
    return (
      <WebsyMark
        className={cn(compact ? "h-7 w-7" : "h-8 w-8", className)}
      />
    );
  }

  return (
    <svg
      className={cn(
        "block w-auto shrink-0 overflow-visible",
        compact ? "h-9" : "h-10 sm:h-12",
        className
      )}
      viewBox="0 -3 68 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Websy"
      preserveAspectRatio="xMinYMid meet"
    >
      <path
        d={W_PATH}
        stroke="currentColor"
        strokeWidth="2.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={W_DOT.cx} cy={W_DOT.cy} r={W_DOT.r} fill="#9046FF" />
      <text
        x="20.5"
        y="22"
        fill="currentColor"
        fontFamily={FONT}
        fontSize="17.5"
        fontWeight="600"
        letterSpacing="-0.045em"
      >
        ebsy
      </text>
    </svg>
  );
}
