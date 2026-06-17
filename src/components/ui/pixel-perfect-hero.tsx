"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/* -----------------------------------------------------------------------------
 * MOTOR DE FÍSICA DO CANVAS (ripple de pixels) — inalterado.
 * -------------------------------------------------------------------------- */

type Pixel = {
  x: number;
  y: number;
  color: string;
  ctx: CanvasRenderingContext2D;
  speed: number;
  size: number;
  sizeStep: number;
  minSize: number;
  maxSizeInt: number;
  maxSize: number;
  delay: number;
  counter: number;
  counterStep: number;
  isIdle: boolean;
  isReverse: boolean;
  isShimmer: boolean;
  draw: () => void;
  appear: () => void;
  disappear: () => void;
  shimmer: () => void;
};

function createPixel(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  x: number,
  y: number,
  color: string,
  baseSpeed: number,
  delay: number,
): Pixel {
  const rand = (min: number, max: number) => Math.random() * (max - min) + min;

  const p: Pixel = {
    x,
    y,
    color,
    ctx,
    speed: rand(0.08, 0.4) * baseSpeed,
    size: 0,
    sizeStep: rand(0.12, 0.28),
    minSize: 0.5,
    maxSizeInt: 2,
    maxSize: rand(0.5, 2),
    delay,
    counter: 0,
    counterStep: rand(1.8, 3.2) + (canvas.width + canvas.height) * 0.008,
    isIdle: false,
    isReverse: false,
    isShimmer: false,
    draw() {
      const offset = p.maxSizeInt * 0.5 - p.size * 0.5;
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x + offset, p.y + offset, p.size, p.size);
    },
    appear() {
      p.isIdle = false;
      if (p.counter <= p.delay) {
        p.counter += p.counterStep;
        return;
      }
      if (p.size >= p.maxSize) p.isShimmer = true;
      if (p.isShimmer) p.shimmer();
      else p.size += p.sizeStep;
      p.draw();
    },
    disappear() {
      p.isShimmer = false;
      p.counter = 0;
      if (p.size <= 0) {
        p.isIdle = true;
        return;
      }
      p.size -= 0.1;
      p.draw();
    },
    shimmer() {
      if (p.size >= p.maxSize) p.isReverse = true;
      else if (p.size <= p.minSize) p.isReverse = false;
      if (p.isReverse) p.size -= p.speed;
      else p.size += p.speed;
    },
  };

  return p;
}

type PixelCanvasProps = {
  colors: string[];
  gap?: number;
  speed?: number;
};

function PixelCanvas({ colors, gap = 5, speed = 30 }: PixelCanvasProps) {
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
    const w = Math.floor(width);
    const h = Math.floor(height);
    canvas.width = w;
    canvas.height = h;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;

    const effectiveSpeed = reducedMotionRef.current ? 0 : Math.min(speed, 100) * 0.001;
    const pixels: Pixel[] = [];

    for (let x = 0; x < w; x += gap) {
      for (let y = 0; y < h; y += gap) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        const dx = x - w / 2;
        const dy = y - h / 2;
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

      const now = performance.now();
      const elapsed = now - lastFrameRef.current;
      if (elapsed < frameInterval) return;
      lastFrameRef.current = now - (elapsed % frameInterval);

      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const pixels = pixelsRef.current;
      for (const pixel of pixels) pixel[mode]();

      if (pixels.every((p) => p.isIdle)) {
        cancelAnimationFrame(animationRef.current);
      }
    };

    animationRef.current = requestAnimationFrame(loop);
  }, []);

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    init();

    const resizeObserver = new ResizeObserver(() => init());
    if (wrapRef.current) resizeObserver.observe(wrapRef.current);

    animate("appear");

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationRef.current);
    };
  }, [init, animate]);

  return (
    <div ref={wrapRef} className="absolute inset-0 overflow-hidden">
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}

