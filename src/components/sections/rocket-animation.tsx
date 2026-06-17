"use client";

import { motion, useReducedMotion } from "motion/react";

/* Foguete subindo — recriado na IDV da Phosphor (olive/sage/ivory sobre near-black). */
export function RocketAnimation() {
  const reduced = useReducedMotion();

  const float = reduced
    ? {}
    : {
        animate: { y: [0, -10, 0] },
        transition: { duration: 3.2, repeat: Infinity, ease: "easeInOut" as const },
      };

  const flame = reduced
    ? {}
    : {
        animate: { scaleY: [1, 0.6, 1], opacity: [1, 0.75, 1] },
        transition: { duration: 0.45, repeat: Infinity, ease: "easeInOut" as const },
      };

  // Rastros de impulso subindo (eco das linhas coloridas do original, agora em verde).
  const trails = [
    { x: 62, delay: 0, color: "rgb(150 210 110)" },
    { x: 80, delay: 0.5, color: "rgb(64 132 52)" },
    { x: 120, delay: 0.25, color: "rgb(150 210 110)" },
    { x: 138, delay: 0.7, color: "rgb(64 132 52)" },
  ];

  return (
    <div className="card-lift relative flex h-full min-h-[260px] items-center justify-center overflow-hidden rounded-brand-lg border border-foreground-inverse/12 bg-background p-lg">
      {/* Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 72%, rgb(var(--color-primary) / 0.2), transparent 62%)",
        }}
      />
      {/* Grid técnico */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgb(var(--color-accent)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--color-accent)) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <svg
        viewBox="0 0 200 240"
        className="relative h-full max-h-[320px] w-auto"
        role="img"
        aria-label="Foguete subindo"
      >
        {/* Rastros */}
        {!reduced &&
          trails.map((t, i) => (
            <motion.rect
              key={i}
              x={t.x}
              width={4}
              rx={2}
              fill={t.color}
              initial={{ y: 150, height: 0, opacity: 0 }}
              animate={{ y: [150, 230], height: [0, 38, 0], opacity: [0, 0.9, 0] }}
              transition={{
                duration: 1.1,
                repeat: Infinity,
                ease: "easeIn",
                delay: t.delay,
              }}
            />
          ))}

        {/* Foguete */}
        <motion.g {...float}>
          {/* Chama */}
          <motion.path
            d="M86 150 Q100 196 100 196 Q100 196 114 150 Z"
            fill="rgb(150 210 110)"
            style={{ transformOrigin: "100px 150px" }}
            {...flame}
          />
          <motion.path
            d="M92 150 Q100 178 100 178 Q100 178 108 150 Z"
            fill="rgb(236 240 228)"
            style={{ transformOrigin: "100px 150px", opacity: 0.85 }}
            {...flame}
          />

          {/* Fins */}
          <path d="M72 128 L52 162 L72 150 Z" fill="rgb(64 132 52)" />
          <path d="M128 128 L148 162 L128 150 Z" fill="rgb(64 132 52)" />

          {/* Corpo */}
          <path
            d="M100 28 C124 28 132 70 132 104 C132 124 126 142 118 154 L82 154 C74 142 68 124 68 104 C68 70 76 28 100 28 Z"
            fill="rgb(150 210 110)"
            stroke="rgb(64 132 52)"
            strokeWidth={3}
          />

          {/* Janela */}
          <circle cx={100} cy={84} r={15} fill="rgb(13 17 10)" />
          <circle
            cx={100}
            cy={84}
            r={15}
            fill="none"
            stroke="rgb(236 240 228)"
            strokeWidth={3}
          />
          <circle cx={100} cy={84} r={6} fill="rgb(236 240 228)" opacity={0.85} />
        </motion.g>
      </svg>
    </div>
  );
}
