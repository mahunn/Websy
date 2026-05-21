import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "default" | "sm";

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = BaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

const variants: Record<ButtonVariant, string> = {
  primary: [
    "bg-brand/90 text-white font-semibold",
    "border border-white/20",
    "shadow-[0_4px_16px_rgba(225,29,29,0.35),inset_0_1px_0_rgba(255,255,255,0.18)]",
    "hover:bg-brand hover:shadow-[0_6px_24px_rgba(225,29,29,0.45),inset_0_1px_0_rgba(255,255,255,0.22)]",
    "backdrop-blur-sm",
  ].join(" "),
  secondary: [
    "bg-white/55 text-ink font-semibold",
    "border border-white/60",
    "shadow-[0_4px_16px_rgba(15,23,42,0.07),inset_0_1px_0_rgba(255,255,255,0.80)]",
    "hover:bg-white/75 hover:shadow-[0_6px_24px_rgba(15,23,42,0.10),inset_0_1px_0_rgba(255,255,255,0.90)]",
    "backdrop-blur-md",
  ].join(" "),
  ghost: [
    "bg-white/30 text-ink-muted font-medium",
    "border border-white/40",
    "hover:bg-white/55 hover:text-ink",
    "backdrop-blur-sm",
  ].join(" "),
};

const sizes: Record<ButtonSize, string> = {
  default: "h-12 px-7 text-sm tracking-tight",
  sm: "h-9 px-5 text-sm",
};

export function Button({
  variant = "primary",
  size = "default",
  className,
  children,
  href,
  ...props
}: ButtonAsButton | ButtonAsLink) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-ring focus-visible:ring-offset-2",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={classes}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      type="button"
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
