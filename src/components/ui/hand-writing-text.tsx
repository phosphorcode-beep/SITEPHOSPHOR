"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface HandWrittenTitleProps {
  title?: string;
  subtitle?: string;
}

function HandWrittenTitle({
  title = "Hand Written",
  subtitle = "Optional subtitle",
}: HandWrittenTitleProps) {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2.5, ease: [0.43, 0.13, 0.23, 0.96] as const },
        opacity: { duration: 0.5 },
      },
    },
  };

  return (
    <div className="relative mx-auto w-full max-w-4xl py-24">
      <div className="absolute inset-0">
        <motion.svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 600"
          initial="hidden"
          animate="visible"
          className="h-full w-full"
        >
          <title>{title}</title>
          <motion.path
            d="M 950 90
               C 1250 300, 1050 480, 600 520
               C 250 520, 150 480, 150 300
               C 150 120, 350 80, 600 80
               C 850 80, 950 180, 950 180"
            fill="none"
            strokeWidth="12"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={draw}
            className="text-brand-accent opacity-90"
          />
        </motion.svg>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <motion.h1
          className="flex items-center gap-2 text-4xl tracking-tighter text-foreground-inverse md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            className="text-xl text-foreground-inverse/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}

/* Circula uma palavra inline com um traço desenhado à mão (anima ao aparecer). */
function CircledText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] as const },
        opacity: { duration: 0.4 },
      },
    },
  };

  return (
    <span className={cn("relative inline-block", className)}>
      <span className="relative z-10">{children}</span>
      <motion.svg
        aria-hidden
        viewBox="0 0 300 100"
        preserveAspectRatio="none"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[155%] w-[112%] -translate-x-1/2 -translate-y-1/2 -rotate-1 overflow-visible text-brand-accent"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.path
          d="M 30,52 C 28,24 95,14 150,14 C 222,14 284,24 280,50 C 276,80 212,88 150,88 C 78,88 33,82 30,52"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
          variants={draw}
        />
      </motion.svg>
    </span>
  );
}

export { HandWrittenTitle, CircledText };