/* -----------------------------------------------------------------------------
 * PALAVRA ROTATIVA — fade + leve movimento vertical, sem layout shift,
 * respeitando prefers-reduced-motion. Sem dependências externas.
 * -------------------------------------------------------------------------- */

function RotatingWord({
  words,
  intervalMs = 2400,
}: {
  words: string[];
  intervalMs?: number;
}) {
  const [index, setIndex] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  useEffect(() => {
    if (words.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [words.length, intervalMs]);

  // Reserva a largura/altura da maior palavra para evitar layout shift.
  const longest = words.reduce((a, b) => (b.length > a.length ? b : a), "");

  return (
    <span className="relative inline-block whitespace-nowrap align-bottom text-brand-accent">
      {/* Sizer invisível: define a caixa pela maior palavra. */}
      <span aria-hidden className="invisible">
        {longest}
      </span>
      {/* Palavra ativa, centralizada na caixa reservada. */}
      <span
        key={reduced ? "static" : index}
        aria-live="polite"
        className={cn(
          "absolute inset-0 flex items-center justify-center whitespace-nowrap",
          !reduced && "word-rotate",
        )}
      >
        {words[index]}
      </span>
    </span>
  );
}

/* -----------------------------------------------------------------------------
 * HERO
 * -------------------------------------------------------------------------- */

interface PixelHeroProps {
  baseText?: string;
  rotatingWords?: string[];
  description?: string;
  primaryCta?: string;
  primaryCtaMobile?: string;
  secondaryCta?: string;
  secondaryCtaMobile?: string;
  primaryHref?: string;
  secondaryHref?: string;
  stackLabel?: string;
}

export function PixelHero({
  baseText = "Software sob medida para operações que exigem",
  rotatingWords = [
    "controle.",
    "integração.",
    "segurança.",
    "rastreabilidade.",
    "continuidade.",
  ],
  description = "Criamos sistemas para empresas de varejo e saúde que precisam vender, atender e operar melhor — sem depender de improviso.",
  primaryCta = "Falar com a Phosphorcode",
  primaryCtaMobile = "Falar",
  secondaryCta = "Ver soluções",
  secondaryCtaMobile = "Soluções",
  primaryHref = "#contato",
  secondaryHref = "#solucoes",
  stackLabel = "Stack de engenharia",
}: PixelHeroProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [themeColors, setThemeColors] = useState<string[]>([]);

  useEffect(() => {
    if (typeof document === "undefined") return;

    const div = document.createElement("div");
    document.body.appendChild(div);
    div.className = "text-foreground-secondary";
    const muted = getComputedStyle(div).color;
    div.className = "text-brand-primary";
    const primary = getComputedStyle(div).color;
    div.className = "text-brand-accent";
    const accent = getComputedStyle(div).color;
    document.body.removeChild(div);

    setThemeColors([muted, muted, muted, primary, accent]);

    const loadTimer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(loadTimer);
  }, []);

  return (
    <div className="relative isolate flex min-h-[100dvh] w-full select-none flex-col justify-between overflow-hidden bg-brand-secondary px-2 py-8 sm:px-6 md:justify-center md:gap-6 md:py-0">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
        @keyframes pc-word-rotate {
          0%   { opacity: 0; transform: translateY(0.4em); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .word-rotate {
          animation: pc-word-rotate 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee { animation: none; }
          .word-rotate { animation: none; }
        }
      `}</style>

      {/* Fundo de pixels + vinheta */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {themeColors.length > 0 && <PixelCanvas colors={themeColors} gap={6} speed={30} />}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgb(var(--color-secondary))_100%)] opacity-85" />
        {/* Grid técnico sutil */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgb(var(--color-accent)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--color-accent)) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Topo: headline com palavra rotativa */}
      <div className="order-1 mt-24 flex w-full flex-col items-center justify-center text-center pointer-events-none sm:mt-0">
        <h1 className="mx-auto max-w-4xl px-1 font-primary text-[2rem] font-bold leading-[1.12] tracking-tight text-foreground-inverse sm:text-4xl md:text-5xl lg:text-6xl">
          <span className="block">{baseText}</span>
          <span className="mt-1 block">
            <RotatingWord words={rotatingWords} />
          </span>
        </h1>
      </div>

      {/* Centro: descrição + marquee mobile */}
      <div className="order-2 my-auto flex w-full flex-col items-center justify-center px-1 text-center pointer-events-none md:my-0">
        <p className="max-w-[95%] whitespace-pre-line px-1 text-sm font-normal leading-relaxed text-foreground-inverse/95 [text-shadow:0_2px_12px_rgb(0_0_0_/_0.55)] sm:max-w-md sm:text-lg md:max-w-xl md:text-xl">
          {description}
        </p>

        <div className="mt-14 block w-full pointer-events-auto md:hidden">
          <div className="mb-5 font-secondary text-[11px] font-medium uppercase tracking-[0.18em] text-foreground-inverse/55">
            {stackLabel}
          </div>
          <div className="grid grid-cols-3 gap-2 px-2 py-1">
            {HERO_DATA_POINTS.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-foreground-inverse/10 bg-foreground-inverse/[0.04] px-2 py-3 text-center backdrop-blur-sm"
              >
                <div className="font-secondary text-base font-semibold text-brand-accent">
                  {item.value}
                </div>
                <div className="mt-1 text-[10px] font-medium leading-tight text-foreground-inverse/60">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Base: CTAs */}
      <div
        className={cn(
          "order-4 mb-4 mt-4 flex flex-row items-center justify-center gap-3 px-1 pointer-events-auto transition-all duration-1000 md:order-3 md:mb-0 md:mt-10",
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        )}
        style={{ transitionDelay: "450ms" }}
      >
        <a
          href={primaryHref}
          className="relative inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-gradient-to-b from-brand-primary/90 to-brand-primary px-4 text-xs font-semibold uppercase tracking-wide text-foreground-inverse shadow-[inset_0_1px_1px_rgba(255,255,255,0.18),0_2px_4px_rgba(0,0,0,0.25),0_12px_24px_rgba(0,0,0,0.25)] ring-1 ring-brand-primary/30 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] md:h-12 md:gap-2 md:px-8 md:text-sm"
        >
          <span className="inline md:hidden">{primaryCtaMobile}</span>
          <span className="hidden md:inline">{primaryCta}</span>
          <ArrowRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
        </a>
        <a
          href={secondaryHref}
          className="relative inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-xl border border-foreground-inverse/20 bg-foreground-inverse/5 px-4 text-xs font-semibold uppercase tracking-wide text-foreground-inverse backdrop-blur-md transition-transform duration-200 hover:scale-[1.02] hover:bg-foreground-inverse/10 active:scale-[0.98] md:h-12 md:gap-2 md:px-8 md:text-sm"
        >
          <span className="inline md:hidden">{secondaryCtaMobile}</span>
          <span className="hidden md:inline">{secondaryCta}</span>
        </a>
      </div>

      {/* Marquee desktop */}
      <div
        className={cn(
          "absolute bottom-8 left-0 right-0 z-10 order-3 hidden w-full flex-col items-center justify-center gap-4 pointer-events-auto transition-all duration-1000 md:order-4 md:flex",
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        )}
        style={{ transitionDelay: "600ms" }}
      >
        <span className="select-none font-secondary text-xs font-medium uppercase tracking-[0.18em] text-foreground-inverse/55">
          {stackLabel}
        </span>
        <div className="grid w-full max-w-3xl grid-cols-3 gap-3 px-6 py-2">
          {HERO_DATA_POINTS.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-foreground-inverse/10 bg-foreground-inverse/[0.035] px-6 py-4 text-center backdrop-blur-md"
            >
              <div className="font-secondary text-2xl font-semibold text-brand-accent lg:text-3xl">
                {item.value}
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-foreground-inverse/55">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
