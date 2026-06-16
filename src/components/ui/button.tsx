import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "inverse";

const buttonStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-primary text-foreground-inverse shadow-brand-sm hover:bg-brand-secondary",
  secondary:
    "bg-brand-secondary text-foreground-inverse shadow-brand-sm hover:bg-brand-secondary/90",
  outline:
    "border border-border/25 bg-background/40 text-foreground-primary hover:border-brand-primary hover:bg-surface hover:text-foreground-primary",
  ghost: "text-foreground-secondary hover:bg-muted hover:text-foreground-primary",
  inverse:
    "border border-foreground-inverse/30 text-foreground-inverse hover:bg-foreground-inverse/10 focus-visible:outline-foreground-inverse",
};

const baseStyles =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-brand px-lg py-sm font-secondary text-caption font-semibold uppercase transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-brand-primary disabled:pointer-events-none disabled:opacity-50";

type BaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonLinkProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function Button({
  children,
  variant = "primary",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button className={cn(baseStyles, buttonStyles[variant], className)} type={type} {...props}>
      {children}
    </button>
  );
}

// Uses native <a> for same-page anchors (#hash) to avoid Next.js App Router
// prefetch conflicts; uses <a> for external/mailto links, no wrapping needed.
export function ButtonLink({
  children,
  variant = "primary",
  className,
  href,
  ...props
}: ButtonLinkProps) {
  return (
    <a className={cn(baseStyles, buttonStyles[variant], className)} href={href} {...props}>
      {children}
    </a>
  );
}
