"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

/* ─── Tech logos (marquee) ──────────────────────────────────────── */

const TECH_LOGOS = [
  // Next.js
  () => (
    <svg
      className="h-[14px] sm:h-[18px] select-none opacity-50 hover:opacity-90 transition-opacity duration-300"
      style={{ fill: "rgb(var(--color-text-inverse))" }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 394 79"
      aria-label="Next.js"
    >
      <path d="M261.919 0.0330722H330.547V12.7H303.323V79.339H289.71V12.7H261.919V0.0330722Z" />
      <path d="M149.052 0.0330722V12.7H94.0421V33.0772H138.281V45.7441H94.0421V66.6721H149.052V79.339H80.43V12.7H80.4243V0.0330722H149.052Z" />
      <path d="M183.32 0.0661486H165.506L229.312 79.3721H247.178L215.271 39.7464L247.127 0.126654L229.312 0.154184L206.352 28.6697L183.32 0.0661486Z" />
      <path d="M201.6 56.7148L192.679 45.6229L165.455 79.4326H183.32L201.6 56.7148Z" />
      <path clipRule="evenodd" d="M80.907 79.339L17.0151 0H0V79.3059H13.6121V16.9516L63.8067 79.339H80.907Z" fillRule="evenodd" />
    </svg>
  ),
  // TypeScript
  () => (
    <div className="flex items-center gap-1.5 opacity-50 hover:opacity-90 transition-opacity duration-300">
      <svg
        className="h-[18px] sm:h-[22px]"
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="TypeScript"
      >
        <rect width="256" height="256" rx="20" fill="#3178C6" />
        <path
          d="M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.704 10.669-11.394 2.622-4.689 3.932-10.486 3.932-17.391 0-5.06-.749-9.488-2.248-13.286-1.498-3.798-3.698-7.217-6.598-10.257-2.9-3.04-6.469-5.795-10.707-8.268-4.238-2.473-9.024-4.821-14.358-7.044-3.903-1.613-7.408-3.165-10.516-4.658-3.108-1.492-5.747-3.026-7.917-4.6-2.17-1.574-3.848-3.267-5.035-5.079-1.187-1.812-1.78-3.858-1.78-6.138 0-2.105.538-3.993 1.615-5.667 1.076-1.673 2.57-3.104 4.484-4.29 1.913-1.187 4.205-2.102 6.876-2.747 2.67-.645 5.576-.968 8.718-.968 2.323 0 4.753.168 7.29.503 2.537.336 5.074.873 7.611 1.614 2.537.741 4.996 1.702 7.377 2.883 2.381 1.182 4.516 2.568 6.406 4.16V131.42c-4.144-1.614-8.583-2.826-13.319-3.636-4.736-.809-9.903-1.214-15.501-1.214-6.545 0-12.733.705-18.565 2.116-5.832 1.41-10.941 3.566-15.327 6.466-4.386 2.9-7.839 6.604-10.359 11.11-2.52 4.507-3.78 9.833-3.78 15.977 0 7.906 2.296 14.69 6.887 20.353 4.592 5.662 11.646 10.469 21.164 14.419 4.082 1.613 7.912 3.208 11.49 4.783 3.578 1.575 6.674 3.229 9.287 4.963 2.614 1.734 4.682 3.651 6.204 5.749 1.522 2.099 2.283 4.479 2.283 7.14 0 1.963-.463 3.785-1.39 5.466-.926 1.681-2.344 3.147-4.254 4.397-1.91 1.25-4.234 2.231-6.973 2.942-2.738.71-5.898 1.066-9.48 1.066-6.156 0-12.201-1.082-18.135-3.248-5.934-2.165-11.358-5.455-16.272-9.869zm-68.552-109.55H18.338v-22.9H199.41v22.9h-59.746v165.284h-27.698V90.925z"
          fill="#fff"
        />
      </svg>
      <span className="font-secondary text-[12px] font-semibold uppercase text-foreground-inverse/60">TypeScript</span>
    </div>
  ),
  // Tailwind
  () => (
    <svg
      className="h-[16px] sm:h-[20px] select-none opacity-50 hover:opacity-90 transition-opacity duration-300"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 262 33"
      aria-label="Tailwind CSS"
    >
      <path
        fill="#38BDF8"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27 0C19.8 0 15.3 3.6 13.5 10.8C16.2 7.2 19.35 5.85 22.95 6.75C25.004 7.263 26.472 8.754 28.097 10.403C30.744 13.09 33.808 16.2 40.5 16.2C47.7 16.2 52.2 12.6 54 5.4C51.3 9 48.15 10.35 44.55 9.45C42.496 8.937 41.028 7.446 39.403 5.797C36.756 3.11 33.692 0 27 0ZM13.5 16.2C6.3 16.2 1.8 19.8 0 27C2.7 23.4 5.85 22.05 9.45 22.95C11.504 23.464 12.972 24.954 14.597 26.603C17.244 29.29 20.308 32.4 27 32.4C34.2 32.4 38.7 28.8 40.5 21.6C37.8 25.2 34.65 26.55 31.05 25.65C28.996 25.137 27.528 23.646 25.903 21.997C23.256 19.31 20.192 16.2 13.5 16.2Z"
      />
      <path
        fill="rgba(242,241,231,0.7)"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M80.996 13.652H76.284V22.772C76.284 25.204 77.88 25.166 80.996 25.014V28.7C74.688 29.46 72.18 27.712 72.18 22.772V13.652H68.684V9.69996H72.18V4.59596L76.284 3.37996V9.69996H80.996V13.652ZM98.958 9.69996H103.062V28.7H98.958V25.964C97.514 27.978 95.272 29.194 92.308 29.194C87.14 29.194 82.846 24.824 82.846 19.2C82.846 13.538 87.14 9.20596 92.308 9.20596C95.272 9.20596 97.514 10.422 98.958 12.398V9.69996ZM92.954 25.28C96.374 25.28 98.958 22.734 98.958 19.2C98.958 15.666 96.374 13.12 92.954 13.12C89.534 13.12 86.95 15.666 86.95 19.2C86.95 22.734 89.534 25.28 92.954 25.28Z"
      />
    </svg>
  ),
  // Node.js text
  () => (
    <div className="flex items-center gap-1.5 opacity-50 hover:opacity-90 transition-opacity duration-300">
      <div className="h-4 w-4 rounded-full" style={{ background: "#339933" }} aria-hidden />
      <span className="font-secondary text-[12px] font-semibold uppercase text-foreground-inverse/60">Node.js</span>
    </div>
  ),
  // PostgreSQL text
  () => (
    <div className="flex items-center gap-1.5 opacity-50 hover:opacity-90 transition-opacity duration-300">
      <svg className="h-[18px] w-auto" viewBox="0 0 32 32" aria-label="PostgreSQL">
        <circle cx="16" cy="16" r="16" fill="#336791" />
        <text x="50%" y="55%" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="10" fontFamily="monospace" fontWeight="bold">PG</text>
      </svg>
      <span className="font-secondary text-[12px] font-semibold uppercase text-foreground-inverse/60">PostgreSQL</span>
    </div>
  ),
  // Docker text
  () => (
    <div className="flex items-center gap-1.5 opacity-50 hover:opacity-90 transition-opacity duration-300">
      <div className="h-4 w-4 rounded" style={{ background: "#2496ED" }} aria-hidden />
      <span className="font-secondary text-[12px] font-semibold uppercase text-foreground-inverse/60">Docker</span>
    </div>
  ),
];

/* ─── Canvas pixel physics ──────────────────────────────────────── */

type Pixel = {
  x: number; y: number; color: string; ctx: CanvasRenderingContext2D;
  speed: number; size: number; sizeStep: number; minSize: number;
  maxSizeInt: number; maxSize: number; delay: number; counter: number;
  counterStep: number; isIdle: boolean; isReverse: boolean; isShimmer: boolean;
  draw: () => void; appear: () => void; disappear: () => void; shimmer: () => void;
};

function createPixel(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  x: number, y: number, color: string, baseSpeed: number, delay: number
): Pixel {
  const rand = (min: number, max: number) => Math.random() * (max - min) + min;
  const p: Pixel = {
    x, y, color, ctx,
    speed: rand(0.08, 0.4) * baseSpeed,
    size: 0, sizeStep: rand(0.12, 0.28), minSize: 0.5,
    maxSizeInt: 2, maxSize: rand(0.5, 2),
    delay, counter: 0,
    counterStep: rand(1.8, 3.2) + (canvas.width + canvas.height) * 0.008,
    isIdle: false, isReverse: false, isShimmer: false,
    draw() {
      const offset = p.maxSizeInt * 0.5 - p.size * 0.5;
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x + offset, p.y + offset, p.size, p.size);
    },
    appear() {
      p.isIdle = false;
      if (p.counter <= p.delay) { p.counter += p.counterStep; return; }
      if (p.size >= p.maxSize) p.isShimmer = true;
      if (p.isShimmer) p.shimmer(); else p.size += p.sizeStep;
      p.draw();
    },
    disappear() {
      p.isShimmer = false; p.counter = 0;
      if (p.size <= 0) { p.isIdle = true; return; }
      p.size -= 0.1; p.draw();
    },
    shimmer() {
      if (p.size >= p.maxSize) p.isReverse = true;
      else if (p.size <= p.minSize) p.isReverse = false;
      if (p.isReverse) p.size -= p.speed; else p.size += p.speed;
    },
  };
  return p;
}

