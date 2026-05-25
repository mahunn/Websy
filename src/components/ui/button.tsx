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
    "bg-gradient-to-r from-[#9046FF] to-[#7C35EB] text-white font-bold",
    "border border-[#9046FF]/20",
    "shadow-[0_4px_20px_rgba(144,70,255,0.30),inset_0_1px_0_rgba(255,255,255,0.2)]",
    "hover:from-[#7C35EB] hover:to-[#682FD0] hover:shadow-[0_6px_28px_rgba(144,70,255,0.45)]",
  ].join(" "),
  secondary: [
    "bg-brand-soft text-brand font-semibold",
    "border border-brand/12",
    "shadow-[0_4px_16px_rgba(144,70,255,0.06),inset_0_1px_0_rgba(255,255,255,0.05)]",
    "hover:bg-brand/[0.14] hover:shadow-[0_6px_24px_rgba(144,70,255,0.12)]",
  ].join(" "),
  ghost: [
    "bg-paper-surface text-ink-muted font-medium",
    "border border-line",
    "hover:bg-paper-alt hover:text-ink",
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
