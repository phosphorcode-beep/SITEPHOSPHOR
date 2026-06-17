"use client";

import { useEffect } from "react";

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   CSS compilado do SCSS original â€” tudo escopado em .ha-root
   Keyframes prefixados com ha- para evitar colisÃ£o global
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const CSS = `
/* Reset de animaÃ§Ã£o */
.ha-root .ha-reset-anim { animation: none !important; }

/* Container principal */
.ha-root .ha-canvas {
  background: rgb(0,0,0);
  position: relative;
  width: 100%;
  height: 56.25vw;
}

/* Todos os divs dentro do container */
.ha-root .ha-canvas div {
  background: rgb(255,255,255);
  position: absolute;
  transform-origin: 0 50%;
}

/* Cena */
.ha-root .ha-canvas .ha-scene {
  background: transparent;
  width: 100%;
  height: 100%;
  transform: translateX(26vw);
}

/* â”€â”€ Cyber Particles â”€â”€ */
.ha-root .ha-canvas .cyber-particles {
  background: transparent;
  width: 22vw;
  height: 25vw;
  left: 14vw;
  top: 2vw;
  pointer-events: none;
}
.ha-root .ha-canvas .cyber-particles span {
  background: transparent;
  position: absolute;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  font-size: 1.5vw;
  opacity: 0;
  animation: ha-cyberFloat 3s infinite linear;
}
.ha-root .ha-canvas .cyber-particles span.tag {
  font-size: 0.8vw !important;
  letter-spacing: 0.1vw;
}
.ha-root .ha-canvas .cyber-particles span:nth-child(1) { left:10%; top:80%; animation-delay:0.0s; font-size:1.2vw; }
.ha-root .ha-canvas .cyber-particles span:nth-child(2) { left:30%; top:90%; animation-delay:0.7s; font-size:1.8vw; }
.ha-root .ha-canvas .cyber-particles span:nth-child(3) { left:20%; top:85%; animation-delay:1.2s; }
.ha-root .ha-canvas .cyber-particles span:nth-child(4) { left:50%; top:75%; animation-delay:1.4s; font-size:1.0vw; }
.ha-root .ha-canvas .cyber-particles span:nth-child(5) { left:70%; top:85%; animation-delay:0.3s; font-size:1.5vw; }
.ha-root .ha-canvas .cyber-particles span:nth-child(6) { left:60%; top:90%; animation-delay:2.3s; }
.ha-root .ha-canvas .cyber-particles span:nth-child(7) { left:90%; top:95%; animation-delay:2.1s; font-size:1.3vw; }
.ha-root .ha-canvas .cyber-particles span:nth-child(8) { left:40%; top:100%; animation-delay:1.8s; font-size:2vw; }
.ha-root .ha-canvas .cyber-particles span:nth-child(9) { left:80%; top:80%; animation-delay:0.9s; }

/* â”€â”€ LCD Light â”€â”€ */
.ha-root .ha-canvas .lcd-light {
  border-radius: 0;
  left: 18.23vw;
  top: 19.79vw;
  width: 10.42vw;
  height: 18.75vw;
  background: radial-gradient(at center left, rgb(0,255,65), transparent 75%);
  transform: rotate(-10deg);
  animation: ha-monitorFlash 0.08s steps(2) infinite alternate;
}
.ha-root .ha-canvas .lcd-light::before,
.ha-root .ha-canvas .lcd-light::after {
  border: 0;
  content: "";
  display: block;
  position: absolute;
}
.ha-root .ha-canvas .lcd-light::before {
  border-bottom: 6.25vw solid transparent;
  border-left: 10.42vw solid rgb(0,0,0);
}
.ha-root .ha-canvas .lcd-light::after {
  border-top: 3.65vw solid transparent;
  border-left: 9.38vw solid rgb(0,0,0);
  bottom: 0;
}

/* â”€â”€ Monitor â”€â”€ */
.ha-root .ha-canvas .monitor {
  border-radius: 1.04vw;
  left: 16.67vw;
  top: 23.96vw;
  width: 11.46vw;
  height: 2.08vw;
  transform: rotate(80deg);
}
.ha-root .ha-canvas .monitor-neck {
  border-radius: 0;
  left: 14.58vw;
  top: 35.42vw;
  width: 3.65vw;
  height: 1.04vw;
  transform: rotate(-40deg);
}
.ha-root .ha-canvas .monitor-base {
  border-radius: 3.13vw 3.13vw 0 0;
  left: 11.46vw;
  top: 35.42vw;
  width: 6.25vw;
  height: 3.13vw;
}

/* â”€â”€ Desk â”€â”€ */
.ha-root .ha-canvas .desk {
  border-radius: 2.08vw;
  left: 8.33vw;
  top: 38.02vw;
  width: 18.23vw;
  height: 3.13vw;
}

/* â”€â”€ Tower â”€â”€ */
.ha-root .ha-canvas .tower {
  border-radius: 1.04vw;
  left: 8.33vw;
  top: 42.19vw;
  width: 15.63vw;
  height: 9.90vw;
}
.ha-root .ha-canvas .tower::before {
  background-color: rgb(0,0,0);
  background-image:
    repeating-linear-gradient(transparent, transparent 0.52vw, rgb(255,255,255) 0.52vw, rgb(255,255,255) 1.04vw),
    repeating-linear-gradient(90deg, transparent, transparent 0.52vw, rgb(255,255,255) 0.52vw, rgb(255,255,255) 1.04vw);
  content: "";
  display: block;
  position: absolute;
  top: 2.08vw;
  right: 2.08vw;
  width: 3.65vw;
  height: 2.6vw;
}

/* â”€â”€ Cadeira â”€â”€ */
.ha-root .ha-canvas .chair-back {
  border-radius: 2.08vw;
  left: 38.54vw;
  top: 40.63vw;
  width: 9.9vw;
  height: 3.13vw;
  transform: rotate(-80deg);
}
.ha-root .ha-canvas .chair-bottom {
  border-radius: 2.08vw;
  left: 29.69vw;
  top: 43.23vw;
  width: 9.9vw;
  height: 3.13vw;
}

/* â”€â”€ Humano â”€â”€ */
.ha-root .ha-canvas .human-wrapper {
  transform: translate(32.81vw, 23.96vw);
  will-change: transform;
  animation: ha-bodyBreathe 4s ease-in-out infinite;
}
.ha-root .ha-canvas .human {
  background: transparent;
  border-radius: 0;
  left: 0;
  top: 0;
  width: 6.25vw;
  height: 20.31vw;
  transform-origin: 3.13vw 17.71vw;
  transform: rotate(-15deg);
}
.ha-root .ha-canvas .human div {
  will-change: transform;
}

/* â”€â”€ CabeÃ§a â”€â”€ */
.ha-root .ha-canvas .head {
  border-radius: 50%;
  left: 0;
  top: 0;
  width: 6.25vw;
  height: 6.25vw;
  transform: translate(0vw,0vw);
  animation: ha-headBob 2s infinite;
}
.ha-root .ha-canvas .eyes {
  background: transparent;
  width: 3.13vw;
  height: 1.04vw;
  top: 2.08vw;
  left: 2.34vw;
  transform-origin: 50% 50%;
  transform: rotate(0deg) translate(-1.5vw, 1.04vw);
}
.ha-root .ha-canvas .eyes::before,
.ha-root .ha-canvas .eyes::after {
  background: rgb(0,255,65);
  box-shadow: 0 0 0.8vw rgb(0,255,65);
  border-radius: 50%;
  content: "";
  display: inline-block;
  position: absolute;
  width: 1.04vw;
  height: 1.04vw;
}
.ha-root .ha-canvas .eyes::before { right: 0.52vw; }

/* â”€â”€ Torso â”€â”€ */
.ha-root .ha-canvas .torso {
  border-radius: 3.13vw;
  left: 1.04vw;
  top: 6.77vw;
  width: 4.17vw;
  height: 12.5vw;
}

/* â”€â”€ BraÃ§os â”€â”€ */
.ha-root .ha-canvas .r-upper-arm,
.ha-root .ha-canvas .r-lower-arm,
.ha-root .ha-canvas .l-upper-arm,
.ha-root .ha-canvas .l-lower-arm { transform-origin: 1.82vw 1.82vw; }

.ha-root .ha-canvas .r-upper-arm {
  border-radius: 3.13vw;
  left: 0.26vw; top: 0;
  width: 3.65vw; height: 8.33vw;
  transform: rotate(65deg);
}
.ha-root .ha-canvas .r-lower-arm {
  border-radius: 3.13vw;
  left: 0; top: 4.95vw;
  width: 3.65vw; height: 8.33vw;
  transform: rotate(20deg);
  animation: ha-typeRight 0.4s infinite;
}
.ha-root .ha-canvas .l-upper-arm {
  border-radius: 3.13vw;
  left: 0.26vw; top: 0;
  width: 3.65vw; height: 8.33vw;
  transform: rotate(65deg);
}
.ha-root .ha-canvas .l-lower-arm {
  border-radius: 3.13vw;
  left: 0; top: 4.95vw;
  width: 3.65vw; height: 8.33vw;
  transform: rotate(50deg);
  animation: ha-typeLeft 0.5s infinite;
}

/* â”€â”€ Pernas â”€â”€ */
.ha-root .ha-canvas .l-thigh,
.ha-root .ha-canvas .r-thigh,
.ha-root .ha-canvas .l-lower-leg,
.ha-root .ha-canvas .r-lower-leg { transform-origin: 2.08vw 2.08vw; }

.ha-root .ha-canvas .l-thigh,
.ha-root .ha-canvas .r-thigh {
  border-radius: 3.13vw;
  left: 0; top: 8.33vw;
  width: 4.17vw; height: 10.94vw;
  transform: rotate(90deg);
}
.ha-root .ha-canvas .l-lower-leg {
  border-radius: 3.13vw;
  left: 0; top: 6.77vw;
  width: 4.17vw; height: 10.94vw;
  transform: rotate(-90deg);
}
.ha-root .ha-canvas .r-lower-leg {
  border-radius: 3.13vw;
  left: 0; top: 6.77vw;
  width: 4.17vw; height: 10.94vw;
  transform: rotate(-70deg);
}

/* â”€â”€ Keyframes â”€â”€ */
@keyframes ha-monitorFlash {
  from { opacity: 1; }
  to   { opacity: 0.75; }
}

@keyframes ha-cyberFloat {
  0%   { transform: translate(0,0) scale(0.8); opacity:0; color:rgb(255,50,50); text-shadow:0 0 0.5vw rgb(255,50,50); }
  15%  { opacity:0.9; color:rgb(255,50,50); text-shadow:0 0 0.5vw rgb(255,50,50); }
  45%  { color:rgb(255,50,50); text-shadow:0 0 1vw rgb(255,50,50); }
  50%  { color:rgb(0,255,65);  text-shadow:0 0 1.5vw rgb(0,255,65); }
  80%  { opacity:0.8; }
  100% { transform: translate(10vw,-18vw) scale(1.2); opacity:0; color:rgb(0,255,65); text-shadow:0 0 0.5vw rgb(0,255,65); }
}

@keyframes ha-bodyBreathe {
  0%,100% { transform: translate(32.81vw,23.96vw); }
  50%     { transform: translate(32.81vw,23.5vw); }
}

@keyframes ha-headBob {
  0%,100% { transform: translate(0vw,0vw); }
  50%     { transform: translate(0.5vw,0.2vw); }
}

@keyframes ha-typeRight {
  0%,100% { transform: rotate(20deg); }
  33%     { transform: rotate(80deg); }
  66%     { transform: rotate(50deg); }
}

@keyframes ha-typeLeft {
  0%,100% { transform: rotate(50deg); }
  33%     { transform: rotate(20deg); }
  66%     { transform: rotate(80deg); }
}
`;