function PixelCanvas({ colors, gap = 5, speed = 30 }: { colors: string[]; gap?: number; speed?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const pixelsRef = useRef<Pixel[]>([]);
  const animationRef = useRef<number>(0);
  const lastFrameRef = useRef(performance.now());
  const reducedMotionRef = useRef(false);

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap || colors.length === 0) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const { width, height } = wrap.getBoundingClientRect();
    const w = Math.floor(width); const h = Math.floor(height);
    canvas.width = w; canvas.height = h;
    canvas.style.width = `${w}px`; canvas.style.height = `${h}px`;
    const effectiveSpeed = reducedMotionRef.current ? 0 : Math.min(speed, 100) * 0.001;
    const pixels: Pixel[] = [];
    for (let x = 0; x < w; x += gap) {
      for (let y = 0; y < h; y += gap) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        const dx = x - w / 2; const dy = y - h / 2;
        const delay = reducedMotionRef.current ? 0 : Math.sqrt(dx * dx + dy * dy) * 0.65;
        pixels.push(createPixel(ctx, canvas, x, y, color, effectiveSpeed, delay));
      }
    }
    pixelsRef.current = pixels;
  }, [colors, gap, speed]);

  const animate = useCallback((mode: "appear" | "disappear") => {
    cancelAnimationFrame(animationRef.current);
    const frameInterval = 1000 / 60;
    const loop = () => {
      animationRef.current = requestAnimationFrame(loop);
      const now = performance.now(); const elapsed = now - lastFrameRef.current;
      if (elapsed < frameInterval) return;
      lastFrameRef.current = now - (elapsed % frameInterval);
      const canvas = canvasRef.current; const ctx = canvas?.getContext("2d");
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const pixels = pixelsRef.current;
      for (const pixel of pixels) pixel[mode]();
      if (pixels.every((p) => p.isIdle)) cancelAnimationFrame(animationRef.current);
    };
    animationRef.current = requestAnimationFrame(loop);
  }, []);

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    init();
    const ro = new ResizeObserver(() => init());
    if (wrapRef.current) ro.observe(wrapRef.current);
    animate("appear");
    return () => { ro.disconnect(); cancelAnimationFrame(animationRef.current); };
  }, [init, animate]);

  return (
    <div ref={wrapRef} className="absolute inset-0 overflow-hidden">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}

