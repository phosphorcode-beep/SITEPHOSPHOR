import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function Input({ label, id, className, ...props }: InputProps) {
  const inputId = id ?? props.name ?? label.toLowerCase().replaceAll(" ", "-");

  return (
    <label className="grid gap-xs font-secondary text-caption font-semibold uppercase text-foreground-primary" htmlFor={inputId}>
      {label}
      <input
        className={cn(
          "min-h-11 rounded-brand border border-border/20 bg-background px-md py-sm font-primary text-body normal-case text-foreground-primary outline-none transition-colors placeholder:text-foreground-secondary focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20",
          className,
        )}
        id={inputId}
        {...props}
      />
    </label>
  );
}
