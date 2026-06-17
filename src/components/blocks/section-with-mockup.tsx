"use client";

import React from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";

interface SectionWithMockupProps {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  /** Conteúdo extra da coluna de texto (lista, CTA, etc). */
  children?: React.ReactNode;
  /** Mockup principal (HTML/CSS, sem imagem externa). */
  primaryMockup: React.ReactNode;
  /** Mockup secundário/decorativo atrás do principal. */
  secondaryMockup: React.ReactNode;
  reverseLayout?: boolean;
  id?: string;
}

export function SectionWithMockup({
  eyebrow,
  title,
  description,
  children,
  primaryMockup,
  secondaryMockup,
  reverseLayout = false,
  id,
}: SectionWithMockupProps) {
  const reduced = useReducedMotion();

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants: Variants = reduced
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
        },
      };

  const layoutClasses = reverseLayout
    ? "md:grid-cols-2 md:grid-flow-col-dense"
    : "md:grid-cols-2";
  const textOrderClass = reverseLayout ? "md:col-start-2" : "";
  const imageOrderClass = reverseLayout ? "md:col-start-1" : "";

  return (
    <section
      id={id}
      className="relative overflow-hidden bg-brand-secondary py-2xl text-foreground-inverse sm:py-3xl"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-lg sm:px-xl">
        <motion.div
          className={`grid grid-cols-1 items-center gap-2xl md:gap-xl ${layoutClasses}`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Texto */}
          <motion.div
            className={`mx-auto flex max-w-xl flex-col items-start gap-md ${textOrderClass}`}
            variants={itemVariants}
          >
            {eyebrow && (
              <span className="font-secondary text-caption font-semibold uppercase tracking-widest text-brand-accent">
                {eyebrow}
              </span>
            )}
            <h2 className="font-primary text-h2 font-bold leading-tight text-foreground-inverse">
              {title}
            </h2>
            <p className="text-body leading-relaxed text-foreground-inverse/65">{description}</p>
            {children}
          </motion.div>

          {/* Mockups */}
          <motion.div
            className={`relative mx-auto w-full max-w-[471px] ${imageOrderClass}`}
            variants={itemVariants}
          >
            {/* Secundário (decorativo, atrás) */}
            <motion.div
              className="absolute z-0 w-[82%]"
              style={{
                top: reverseLayout ? "auto" : "0%",
                bottom: reverseLayout ? "0%" : "auto",
                left: reverseLayout ? "auto" : "-14%",
                right: reverseLayout ? "-14%" : "auto",
              }}
              initial={false}
              whileInView={reduced ? undefined : { y: reverseLayout ? -22 : -28 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              {secondaryMockup}
            </motion.div>

            {/* Principal */}
            <motion.div
              className="relative z-10"
              initial={false}
              whileInView={reduced ? undefined : { y: reverseLayout ? 20 : 26 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              {primaryMockup}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Linha-gradiente inferior (verde sutil, sem neon) */}
      <div
        className="absolute bottom-0 left-0 z-0 h-px w-full"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgb(150 210 110 / 0.25) 0%, rgba(0,0,0,0) 100%)",
        }}
      />
    </section>
  );
}

export default SectionWithMockup;