const ANIM_CLASSES = [
  "lcd-light",
  "cyber-particles",
  "human-wrapper",
  "head",
  "r-lower-arm",
  "l-lower-arm",
];

export function HackerAnimation() {
  useEffect(() => {
    function restartAnims() {
      ANIM_CLASSES.forEach((cls) => {
        const el = document.querySelector(`.ha-root .${cls}`);
        if (!el) return;
        el.classList.add("ha-reset-anim");
        void (el as HTMLElement).offsetWidth;
        el.classList.remove("ha-reset-anim");
      });
    }
    window.addEventListener("resize", restartAnims);
    return () => window.removeEventListener("resize", restartAnims);
  }, []);

  return (
    <div className="ha-root w-full">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <div className="ha-canvas">
        <div className="ha-scene">
          <div className="lcd-light" />

          <div className="cyber-particles">
            <span>0</span>
            <span>1</span>
            <span className="tag">[PATCHED]</span>
            <span>0</span>
            <span>1</span>
            <span className="tag">[SECURED]</span>
            <span>1</span>
            <span>0</span>
            <span className="tag">[FIXED]</span>
          </div>

          <div className="monitor" />
          <div className="monitor-neck" />
          <div className="monitor-base" />
          <div className="desk" />
          <div className="tower" />
          <div className="chair-back" />
          <div className="chair-bottom" />

          <div className="human-wrapper">
            <div className="human">
              <div className="head">
                <div className="eyes" />
              </div>
              <div className="torso">
                <div className="l-thigh">
                  <div className="l-lower-leg" />
                </div>
                <div className="r-thigh">
                  <div className="r-lower-leg" />
                </div>
                <div className="r-upper-arm">
                  <div className="r-lower-arm" />
                </div>
                <div className="l-upper-arm">
                  <div className="l-lower-arm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
