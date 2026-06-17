"use client";

import { useEffect, useState, type ReactNode } from "react";
import dynamic from "next/dynamic";
import { useReducedMotion } from "motion/react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

/* ── Recoloração para a IDV ───────────────────────────────────────
   Mantém contraste: branco/cinza/preto viram neutros da marca
   (near-black ↔ ivory) e só os tons coloridos viram verde/sage.   */
type RGB = [number, number, number];
const NEAR_BLACK: RGB = [0.051, 0.067, 0.039];
const IVORY: RGB = [0.925, 0.941, 0.894];
const SHADOW: RGB = [0.094, 0.204, 0.075];
const OLIVE: RGB = [0.251, 0.518, 0.204];
const SAGE: RGB = [0.588, 0.824, 0.431];

function mix(a: RGB, b: RGB, t: number): RGB {
  return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
}

function neutralRamp(l: number): RGB {
  return mix(NEAR_BLACK, IVORY, l);
}

function greenRamp(l: number): RGB {
  return l < 0.5 ? mix(SHADOW, OLIVE, l / 0.5) : mix(OLIVE, SAGE, (l - 0.5) / 0.5);
}

function recolor(r: number, g: number, b: number): RGB {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = 0.299 * r + 0.587 * g + 0.114 * b;
  const sat = max <= 0 ? 0 : (max - min) / max;
  // Quase sem cor (branco/cinza/preto) → mantém claro/escuro em neutros da marca.
  if (sat < 0.18) return neutralRamp(l);
  // Tons coloridos → verde da marca por luminância.
  return greenRamp(l);
}

function remapColor(k: number[]): void {
  if (k.length >= 3) {
    const [nr, ng, nb] = recolor(k[0], k[1], k[2]);
    k[0] = nr;
    k[1] = ng;
    k[2] = nb;
  }
}

// Percorre o JSON e remapeia toda cor de fill/stroke (estática e animada).
function tint(node: unknown): void {
  if (Array.isArray(node)) {
    node.forEach(tint);
    return;
  }
  if (!node || typeof node !== "object") return;

  const obj = node as Record<string, unknown>;
  for (const key of Object.keys(obj)) {
    const val = obj[key];
    if (key === "c" && val && typeof val === "object") {
      const c = val as { a?: number; k?: unknown };
      if (c.a === 0 && Array.isArray(c.k)) {
        remapColor(c.k as number[]);
      } else if (c.a === 1 && Array.isArray(c.k)) {
        (c.k as Array<{ s?: number[] }>).forEach((kf) => {
          if (kf && Array.isArray(kf.s)) remapColor(kf.s);
        });
      } else {
        tint(val);
      }
    } else {
      tint(val);
    }
  }
}

export function LottieIDV({
  src,
  label,
  fallback,
  className = "h-auto w-full max-w-[440px]",
  speed = 1,
}: {
  src: string;
  label?: string;
  fallback?: ReactNode;
  className?: string;
  /** Fator de velocidade: < 1 deixa mais lento, > 1 mais rápido. */
  speed?: number;
}) {
  const reduced = useReducedMotion();
  const [data, setData] = useState<object | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let alive = true;
    fetch(src)
      .then((r) => {
        if (!r.ok) throw new Error("not found");
        return r.json();
      })
      .then((json) => {
        if (!json?.layers?.length) throw new Error("empty");
        tint(json);
        // Diminui o frame rate para desacelerar a animação.
        if (speed !== 1 && typeof json.fr === "number") {
          json.fr = json.fr * speed;
        }
        if (alive) setData(json);
      })
      .catch(() => {
        if (alive) setFailed(true);
      });
    return () => {
      alive = false;
    };
  }, [src, speed]);

  if (failed) return <>{fallback ?? null}</>;

  return (
    <div className="flex h-full w-full items-center justify-center">
      {data && (
        <Lottie
          animationData={data}
          loop={!reduced}
          autoplay={!reduced}
          aria-label={label}
          className={className}
        />
      )}
    </div>
  );
}
