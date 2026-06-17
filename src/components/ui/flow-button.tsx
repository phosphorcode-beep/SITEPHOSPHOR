"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface FlowButtonProps {
  text?: string;
  href?: string;
  type?: "button" | "submit";
  className?: string;
}

export function FlowButton({
  text = "Modern Button",
  href,
  type = "button",
  className,
}: FlowButtonProps) {
  const classes = cn(
    "group relative inline-flex items-center gap-1 overflow-hidden rounded-[100px] border-[1.5px] border-brand-primary/45 bg-transparent px-8 py-3 text-sm font-semibold text-foreground-inverse cursor-pointer transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:rounded-[12px] hover:border-transparent active:scale-[0.95]",
    className,
  );

  const content = (
    <>
      {/* seta esquerda */}
      <ArrowRight className="absolute left-[-25%] z-[9] h-4 w-4 fill-none transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:left-4" />

      {/* texto */}
      <span className="relative z-[1] -translate-x-3 transition-all duration-[800ms] ease-out group-hover:translate-x-3">
        {text}
      </span>

      {/* círculo que cresce no hover */}
      <span className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:h-[260px] group-hover:w-[260px] group-hover:opacity-100" />

      {/* seta direita */}
      <ArrowRight className="absolute right-4 z-[9] h-4 w-4 fill-none transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:right-[-25%]" />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {content}
    </button>
  );
}
