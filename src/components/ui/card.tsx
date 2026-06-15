import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-brand border border-border bg-surface p-lg shadow-brand-sm", className)}>
      {children}
    </div>
  );
}
