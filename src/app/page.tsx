import { ArrowRight, CheckCircle2, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { PixelHero } from "@/components/ui/pixel-perfect-hero";
import { Section } from "@/components/ui/section";
import { Textarea } from "@/components/ui/textarea";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { siteContent } from "@/content/site-content";

/* ─── Helpers ─────────────────────────────────────────────────── */

function TodoBanner({ note }: { note: string }) {
  return (
    <div
      className="mb-xl flex items-start gap-md rounded-brand border border-dashed border-amber-400/60 bg-amber-50 px-lg py-md"
      role="note"
      aria-label="Conteúdo pendente"
    >
      <AlertTriangle className="mt-px shrink-0 text-amber-500" aria-hidden size={18} />
      <p className="font-secondary text-caption font-semibold text-amber-700">{note}</p>
    </div>
  );
}

function SectionIntro({
  eyebrow,
  title,
  description,
  tone = "light",
  todoNote,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
  todoNote?: string;
}) {
  return (
    <div className="mb-xl max-w-3xl">
      {todoNote && <TodoBanner note={todoNote} />}
      <Badge tone={tone}>{eyebrow}</Badge>
      <Heading
        className={`mt-md ${tone === "dark" ? "text-foreground-inverse" : ""}`}
        size="h2"
      >
        {title}
      </Heading>
      {description && (
        <p
          className={`mt-md text-body ${
            tone === "dark" ? "text-foreground-inverse/75" : "text-foreground-secondary"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

/* ─── Página ──────────────────────────────────────────────────── */

export default function Home() {
  return (
    <main id="top">
      <Navbar />

      {/* ── Hero ────────────────────────────────────────────────── */}
      <PixelHero
        word1="Phosphor"
        word2=".code"
        description={siteContent.hero.subheadline}
        primaryCta={siteContent.hero.primaryCta}
        secondaryCta={siteContent.hero.secondaryCta}
        primaryHref="#solucoes"
        secondaryHref="#contato"
      />

      {/* ── Serviços ────────────────────────────────────────────── */}
      <Section className="bg-background" id="servicos">
        <SectionIntro
          eyebrow={siteContent.servicos.eyebrow}
          title={siteContent.servicos.title}
          description={siteContent.servicos.description}
        />
        <div className="grid gap-md sm:grid-cols-2 lg:grid-cols-4">
          {siteContent.servicos.cards.map((service) => {
            const Icon = service.icon;
            return (
              <Card className="grid gap-md" key={service.title}>
                <div className="flex size-11 items-center justify-center rounded-brand bg-brand-primary text-foreground-inverse">
                  <Icon aria-hidden size={22} />
                </div>
                <div>
                  <Heading as="h3" size="h3">
                    {service.title}
                  </Heading>
                  <p className="mt-sm text-small text-foreground-secondary">
                    {service.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* ── Soluções ────────────────────────────────────────────── */}
      <Section className="bg-surface" id="solucoes">
        <SectionIntro
          eyebrow={siteContent.solucoes.eyebrow}
          title={siteContent.solucoes.title}
          description={siteContent.solucoes.description}
        />
        <div className="grid gap-2xl">
          {siteContent.solucoes.verticals.map((vertical, index) => {
            const Icon = vertical.icon;
            const isEven = index % 2 === 0;
            return (
              <div
                className="grid gap-xl rounded-brand-lg border border-border/15 bg-background p-lg lg:grid-cols-[1fr_1fr] lg:items-center"
                key={vertical.id}
                id={vertical.id}
              >
                <div className={isEven ? "" : "lg:order-last"}>
                  <Badge>{vertical.eyebrow}</Badge>
                  <Heading className="mt-md" size="h2">
                    {vertical.title}
                  </Heading>
                  <p className="mt-md text-body text-foreground-secondary">
                    {vertical.description}
                  </p>
                </div>
                <div className="grid gap-lg rounded-brand border border-border/10 bg-surface p-lg">
                  <div className="flex items-center gap-md border-b border-border/15 pb-md">
                    <div className="flex size-11 items-center justify-center rounded-brand bg-brand-secondary text-foreground-inverse">
                      <Icon aria-hidden size={22} />
                    </div>
                    <span className="font-secondary text-caption font-semibold uppercase text-brand-primary">
                      Operação real
                    </span>
                  </div>
                  <ul className="grid gap-sm" role="list">
                    {vertical.points.map((point) => (
                      <li className="flex items-center gap-sm" key={point} role="listitem">
                        <CheckCircle2
                          className="shrink-0 text-brand-primary"
                          aria-hidden
                          size={16}
                        />
                        <span className="text-small text-foreground-secondary">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* ── Método ──────────────────────────────────────────────── */}
      <Section className="bg-brand-secondary text-foreground-inverse" id="metodo">
        <SectionIntro
          eyebrow={siteContent.metodo.eyebrow}
          title={siteContent.metodo.title}
          description={siteContent.metodo.description}
          tone="dark"
          todoNote="TODO: Aguardando nomes reais das etapas do método definidos pelo cliente."
        />

        {/* Step-by-step horizontal */}
        <div className="relative">
          {/* Connector line — desktop only */}
          <div
            className="absolute left-0 right-0 top-[1.75rem] hidden h-px bg-foreground-inverse/15 lg:block"
            aria-hidden
          />
          <div className="relative grid gap-lg sm:grid-cols-2 lg:grid-cols-4">
            {siteContent.metodo.steps.map((step) => {
              const Icon = step.icon;
              return (
                <div className="grid gap-md" key={step.number}>
                  {/* Step number bubble */}
                  <div className="flex items-center gap-md">
                    <div className="relative flex size-14 shrink-0 items-center justify-center rounded-full border border-brand-primary/30 bg-brand-secondary">
                      <Icon className="text-brand-accent" aria-hidden size={22} />
                      <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-brand-primary font-secondary text-[10px] font-bold text-foreground-inverse">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="font-secondary text-caption font-semibold uppercase text-brand-accent">
                      {step.name}
                    </p>
                    <p className="mt-xs text-small text-foreground-inverse/70">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <p className="mt-2xl border-t border-foreground-inverse/15 pt-xl text-body italic text-foreground-inverse/50">
          &ldquo;{siteContent.metodo.note}&rdquo;
        </p>
      </Section>

      {/* ── Parceiros ───────────────────────────────────────────── */}
      <Section className="bg-background" id="parceiros">
        <SectionIntro
          eyebrow={siteContent.parceiros.eyebrow}
          title={siteContent.parceiros.title}
          description={siteContent.parceiros.description}
          todoNote="TODO: Logos de parceiros e depoimentos a serem fornecidos pelo cliente."
        />

        {/* Logo grid placeholder */}
        <div className="grid grid-cols-2 gap-md sm:grid-cols-3 lg:grid-cols-6">
          {siteContent.parceiros.logos.map((logo) => (
            <div
              key={logo.name}
              className="flex h-20 items-center justify-center rounded-brand border border-dashed border-border/30 bg-surface"
              title={logo.name}
              aria-label={logo.name}
            >
              <span className="font-secondary text-[10px] font-semibold uppercase text-foreground-secondary/50">
                Logo
              </span>
            </div>
          ))}
        </div>

        {/* Testimonial placeholder */}
        <div className="mt-2xl">
          {siteContent.parceiros.testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="rounded-brand-lg border border-dashed border-border/30 bg-surface p-lg"
            >
              <p className="text-body italic text-foreground-secondary">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-md">
                <span className="font-secondary text-caption font-semibold uppercase text-foreground-secondary">
                  {t.author}
                </span>
                <span className="ml-sm font-secondary text-caption text-foreground-secondary/60">
                  {t.role}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
      </Section>

      {/* ── Cerhole ─────────────────────────────────────────────── */}
      <Section className="bg-surface" id="cerhole">
        <div className="rounded-brand-lg border border-dashed border-amber-400/50 bg-amber-50/60 p-2xl text-center">
          <div className="mx-auto max-w-xl">
            <div className="mb-lg flex justify-center">
              <AlertTriangle className="text-amber-500" aria-hidden size={40} />
            </div>
            <Heading size="h2" className="text-amber-800">
              {siteContent.cerhole.title}
            </Heading>
            <p className="mt-md text-body text-amber-700">{siteContent.cerhole.note}</p>
            <div className="mt-xl grid gap-sm sm:grid-cols-3">
              {(
                [
                  ["Produto", "Um produto ou linha da Phosphor.code"],
                  ["Marca", "Uma marca parceira ou co-fundada"],
                  ["Metodologia", "Um framework ou método proprietário"],
                ] as const
              ).map(([label, desc]) => (
                <div
                  key={label}
                  className="rounded-brand border border-amber-300/60 bg-white/60 p-md"
                >
                  <p className="font-secondary text-caption font-semibold uppercase text-amber-700">
                    {label}?
                  </p>
                  <p className="mt-xs text-small text-amber-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── Contato ─────────────────────────────────────────────── */}
      <Section className="bg-background" id="contato">
        <div className="grid gap-2xl lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <Badge>{siteContent.contact.eyebrow}</Badge>
            <Heading className="mt-md" size="h2">
              {siteContent.contact.title}
            </Heading>
            <p className="mt-md text-body text-foreground-secondary">
              {siteContent.contact.description}
            </p>
            <div className="mt-xl rounded-brand border border-dashed border-amber-400/50 bg-amber-50/60 p-md">
              <p className="font-secondary text-caption font-semibold text-amber-700">
                <AlertTriangle className="mr-xs inline" aria-hidden size={14} />
                {siteContent.contact.formNote}
              </p>
            </div>
          </div>

          <form
            className="grid gap-md rounded-brand-lg border border-border/15 bg-surface p-lg shadow-brand-sm"
            aria-label="Formulário de contato"
            action="#"
          >
            <Input
              label="Nome"
              name="nome"
              placeholder="Seu nome"
              required
              autoComplete="name"
            />
            <Input
              label="E-mail"
              name="email"
              type="email"
              placeholder="voce@empresa.com"
              required
              autoComplete="email"
            />
            <Textarea
              label="Mensagem"
              name="mensagem"
              placeholder="Conte o cenário da sua empresa: processos, sistemas, gargalos..."
              required
            />
            <Button type="submit" className="mt-sm w-full">
              {siteContent.contact.cta}
              <ArrowRight aria-hidden size={18} />
            </Button>
          </form>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
