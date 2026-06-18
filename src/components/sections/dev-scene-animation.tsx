"use client";

import type { CSSProperties } from "react";

/* ── Paleta ────────────────────────────────────────────────────── */
const BG    = "#0E100B";
const SHAPE = "#F2F1E7";
const EYE   = "#9DB07A";

/* ── Helper de shape (replica o sh() do DC) ────────────────────── */
function sh(
  br: string,
  x: string,
  y: string,
  w: string,
  h: string,
  extra?: CSSProperties,
): CSSProperties {
  return {
    position: "absolute",
    background: SHAPE,
    transformOrigin: "0 50%",
    borderRadius: br,
    left: x,
    top: y,
    width: w,
    height: h,
    ...extra,
  };
}

/* ── CSS global (keyframes) ────────────────────────────────────── */
const CSS = `
@keyframes pcFlash {
  from { opacity: 1;    }
  to   { opacity: 0.78; }
}
@keyframes pcBreathe {
  0%, 100% { transform: translate(32.81vw, 23.96vw); }
  50%      { transform: translate(32.81vw, 23.5vw);  }
}
@keyframes pcHeadBob {
  0%, 100% { transform: translate(0vw, 0vw);    }
  50%      { transform: translate(0.5vw, 0.2vw); }
}
@keyframes pcTypeRight {
  0%, 100% { transform: rotate(20deg); }
  33%      { transform: rotate(80deg); }
  66%      { transform: rotate(50deg); }
}
@keyframes pcTypeLeft {
  0%, 100% { transform: rotate(50deg); }
  33%      { transform: rotate(20deg); }
  66%      { transform: rotate(80deg); }
}
`;

