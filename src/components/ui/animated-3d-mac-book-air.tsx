"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

/* MacBook 3D preto: chega fechado e a tampa abre conforme o scroll da página. */
const Macbook: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  // No mobile o efeito de abrir no scroll fica instável, então abre por padrão.
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const onChange = () => setIsMobile(mq.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Fechado (-90°, tampa deitada sobre o teclado) → aberto (0°, tela em pé).
  const lidRotate = useTransform(scrollYProgress, [0.18, 0.52], [-90, 0]);
  const screenOpacity = useTransform(scrollYProgress, [0.4, 0.55], [0, 1]);

  const lidStyle = reduced || isMobile
    ? { transform: "rotateX(0deg)" }
    : { rotateX: lidRotate };

  const keyBaseClasses =
    "w-[6px] h-[6px] bg-[#2a2f20] float-left m-[1px] rounded-[2px] shadow-[0_-1px_0_#000] macbook-key";

  return (
    <div
      ref={ref}
      className="macbook-container w-[150px] h-[96px] absolute left-1/2 top-1/2 mt-[-85px] ml-[-78px]"
    >
      <div
        className="macbook-inner z-20 absolute w-[150px] h-[96px] left-0 top-0"
        style={{ transform: "rotateX(-10deg) rotateY(0deg)" }}
      >
        {/* Tela (tampa) — costas pretas */}
        <motion.div
          className="macbook-screen w-[150px] h-[96px] absolute left-0 bottom-0 rounded-[7px] bg-[#0a0c07]
                     bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0)_60%)]
                     shadow-[inset_0_2px_5px_rgba(255,255,255,0.08)]"
          style={lidStyle}
        >
          {/* Frente da tampa (mostra o site) */}
          <div className="macbook-screen-face-one w-[150px] h-[96px] absolute left-0 bottom-0 rounded-[7px] bg-[#101309]">
            <div className="w-[3px] h-[3px] rounded-full bg-[#333] absolute left-1/2 top-[4px] ml-[-1.5px]"></div>

            {/* Display: site da Phosphor */}
            <motion.div
              className="w-[130px] h-[74px] m-[10px] rounded-[1px] relative overflow-hidden bg-[rgb(13_17_10)] shadow-[inset_0_0_2px_rgba(0,0,0,1)]"
              style={reduced || isMobile ? undefined : { opacity: screenOpacity }}
            >
              <div
                className="absolute inset-0 opacity-[0.1]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgb(150 210 110) 1px, transparent 1px), linear-gradient(90deg, rgb(150 210 110) 1px, transparent 1px)",
                  backgroundSize: "12px 12px",
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(60% 60% at 28% 22%, rgba(64,132,52,0.45), transparent 70%)",
                }}
              />
              <div className="relative px-[6px] pt-[5px]">
                <span className="block text-[3px] font-bold uppercase tracking-[0.2em] text-[rgb(150_210_110)]">
                  Phosphorcode
                </span>
                <p className="mt-[3px] text-[6px] font-semibold leading-[7px] text-[rgb(236_240_228)]">
                  Softwares sob medida
                  <br />
                  para <span className="text-[rgb(150_210_110)]">controlar.</span>
                </p>
                <div className="mt-[4px] flex gap-[3px]">
                  <span className="rounded-[2px] bg-[rgb(64_132_52)] px-[4px] py-[2px] text-[3px] font-bold text-[rgb(236_240_228)]">
                    Criar
                  </span>
                  <span className="rounded-[2px] border border-[rgba(236,240,228,0.3)] px-[4px] py-[2px] text-[3px] text-[rgba(236,240,228,0.8)]">
                    Método
                  </span>
                </div>
                <div className="mt-[5px] grid grid-cols-3 gap-[3px]">
                  {[0, 1, 2].map((c) => (
                    <div
                      key={c}
                      className="rounded-[2px] border border-[rgba(236,240,228,0.12)] bg-[rgba(255,255,255,0.04)] p-[3px]"
                    >
                      <span className="block w-[5px] h-[5px] rounded-[1px] bg-[rgba(64,132,52,0.5)]" />
                      <span className="mt-[2px] block h-[1.5px] w-full rounded-full bg-[rgba(236,240,228,0.25)]" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            <span className="absolute top-[85px] left-[55px] text-[6px] text-[#555]">phosphorcode</span>
          </div>
        </motion.div>

        {/* Corpo (base/teclado) — preto */}
        <div className="macbook-body w-[150px] h-[96px] absolute left-0 bottom-0 rounded-[7px] bg-[#0d0f08]">
          <div className="macbook-body-face-one w-[150px] h-[96px] absolute left-0 bottom-0 rounded-[7px] bg-[#16190f] bg-[linear-gradient(30deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0)_60%)]">
            {/* trackpad */}
            <div className="w-[40px] h-[31px] absolute left-1/2 top-1/2 rounded-[4px] mt-[-44px] ml-[-18px] bg-[#1c2113] shadow-[inset_0_0_3px_#000]"></div>
            {/* teclado */}
            <div className="macbook-keyboard w-[130px] h-[45px] absolute left-[7px] top-[41px] rounded-[4px] bg-[#10130b] shadow-[inset_0_0_3px_#000] pl-[2px] overflow-hidden">
              {Array.from({ length: 58 }).map((_, i) => (
                <div key={`key-norm-${i}`} className={keyBaseClasses}></div>
              ))}
              <div key="key-space" className={`${keyBaseClasses} w-[45px]`}></div>
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={`key-f-${i}`} className={`${keyBaseClasses} h-[3px]`}></div>
              ))}
            </div>
          </div>
          <div className="w-[5px] h-[5px] bg-[#222] rounded-full absolute left-[20px] top-[20px]"></div>
          <div className="w-[5px] h-[5px] bg-[#222] rounded-full absolute right-[20px] top-[20px]"></div>
          <div className="w-[5px] h-[5px] bg-[#222] rounded-full absolute right-[20px] bottom-[20px]"></div>
          <div className="w-[5px] h-[5px] bg-[#222] rounded-full absolute left-[20px] bottom-[20px]"></div>
        </div>
      </div>

      {/* sombra */}
      <div className="absolute w-[60px] h-[0px] left-[40px] top-[150px] shadow-[0_0_55px_38px_rgba(0,0,0,0.45)] [transform:rotateX(80deg)]"></div>
    </div>
  );
};

export { Macbook };
