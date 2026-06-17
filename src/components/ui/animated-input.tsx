"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface AnimatedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const containerVariants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.04 } },
};

const letterVariants = {
  initial: { y: 0 },
  animate: {
    y: "-135%",
    transition: { type: "spring" as const, stiffness: 300, damping: 20 },
  },
};

export function AnimatedInput({
  label,
  className,
  onChange,
  defaultValue,
  ...props
}: AnimatedInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(Boolean(defaultValue));
  const showLabel = isFocused || hasValue;

  return (
    <div className={cn("relative pt-4", className)}>
      <motion.div
        aria-hidden
        className={cn(
          "pointer-events-none absolute left-0 top-[calc(50%+0.5rem)] origin-left -translate-y-1/2 select-none transition-colors duration-200",
          showLabel ? "text-brand-accent" : "text-foreground-secondary",
        )}
        variants={containerVariants}
        initial="initial"
        animate={showLabel ? "animate" : "initial"}
      >
        {label.split("").map((char, index) => (
          <motion.span
            key={index}
            className="inline-block text-small"
            variants={letterVariants}
            style={{ willChange: "transform" }}
          >
            {char === " " ? " " : char}
          </motion.span>
        ))}
      </motion.div>

      <input
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => {
          setHasValue(e.target.value.length > 0);
          onChange?.(e);
        }}
        defaultValue={defaultValue}
        {...props}
        className="w-full border-b-2 border-border/35 bg-transparent py-2 text-base font-medium text-foreground-primary outline-none transition-colors placeholder-transparent focus:border-brand-primary"
      />
    </div>
  );
}
