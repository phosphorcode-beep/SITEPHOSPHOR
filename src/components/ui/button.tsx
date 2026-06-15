import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

const buttonStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-primary text-foreground-inverse shadow-brand-sm hover:bg-brand-primary/90",
  secondary:
    "bg-brand-secondary text-foreground-inverse shadow-brand-sm hover:bg-brand-secondary/90",
  outline:
    "border border-border bg-surface text-foreground-primary hover:border-brand-primary hover:text-brand-primary",
  ghost: "text-foreground-secondary hover:bg-muted hover:text-foreground-primary",
};

const baseStyles =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-brand px-lg py-sm text-small font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-brand-primary disabled:pointer-events-none disabled:opacity-50";

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

export function ButtonLink({
  children,
  variant = "primary",
  className,
  href,
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={cn(baseStyles, buttonStyles[variant], className)} href={href} {...props}>
      {children}
    </Link>
  );
}
