import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-brand border border-border/15 bg-background p-lg shadow-brand-sm", className)}>
      {children}
    </div>
  );
}