export function DevSceneAnimation() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "56.25vw",
        background: "transparent",
        overflow: "visible",
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      {/* ── Grade de pontos decorativa ───────────────────────── */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage:
            "radial-gradient(circle, rgba(157,176,122,0.07) 1px, transparent 1px)",
          backgroundSize: "2.2vw 2.2vw",
        }}
      />

      {/* ── Cena — translateX ajustado para caber na coluna direita */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "transparent",
          transform: "translateX(-5vw)",
        }}
      >
        {/* Monitor glow — cone recortado com clip-path */}
        <div
          style={sh("0", "18.23vw", "19.79vw", "10.42vw", "18.75vw", {
            background: "radial-gradient(at center left, #9DB07A55, transparent 80%)",
            transform: "rotate(-10deg)",
            transformOrigin: "0 50%",
            clipPath: "polygon(0% 33%, 100% 0%, 100% 100%, 0% 81%)",
            animation: "pcFlash 0.08s steps(2) infinite alternate",
          })}
        />

        {/* Monitor corpo */}
        <div style={sh("1.04vw", "16.67vw", "23.96vw", "11.46vw", "2.08vw", { transform: "rotate(80deg)" })} />
        {/* Pescoço */}
        <div style={sh("0", "14.58vw", "35.42vw", "3.65vw", "1.04vw", { transform: "rotate(-40deg)" })} />
        {/* Base */}
        <div style={sh("3.13vw 3.13vw 0 0", "11.46vw", "35.42vw", "6.25vw", "3.13vw")} />
        {/* Mesa */}
        <div style={sh("2.08vw", "8.33vw", "38.02vw", "18.23vw", "3.13vw")} />

        {/* Torre (PC) */}
        <div style={sh("1.04vw", "8.33vw", "42.19vw", "15.63vw", "9.90vw")}>
          <div
            style={{
              position: "absolute",
              top: "2.08vw",
              right: "2.08vw",
              width: "3.65vw",
              height: "2.6vw",
              backgroundColor: BG,
              backgroundImage: [
                `repeating-linear-gradient(transparent, transparent 0.52vw, ${SHAPE} 0.52vw, ${SHAPE} 1.04vw)`,
                `repeating-linear-gradient(90deg, transparent, transparent 0.52vw, ${SHAPE} 0.52vw, ${SHAPE} 1.04vw)`,
              ].join(", "),
            }}
          />
        </div>

        {/* Cadeira */}
        <div style={sh("2.08vw", "38.54vw", "40.63vw", "9.9vw", "3.13vw", { transform: "rotate(-80deg)" })} />
        <div style={sh("2.08vw", "29.69vw", "43.23vw", "9.9vw", "3.13vw")} />

        {/* ── Personagem ──────────────────────────────────────── */}
        <div
          style={{
            position: "absolute",
            background: "transparent",
            transformOrigin: "0 50%",
            animation: "pcBreathe 6.5s ease-in-out infinite",
          }}
        >
          <div
            style={{
              position: "absolute",
              background: "transparent",
              left: 0,
              top: 0,
              width: "6.25vw",
              height: "20.31vw",
              transformOrigin: "3.13vw 17.71vw",
              transform: "rotate(-15deg)",
            }}
          >
            {/* Cabeça */}
            <div style={sh("50%", "0", "0", "6.25vw", "6.25vw", { animation: "pcHeadBob 3.5s infinite" })}>
              {/* Olhos */}
              <div
                style={{
                  position: "absolute",
                  background: "transparent",
                  width: "3.13vw",
                  height: "1.04vw",
                  top: "2.08vw",
                  left: "2.34vw",
                  transformOrigin: "50% 50%",
                  transform: "rotate(0deg) translate(-1.5vw, 1.04vw)",
                }}
              >
                <div style={{ position: "absolute", left: 0, background: EYE, boxShadow: `0 0 0.8vw ${EYE}`, borderRadius: "50%", width: "1.04vw", height: "1.04vw" }} />
                <div style={{ position: "absolute", right: "0.52vw", background: EYE, boxShadow: `0 0 0.8vw ${EYE}`, borderRadius: "50%", width: "1.04vw", height: "1.04vw" }} />
              </div>
            </div>

            {/* Torso */}
            <div style={sh("3.13vw", "1.04vw", "6.77vw", "4.17vw", "12.5vw")}>
              {/* Coxa esquerda + perna */}
              <div style={sh("3.13vw", "0", "8.33vw", "4.17vw", "10.94vw", { transform: "rotate(90deg)", transformOrigin: "2.08vw 2.08vw" })}>
                <div style={sh("3.13vw", "0", "6.77vw", "4.17vw", "10.94vw", { transform: "rotate(-90deg)", transformOrigin: "2.08vw 2.08vw" })} />
              </div>
              {/* Coxa direita + perna */}
              <div style={sh("3.13vw", "0", "8.33vw", "4.17vw", "10.94vw", { transform: "rotate(90deg)", transformOrigin: "2.08vw 2.08vw" })}>
                <div style={sh("3.13vw", "0", "6.77vw", "4.17vw", "10.94vw", { transform: "rotate(-70deg)", transformOrigin: "2.08vw 2.08vw" })} />
              </div>
              {/* Braço direito */}
              <div style={sh("3.13vw", "0.26vw", "0", "3.65vw", "8.33vw", { transform: "rotate(65deg)", transformOrigin: "1.82vw 1.82vw" })}>
                <div style={sh("3.13vw", "0", "4.95vw", "3.65vw", "8.33vw", { transform: "rotate(20deg)", transformOrigin: "1.82vw 1.82vw", animation: "pcTypeRight 0.85s infinite" })} />
              </div>
              {/* Braço esquerdo */}
              <div style={sh("3.13vw", "0.26vw", "0", "3.65vw", "8.33vw", { transform: "rotate(65deg)", transformOrigin: "1.82vw 1.82vw" })}>
                <div style={sh("3.13vw", "0", "4.95vw", "3.65vw", "8.33vw", { transform: "rotate(50deg)", transformOrigin: "1.82vw 1.82vw", animation: "pcTypeLeft 1.05s infinite" })} />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
