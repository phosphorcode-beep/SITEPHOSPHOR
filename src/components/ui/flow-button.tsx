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

const SHIMMER_CSS = `
@keyframes flowShimmer {
  0%   { transform: translateX(-120%) skewX(-20deg); }
  100% { transform: translateX(320%) skewX(-20deg); }
}
.flow-btn-shimmer {
  animation: flowShimmer 2.6s ease-in-out infinite;
}
@keyframes flowPulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(64,132,52,0); border-color: rgb(var(--color-primary) / 0.45); }
  50%      { box-shadow: 0 0 20px 1px rgba(64,132,52,0.45); border-color: rgb(var(--color-primary) / 0.9); }
}
.flow-btn-pulse {
  animation: flowPulse 2.8s ease-in-out infinite;
}
@media (prefers-reduced-motion: reduce) {
  .flow-btn-shimmer, .flow-btn-pulse { animation: none; }
}
`;

export function FlowButton({
  text = "Modern Button",
  href,
  type = "button",
  className,
}: FlowButtonProps) {
  const classes = cn(
    "flow-btn-pulse group relative inline-flex items-center gap-1 overflow-hidden rounded-[100px] border-[1.5px] border-brand-primary/45 bg-transparent px-8 py-3 text-sm font-semibold text-foreground-inverse cursor-pointer transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:rounded-[12px] hover:border-transparent active:scale-[0.95]",
    className,
  );

  const content = (
    <>
      <style dangerouslySetInnerHTML={{ __html: SHIMMER_CSS }} />

      {/* shimmer contínuo */}
      <span
        className="flow-btn-shimmer pointer-events-none absolute inset-y-0 z-[2] w-[30%] opacity-0 group-hover:opacity-0"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)",
        }}
        aria-hidden
      />
      <span
        className="flow-btn-shimmer pointer-events-none absolute inset-y-0 z-[2] w-[30%]"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(157,176,122,0.22), transparent)",
          animationDelay: "0.4s",
        }}
        aria-hidden
      />

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
