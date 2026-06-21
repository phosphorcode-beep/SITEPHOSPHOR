"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { Container } from "@/components/ui/container";
import { FlowButton } from "@/components/ui/flow-button";
import { Heading } from "@/components/ui/heading";
import { BlurFade } from "@/components/ui/blur-fade";
import { WavyUnderline } from "@/components/ui/animated-underline-text-one";
import { RocketLottie } from "@/components/sections/rocket-lottie";
import { WebCodingLottie } from "@/components/sections/web-coding-lottie";
import { OperatorLottie } from "@/components/sections/operator-lottie";
import { Macbook } from "@/components/ui/animated-3d-mac-book-air";
import { siteContent } from "@/content/site-content";

const { eyebrow, title, description, phases, cta } = siteContent.process;
const [titleLineOne, titleLineTwo] = title.split("\n");
const [estruturadoBefore, estruturadoAfter] = (titleLineTwo ?? "").split("estruturado");

export function MethodSection() {
  const reduced = useReducedMotion();

  const card = (left: boolean): Variants =>
    reduced
      ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
      : {
          hidden: { opacity: 0, x: left ? -48 : 48, y: 16 },
          visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
          },
        };

  return (
    <section
      id="processo"
      className="py-xl text-foreground-inverse sm:py-2xl"
    >
      <Container>
        {/* Cabeçalho centralizado */}
        <div className="mx-auto mb-xl max-w-4xl text-center">
          <BlurFade>
            <span className="font-secondary text-caption font-semibold uppercase tracking-widest text-brand-accent">
              {eyebrow}
            </span>
          </BlurFade>
          <BlurFade delay={0.1}>
            <Heading
              as="h2"
              size="h2"
              className="mt-md whitespace-pre-line pb-2 leading-tight text-foreground-inverse"
            >
              {titleLineOne}
              {"\n"}
              {estruturadoBefore}
              <WavyUnderline>estruturado</WavyUnderline>
              {estruturadoAfter}
            </Heading>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="mx-auto mt-md max-w-xl text-body text-foreground-inverse/70">
              {description}
            </p>
          </BlurFade>
        </div>

        {/* Cards em zig-zag */}
        <div className="relative">
          {/* Espinha central (desktop) */}
          <div
            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-foreground-inverse/10 md:block"
            aria-hidden
          />

          <div className="grid gap-xl md:gap-2xl">
            {phases.map((p, i) => {
              const left = i % 2 === 0;
              return (
                <div
                  key={p.phase}
                  className="relative md:grid md:grid-cols-2 md:items-center md:gap-2xl"
                >
                  {/* Marcador central (desktop) */}
                  <span
                    className="absolute left-1/2 top-lg hidden size-3 -translate-x-1/2 rounded-full border-2 border-brand-secondary bg-brand-accent md:block"
                    aria-hidden
                  />

                  {/* Animação ao lado do card da Fase 01 */}
                  {i === 0 && (
                    <motion.div
                      className="mx-auto mb-md flex w-full max-w-[240px] items-center justify-center md:col-start-2 md:row-start-1 md:mb-0 md:max-w-none"
                      variants={card(false)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.4 }}
                    >
                      <WebCodingLottie />
                    </motion.div>
                  )}

                  {/* MacBook 3D animado ao lado do card da Fase 02 */}
                  {i === 1 && (
                    <motion.div
                      className="mb-md flex items-center justify-center overflow-hidden md:col-start-1 md:row-start-1 md:mb-0 md:overflow-visible"
                      variants={card(true)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.4 }}
                    >
                      <div className="relative mx-auto flex h-[210px] w-full items-center justify-center overflow-hidden sm:h-[260px] md:h-[480px] md:overflow-visible">
                        <div className="macbook-fit relative h-[190px] w-[190px]">
                          <Macbook />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Animação ao lado do card da Fase 03 */}
                  {i === 2 && (
                    <motion.div
                      className="mx-auto mb-md flex w-full max-w-[240px] items-center justify-center md:col-start-2 md:row-start-1 md:mb-0 md:max-w-none"
                      variants={card(false)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.4 }}
                    >
                      <OperatorLottie />
                    </motion.div>
                  )}

                  {/* Animação ao lado do card da Fase 04 */}
                  {i === phases.length - 1 && (
                    <motion.div
                      className="mx-auto mb-md flex w-full max-w-[240px] items-center justify-center md:col-start-1 md:mb-0 md:max-w-none"
                      variants={card(true)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.4 }}
                    >
                      <RocketLottie />
                    </motion.div>
                  )}

                  <motion.div
                    className={left ? "md:col-start-1" : "md:col-start-2"}
                    variants={card(left)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                  >
                    <div className="card-lift grid h-full gap-sm rounded-brand-lg border border-foreground-inverse/12 bg-background p-lg">
                      <span className="font-secondary text-caption font-semibold uppercase tracking-widest text-brand-accent">
                        {p.phase}
                      </span>
                      <Heading as="h3" className="text-foreground-inverse" size="h3">
                        {p.title}
                      </Heading>
                      <p className="text-small leading-relaxed text-foreground-inverse/65">
                        {p.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-xl flex justify-center">
          <FlowButton href="#contato" text={cta} />
        </div>
      </Container>
    </section>
  );
}
