import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-brand-sm border border-brand-primary/20 bg-brand-primary/10 px-sm py-xs text-caption font-semibold uppercase text-brand-primary",
        className,
      )}
    >
      {children}
    </span>
  );
}
