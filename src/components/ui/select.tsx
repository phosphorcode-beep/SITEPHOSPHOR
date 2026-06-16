import type { SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type SelectOption = { value: string; label: string };

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  options: SelectOption[];
  placeholder?: string;
};

export function Select({ label, id, options, placeholder = "Selecione...", className, ...props }: SelectProps) {
  const selectId = id ?? props.name ?? label.toLowerCase().replaceAll(" ", "-");

  return (
    <label
      className="grid gap-xs font-secondary text-caption font-semibold uppercase text-foreground-primary"
      htmlFor={selectId}
    >
      {label}
      <select
        className={cn(
          "min-h-11 appearance-none rounded-brand border border-border/20 bg-background px-md py-sm font-primary text-body normal-case text-foreground-primary outline-none transition-colors focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20",
          className,
        )}
        id={selectId}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </label>
  );
}
