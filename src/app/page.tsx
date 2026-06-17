import { Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { FlowButton } from "@/components/ui/flow-button";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { BlurFade } from "@/components/ui/blur-fade";
import { CircledText } from "@/components/ui/hand-writing-text";
import { AnimatedInput } from "@/components/ui/animated-input";
import { Section } from "@/components/ui/section";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { MethodSection } from "@/components/sections/method-section";
import { ChameleonAnimation } from "@/components/sections/chameleon-animation";
import { PixelHero } from "@/components/ui/pixel-perfect-hero";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { siteContent } from "@/content/site-content";

/* ── Cabeçalho de seção ───────────────────────────────────────── */
function SectionIntro({
  eyebrow,
  title,
  description,
  tone = "light",
  center = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
  center?: boolean;
}) {
  return (
    <div className={`mb-xl max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <BlurFade>
        <Badge tone={tone}>{eyebrow}</Badge>
      </BlurFade>
      <BlurFade delay={0.1}>
        <Heading
          className={`mt-md ${tone === "dark" ? "text-foreground-inverse" : ""}`}
          size="h2"
        >
          {title}
        </Heading>
      </BlurFade>
      {description && (
        <BlurFade delay={0.2}>
          <p
            className={`mt-md text-body ${
              tone === "dark" ? "text-foreground-inverse/70" : "text-foreground-secondary"
            }`}
          >
            {description}
          </p>
        </BlurFade>
      )}
    </div>
  );
}

/* ── Página principal ─────────────────────────────────────────── */
export default function Home() {
  const { gettingStarted, faq, finalCta } = siteContent;
  const [finalCtaBefore, finalCtaAfter] = finalCta.title.split("software");

  return (
    <main id="top">
      <ScrollReveal />
      <Navbar />

      {/* 1. Hero ─────────────────────────────────────────────── */}
      <PixelHero
        baseText={siteContent.hero.baseText}
        rotatingWords={siteContent.hero.rotatingWords}
        description={siteContent.hero.subheadline}
        primaryCta={siteContent.hero.primaryCta}
        primaryCtaMobile="Criar software"
        secondaryCta={siteContent.hero.secondaryCta}
        secondaryCtaMobile="Método"
        primaryHref="#contato"
        secondaryHref="#processo"
        stackLabel="Parceiros"
      />

      {/* 2. Método Phosphor ──────────────────────────────────── */}
      <MethodSection />

      {/* Formulário ──────────────────────────────────────────── */}
      <Section id="contato">
        <div className="grid gap-2xl lg:grid-cols-2 lg:items-center">
          {/* Copy à esquerda */}
          <div className="text-center">
            <BlurFade>
              <Heading size="h2">
                {finalCtaBefore}
                <CircledText>software</CircledText>
                {finalCtaAfter}
              </Heading>
            </BlurFade>
            <BlurFade delay={0.1}>
              <p className="mx-auto mt-md max-w-xl text-body text-foreground-secondary">
                {finalCta.text}
              </p>
            </BlurFade>

            <ul className="mx-auto mt-xl grid max-w-md gap-0 text-left">
              {[
                "Respondemos em até 25 segundos.",
                "Se fizer sentido, agendamos uma conversa técnica sem compromisso.",
                "A proposta vem depois de entender o problema de verdade.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-md border-t border-border/14 py-md">
                  <span className="font-secondary text-caption font-semibold text-brand-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-small text-foreground-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Formulário à direita */}
          <form
            className="reveal grid gap-md rounded-brand-lg border border-border/14 bg-background p-lg shadow-brand-sm"
            action={`mailto:${siteContent.brand.contactEmail}`}
            method="post"
            encType="text/plain"
            aria-label="Formulário de contato"
            data-delay="120"
          >
            <AnimatedInput label="Nome" name="nome" required autoComplete="name" />

            <AnimatedInput
              label="Empresa"
              name="empresa"
              required
              autoComplete="organization"
            />

            <AnimatedInput
              label="E-mail"
              name="email"
              type="email"
              required
              autoComplete="email"
            />

            <AnimatedInput
              label="Número"
              name="telefone"
              type="tel"
              required
              autoComplete="tel"
            />

            <Select
              label="Quantidade de funcionários"
              name="funcionarios"
              required
              options={[
                { value: "1-10", label: "1 a 10" },
                { value: "11-50", label: "11 a 50" },
                { value: "51-200", label: "51 a 200" },
                { value: "200+", label: "Mais de 200" },
              ]}
            />

            <Textarea
              label="Diga sua principal dor"
              name="dor"
              placeholder="Ex.: planilhas soltas, sistemas que não conversam, retrabalho, falta de indicadores..."
              required
            />

            <FlowButton type="submit" text="Enviar" className="mt-sm w-full justify-center" />
          </form>
        </div>
      </Section>

      {/* FAQ ─────────────────────────────────────────────────── */}
      <Section id="faq">
        <SectionIntro eyebrow={faq.eyebrow} title={faq.title} center />
        <div className="reveal mx-auto max-w-3xl divide-y divide-border/12 border-y border-border/12">
          {faq.items.map((item) => (
            <details key={item.question} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-md py-md text-body font-semibold text-foreground-primary transition-colors hover:text-brand-primary [&::-webkit-details-marker]:hidden">
                {item.question}
                <Plus
                  className="shrink-0 text-brand-primary transition-transform duration-200 group-open:rotate-45"
                  size={18}
                  aria-hidden
                />
              </summary>
              <p className="pb-md pr-lg text-small leading-relaxed text-foreground-secondary">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Section>

      {/* Como começamos ──────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-2xl text-foreground-inverse sm:py-3xl"
        id="comecar"
      >
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background: "radial-gradient(circle, rgb(var(--color-primary) / 0.14), transparent 70%)",
          }}
          aria-hidden
        />
        <Container className="relative">
          <div className="grid items-center gap-2xl lg:grid-cols-2">
            {/* Animação à esquerda — sem borda nem fundo (transparente) */}
            <div className="flex justify-center bg-transparent lg:justify-start">
              <ChameleonAnimation />
            </div>

            {/* Copy à direita */}
            <div className="text-center">
              <BlurFade>
                <span className="font-secondary text-caption font-semibold uppercase tracking-widest text-brand-accent">
                  {gettingStarted.eyebrow}
                </span>
              </BlurFade>
              <BlurFade delay={0.1}>
                <Heading className="mt-md text-foreground-inverse" size="h2">
                  {gettingStarted.title}
                </Heading>
              </BlurFade>
              <BlurFade delay={0.2}>
                <p className="mx-auto mt-md max-w-xl text-body text-foreground-inverse/70">
                  {gettingStarted.text}
                </p>
              </BlurFade>
              <FlowButton href="#contato" text={gettingStarted.cta} className="mt-xl" />
            </div>
          </div>
        </Container>
      </section>

      {/* Footer ──────────────────────────────────────────────── */}
      <Footer />
    </main>
  );
}
