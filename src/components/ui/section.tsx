import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

export function Section({
  children,
  id,
  className,
  containerClassName,
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <section className={cn("py-2xl sm:py-3xl", className)} id={id}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