/* ─── Hero ──────────────────────────────────────────────────────── */

interface PixelHeroProps {
  word1?: string;
  word2?: string;
  description?: string;
  primaryCta?: string;
  secondaryCta?: string;
  primaryHref?: string;
  secondaryHref?: string;
}

export function PixelHero({
  word1 = "Código",
  word2 = "Preciso.",
  description = "Software sob medida para varejo e saúde — feito para vender, atender e operar com mais controle, integração e segurança.",
  primaryCta = "Ver soluções",
  secondaryCta = "Fale conosco",
  primaryHref = "#solucoes",
  secondaryHref = "#contato",
}: PixelHeroProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [pixelColors, setPixelColors] = useState<string[]>([]);

  useEffect(() => {
    // Read brand colors from CSS custom properties
    const root = getComputedStyle(document.documentElement);
    const primary = `rgb(${root.getPropertyValue("--color-primary").trim()})`;   // olive
    const accent  = `rgb(${root.getPropertyValue("--color-accent").trim()})`;    // sage
    // Pixel field: mostly olive with sage highlights — matches Phosphor.code IDV
    setPixelColors([primary, primary, accent, accent, primary, accent]);
    const t = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="relative w-full min-h-screen flex flex-col justify-between md:justify-center md:gap-6 py-8 md:py-0 px-2 sm:px-6 overflow-hidden select-none isolate"
      style={{ background: "rgb(var(--color-secondary))" }}
    >
      <style>{`
        @keyframes marquee-phosphor {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-phosphor {
          animation: marquee-phosphor 28s linear infinite;
        }
        .phosphor-glass-text {
          color: transparent;
          background: linear-gradient(
            135deg,
            rgba(157,176,122,1) 0%,
            rgba(242,241,231,0.9) 20%,
            rgba(157,176,122,0.4) 40%,
            rgba(242,241,231,1) 55%,
            rgba(157,176,122,0.3) 75%,
            rgba(242,241,231,0.95) 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-stroke: 1px rgba(157,176,122,0.25);
          filter: drop-shadow(0 12px 28px rgba(0,0,0,0.5)) drop-shadow(0 4px 8px rgba(0,0,0,0.3));
          animation: phosphor-shimmer 9s linear infinite;
        }
        @keyframes phosphor-shimmer {
          0% { background-position: 200% center; }
          100% { background-position: 0% center; }
        }
      `}</style>

      {/* Pixel canvas background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {pixelColors.length > 0 && <PixelCanvas colors={pixelColors} gap={6} speed={28} />}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, transparent 0%, rgb(var(--color-secondary)) 75%)" }}
        />
      </div>

      {/* Headline */}
      <div className="flex flex-col items-center justify-center text-center order-1 mt-20 sm:mt-0 pointer-events-none w-full">
        <h1 className="phosphor-glass-text inline-flex items-baseline justify-center flex-wrap px-4 w-full text-[2.6rem] xs:text-[3.2rem] sm:text-6xl md:text-8xl lg:text-9xl leading-none">
          <span className="font-primary italic font-light tracking-wide">{word1}</span>
          <span className="font-secondary font-bold tracking-tight">{word2}</span>
        </h1>
      </div>

      {/* Description + mobile marquee */}
      <div className="flex flex-col items-center justify-center text-center my-auto md:my-0 order-2 px-1 w-full pointer-events-none">
        <p className="text-sm sm:text-lg md:text-xl font-light max-w-[95%] sm:max-w-md md:max-w-2xl px-1 leading-relaxed" style={{ color: "rgba(157,176,122,0.85)" }}>
          {description}
        </p>

        {/* Mobile marquee */}
        <div className="block md:hidden w-full mt-12 pointer-events-auto">
          <p className="font-secondary text-[11px] uppercase tracking-wider mb-4" style={{ color: "rgba(157,176,122,0.5)" }}>
            Stack técnica
          </p>
          <div className="relative w-full overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, white 15%, white 85%, transparent)" }}>
            <div className="flex w-max gap-10 py-1 animate-marquee-phosphor">
              <div className="flex gap-10 items-center">{TECH_LOGOS.map((Logo, i) => <Logo key={i} />)}</div>
              <div className="flex gap-10 items-center" aria-hidden="true">{TECH_LOGOS.map((Logo, i) => <Logo key={`c-${i}`} />)}</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA buttons */}
      <div
        className={cn(
          "pointer-events-auto flex flex-row items-center justify-center gap-3 mt-4 md:mt-10 mb-4 md:mb-0 order-4 md:order-3 transition-all duration-1000 transform px-1",
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
        style={{ transitionDelay: "450ms" }}
      >
        <a
          href={primaryHref}
          className="relative inline-flex h-10 md:h-12 items-center justify-center gap-1.5 md:gap-2 rounded-xl px-5 md:px-8 text-xs md:text-sm font-semibold shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_2px_4px_rgba(0,0,0,0.3),0_12px_24px_rgba(0,0,0,0.25)] ring-1 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
          style={{
            background: "linear-gradient(to bottom, rgb(85,107,47), rgb(65,85,32))",
            color: "rgb(242,241,231)",
          }}
        >
          {primaryCta}
          <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
        </a>
        <a
          href={secondaryHref}
          className="relative inline-flex h-10 md:h-12 items-center justify-center gap-1.5 md:gap-2 rounded-xl px-5 md:px-8 text-xs md:text-sm font-semibold backdrop-blur-md transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
          style={{
            background: "linear-gradient(to bottom, rgba(157,176,122,0.12), rgba(157,176,122,0.06))",
            color: "rgba(157,176,122,0.9)",
            border: "1px solid rgba(157,176,122,0.25)",
            boxShadow: "inset 0 1px 1px rgba(255,255,255,0.05), 0 2px 4px rgba(0,0,0,0.15)",
          }}
        >
          {secondaryCta}
          <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
        </a>
      </div>

      {/* Desktop marquee — fixed to bottom */}
      <div
        className={cn(
          "hidden md:flex absolute bottom-8 left-0 right-0 w-full z-10 pointer-events-auto flex-col items-center justify-center gap-4 transition-all duration-1000 transform order-3 md:order-4",
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
        style={{ transitionDelay: "600ms" }}
      >
        <span className="font-secondary text-[11px] uppercase tracking-widest select-none" style={{ color: "rgba(157,176,122,0.45)" }}>
          Stack técnica
        </span>
        <div
          className="relative w-full max-w-4xl overflow-hidden"
          style={{ maskImage: "linear-gradient(to right, transparent, white 15%, white 85%, transparent)" }}
        >
          <div className="flex w-max gap-14 py-3 animate-marquee-phosphor">
            <div className="flex gap-14 items-center">{TECH_LOGOS.map((Logo, i) => <Logo key={i} />)}</div>
            <div className="flex gap-14 items-center" aria-hidden="true">{TECH_LOGOS.map((Logo, i) => <Logo key={`c-${i}`} />)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
