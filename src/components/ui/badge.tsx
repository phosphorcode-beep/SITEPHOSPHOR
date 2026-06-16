import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeTone = "light" | "dark";

const toneStyles: Record<BadgeTone, string> = {
  light: "border-brand-primary/25 bg-brand-primary/10 text-brand-primary",
  dark: "border-brand-accent/30 bg-brand-accent/10 text-brand-accent",
};

export function Badge({
  children,
  className,
  tone = "light",
}: {
  children: ReactNode;
  className?: string;
  tone?: BadgeTone;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-brand-sm border px-sm py-xs font-secondary text-caption font-semibold uppercase",
        toneStyles[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
