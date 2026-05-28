import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "default" | "sm" | "lg";

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
    "bg-brand text-white font-semibold",
    "border border-brand/20",
    "shadow-[0_1px_0_rgba(255,255,255,0.15)_inset,0_8px_22px_-6px_rgba(15,118,110,0.45)]",
    "hover:bg-brand-hover hover:shadow-[0_12px_28px_-8px_rgba(15,118,110,0.55)]",
    "active:translate-y-px",
  ].join(" "),
  secondary: [
    "bg-paper-surface text-ink font-semibold",
    "border border-line",
    "shadow-soft",
    "hover:border-brand/25 hover:text-brand hover:shadow-premium",
    "active:translate-y-px",
  ].join(" "),
  ghost: [
    "bg-transparent text-ink-muted font-medium",
    "border border-transparent",
    "hover:bg-paper-alt hover:text-ink",
  ].join(" "),
};

const sizes: Record<ButtonSize, string> = {
  default: "h-11 px-6 text-sm",
  sm: "h-9 px-5 text-sm",
  lg: "h-12 px-8 text-[15px]",
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
    "group inline-flex items-center justify-center gap-2 rounded-full transition-all duration-250",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-ring focus-visible:ring-offset-2 focus-visible:ring-offset-paper",
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
      <Link href={href} className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type="button" {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
