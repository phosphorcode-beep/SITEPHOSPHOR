import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

const sizeStyles = {
  display: "text-display",
  h1: "text-h1",
  h2: "text-h2",
  h3: "text-h3",
} as const;

type HeadingProps = {
  as?: ElementType;
  size?: keyof typeof sizeStyles;
  children: ReactNode;
  className?: string;
};

export function Heading({ as: Component = "h2", size = "h2", children, className }: HeadingProps) {
  return (
    <Component className={cn("font-primary font-bold text-foreground-primary", sizeStyles[size], className)}>
      {children}
    </Component>
  );
}
