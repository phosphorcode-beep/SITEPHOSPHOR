import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button, ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Section } from "@/components/ui/section";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { siteContent } from "@/content/site-content";

/* ─── Sub-componentes ─────────────────────────────────────────── */

function SectionIntro({
  eyebrow,
  title,
  description,
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div className="mb-xl max-w-3xl">
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

function HeroPanel() {
  return (
    <div
      className="relative min-h-[380px] overflow-hidden rounded-brand-lg border border-brand-primary/20 p-lg text-foreground-inverse"
      style={{ background: "#111A09" }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 80%, rgb(var(--color-primary) / 0.25), transparent 60%)",
        }}
        aria-hidden
      />
      <div className="relative grid h-full content-between gap-xl">
        <div className="flex items-center justify-between border-b border-foreground-inverse/15 pb-md">
          <span className="font-secondary text-caption font-semibold uppercase text-brand-accent">
            Phosphor Audit
          </span>
          <span className="font-secondary text-caption uppercase text-foreground-inverse/50">
            2026
          </span>
        </div>
        <div>
          <p className="font-secondary text-caption font-semibold uppercase text-brand-accent">
            Diagnóstico de operação
          </p>
          <p className="mt-sm max-w-sm text-h3 font-bold leading-tight text-foreground-inverse">
            Funcionar não basta. Software para operação real precisa ser seguro e rastreável.
          </p>
        </div>
        <div className="grid gap-sm">
          {siteContent.metrics.map((metric) => (
            <div
              className="flex items-center justify-between border-t border-foreground-inverse/15 pt-sm"
              key={metric.label}
            >
              <span className="font-secondary text-caption uppercase text-brand-accent">
                {metric.label}
              </span>
              <span className="text-small text-foreground-inverse/75">{metric.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Página principal ────────────────────────────────────────── */

export default function Home() {
  return (
    <main id="top">
      <Navbar />

      {/* ── 1. Hero ─────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-brand-secondary py-2xl sm:py-3xl"
        aria-label="Apresentação"
      >
        {/* Grid técnico sutil */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgb(var(--color-accent)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--color-accent)) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
          aria-hidden
        />

        <Container className="relative">
          <div className="grid gap-2xl lg:grid-cols-[1fr_0.82fr] lg:items-center">
            <div className="max-w-4xl">
              <Badge tone="dark">{siteContent.hero.eyebrow}</Badge>
              <Heading as="h1" className="mt-md text-foreground-inverse" size="h1">
                {siteContent.hero.headline}
              </Heading>
              <p className="mt-lg max-w-2xl text-h3 font-normal leading-snug text-foreground-inverse/75">
                {siteContent.hero.subheadline}
              </p>
              <div className="mt-xl flex flex-col gap-md sm:flex-row">
                <ButtonLink href="#contato">
                  {siteContent.hero.primaryCta}
                  <ArrowRight aria-hidden size={18} />
                </ButtonLink>
                <ButtonLink href="#solucoes" variant="inverse">
                  {siteContent.hero.secondaryCta}
                </ButtonLink>
              </div>
              <p className="mt-lg font-secondary text-caption text-brand-accent">
                {siteContent.hero.microcopy}
              </p>
            </div>
            <HeroPanel />
          </div>
        </Container>
      </section>

      {/* ── 2. Problema ─────────────────────────────────────────── */}
      <Section className="bg-surface" id="problema">
        <div className="grid gap-2xl lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <Badge>Diagnóstico</Badge>
            <Heading className="mt-md" size="h2">
              {siteContent.problem.title}
            </Heading>
            <p className="mt-md text-body text-foreground-secondary">
              {siteContent.problem.description}
            </p>
          </div>
          <div className="grid gap-sm sm:grid-cols-2">
            {siteContent.problem.pains.map((pain) => {
              const Icon = pain.icon;
              return (
                <div
                  key={pain.label}
                  className="flex items-center gap-md rounded-brand border border-border/15 bg-background p-md"
                >
                  <Icon
                    className="shrink-0 text-brand-primary"
                    aria-hidden
                    size={18}
                  />
                  <span className="text-small font-medium text-foreground-primary">
                    {pain.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ── 3. Soluções ─────────────────────────────────────────── */}
      <Section className="bg-background" id="solucoes">
        <SectionIntro
          eyebrow="Soluções"
          title="Software sob medida para vender, atender e operar melhor."
          description="Sistemas, sites, plataformas e integrações pensados com arquitetura, revisão técnica e continuidade. Não por improviso."
        />
        <div className="grid gap-md sm:grid-cols-2 lg:grid-cols-4">
          {siteContent.services.map((service) => {
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

      {/* ── 4 & 5. Verticais (Varejo + Saúde) ──────────────────── */}
      {siteContent.verticals.map((vertical, index) => {
        const Icon = vertical.icon;
        const isEven = index % 2 === 0;
        return (
          <Section
            className={isEven ? "bg-surface" : "bg-background"}
            id={vertical.id}
            key={vertical.id}
          >
            <div className="grid gap-xl lg:grid-cols-[1fr_1fr] lg:items-center">
              <div className={isEven ? "" : "lg:order-last"}>
                <Badge>{vertical.eyebrow}</Badge>
                <Heading className="mt-md" size="h2">
                  {vertical.title}
                </Heading>
                <p className="mt-md text-body text-foreground-secondary">
                  {vertical.description}
                </p>
                <ButtonLink className="mt-xl" href="#contato">
                  {vertical.cta}
                  <ArrowRight aria-hidden size={16} />
                </ButtonLink>
              </div>

              <Card
                className={`grid gap-lg ${isEven ? "bg-background" : "bg-surface"}`}
              >
                <div className="flex items-center gap-md border-b border-border/15 pb-md">
                  <div className="flex size-12 items-center justify-center rounded-brand bg-brand-secondary text-foreground-inverse">
                    <Icon aria-hidden size={24} />
                  </div>
                  <span className="font-secondary text-caption font-semibold uppercase text-brand-primary">
                    Operação real
                  </span>
                </div>
                <ul className="grid gap-sm" role="list">
                  {vertical.points.map((point) => (
                    <li className="flex items-center gap-sm text-foreground-secondary" key={point}>
                      <CheckCircle2
                        className="shrink-0 text-brand-primary"
                        aria-hidden
                        size={16}
                      />
                      <span className="text-small">{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </Section>
        );
      })}

      {/* ── 6. Processo ─────────────────────────────────────────── */}
      <Section className="bg-brand-secondary text-foreground-inverse" id="processo">
        <SectionIntro
          eyebrow="Processo"
          title={siteContent.process.title}
          tone="dark"
        />
        <div className="grid gap-md md:grid-cols-3">
          {siteContent.process.phases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <div
                className="border-t border-foreground-inverse/15 pt-md"
                key={phase.name}
              >
                <div className="mb-md flex items-center justify-between">
                  <Icon className="text-brand-accent" aria-hidden size={24} />
                  <span className="font-secondary text-caption text-brand-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mb-xs font-secondary text-caption font-semibold uppercase text-brand-accent">
                  {phase.name}
                </p>
                <Heading as="h3" className="text-foreground-inverse" size="h3">
                  {phase.title}
                </Heading>
                <p className="mt-sm text-small text-foreground-inverse/75">
                  {phase.description}
                </p>
              </div>
            );
          })}
        </div>
        <p className="mt-2xl border-t border-foreground-inverse/15 pt-xl text-body italic text-foreground-inverse/55">
          &ldquo;{siteContent.process.note}&rdquo;
        </p>
      </Section>

      {/* ── 7. Segurança ────────────────────────────────────────── */}
      <Section className="bg-surface" id="seguranca">
        <div className="grid gap-2xl lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <Badge>Segurança e engenharia</Badge>
            <Heading className="mt-md" size="h2">
              {siteContent.securitySection.title}
            </Heading>
            <p className="mt-md text-body text-foreground-secondary">
              {siteContent.securitySection.description}
            </p>
            <div className="mt-xl grid grid-cols-2 gap-sm" role="list" aria-label="Checklist de entrega">
              {siteContent.securitySection.checklist.map((item) => (
                <div key={item} className="flex items-center gap-sm" role="listitem">
                  <CheckCircle2
                    className="shrink-0 text-brand-primary"
                    aria-hidden
                    size={15}
                  />
                  <span className="font-secondary text-caption font-semibold text-foreground-primary">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-md">
            {siteContent.securitySection.cards.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="flex gap-md bg-background">
                  <Icon
                    className="mt-xs shrink-0 text-brand-primary"
                    aria-hidden
                    size={22}
                  />
                  <div>
                    <Heading as="h3" size="h3">
                      {item.title}
                    </Heading>
                    <p className="mt-sm text-small text-foreground-secondary">
                      {item.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ── 8. Comparativo ──────────────────────────────────────── */}
      <Section className="bg-background" id="comparativo">
        <SectionIntro
          eyebrow="Comparativo"
          title={siteContent.comparison.title}
          description="Agência genérica resolve qualquer coisa. Vibe coder entrega rápido. Phosphorcode resolve operação real, com processo e governança."
        />
        <div className="overflow-x-auto rounded-brand border border-border/15">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead>
              <tr>
                <th className="w-36 border-b border-border/15 bg-surface px-lg py-md font-secondary text-caption uppercase text-foreground-secondary" />
                {siteContent.comparison.columns.map((col, i) => (
                  <th
                    key={col}
                    className={`border-b px-lg py-md font-secondary text-caption uppercase ${
                      i === 2
                        ? "border-brand-primary/30 bg-brand-primary/8 text-brand-primary"
                        : "border-border/15 bg-surface text-foreground-secondary"
                    }`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {siteContent.comparison.rows.map((row, rowIndex) => (
                <tr
                  key={row.label}
                  className={rowIndex % 2 === 0 ? "bg-background" : "bg-surface/60"}
                >
                  <td className="border-b border-border/10 px-lg py-md font-secondary text-caption font-semibold uppercase text-foreground-secondary">
                    {row.label}
                  </td>
                  {row.values.map((value, colIndex) => (
                    <td
                      key={colIndex}
                      className={`border-b border-border/10 px-lg py-md text-small ${
                        colIndex === 2
                          ? "font-semibold text-foreground-primary"
                          : "text-foreground-secondary"
                      }`}
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ── 9. Contato / Formulário ─────────────────────────────── */}
      <Section className="bg-surface" id="contato">
        <div className="grid gap-2xl lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <div>
            <Badge>Contato</Badge>
            <Heading className="mt-md" size="h2">
              {siteContent.contact.title}
            </Heading>
            <p className="mt-md text-body text-foreground-secondary">
              {siteContent.contact.description}
            </p>

            <div className="mt-xl grid gap-md">
              <div className="flex items-start gap-md border-t border-border/15 pt-md">
                <span className="font-secondary text-caption text-brand-primary">01</span>
                <p className="text-small text-foreground-secondary">
                  Enviamos um retorno em até 1 dia útil com uma análise inicial do seu cenário.
                </p>
              </div>
              <div className="flex items-start gap-md border-t border-border/15 pt-md">
                <span className="font-secondary text-caption text-brand-primary">02</span>
                <p className="text-small text-foreground-secondary">
                  Se fizer sentido, agendamos uma conversa técnica sem compromisso.
                </p>
              </div>
              <div className="flex items-start gap-md border-t border-border/15 pt-md">
                <span className="font-secondary text-caption text-brand-primary">03</span>
                <p className="text-small text-foreground-secondary">
                  A proposta só vem depois de entender o problema de verdade.
                </p>
              </div>
            </div>
          </div>

          <form
            className="grid gap-md rounded-brand-lg border border-border/15 bg-background p-lg shadow-brand-sm"
            action={`mailto:${siteContent.brand.contactEmail}`}
            method="post"
            encType="text/plain"
            aria-label="Formulário de diagnóstico"
          >
            <div className="grid gap-md sm:grid-cols-2">
              <Input
                label="Nome"
                name="nome"
                placeholder="Seu nome"
                required
                autoComplete="name"
              />
              <Input
                label="Empresa"
                name="empresa"
                placeholder="Sua empresa"
                required
                autoComplete="organization"
              />
            </div>
            <Input
              label="E-mail corporativo"
              name="email"
              type="email"
              placeholder="voce@empresa.com"
              required
              autoComplete="email"
            />
            <Select
              label="Segmento"
              name="segmento"
              options={siteContent.contact.segmentoOptions}
              required
            />
            <Textarea
              label="O que você precisa resolver?"
              name="problema"
              placeholder="Descreva o cenário: gargalos, processos manuais, sistemas que não conversam..."
              required
            />
            <Input
              label="Sistemas que usa hoje"
              name="sistemas"
              placeholder="ERP, CRM, agenda, e-commerce..."
            />
            <Select
              label="Urgência"
              name="urgencia"
              options={siteContent.contact.urgenciaOptions}
            />
            <Button type="submit" className="mt-sm w-full">
              {siteContent.contact.cta}
              <ArrowRight aria-hidden size={18} />
            </Button>
          </form>
        </div>
      </Section>

      {/* ── Footer ──────────────────────────────────────────────── */}
      <Footer />
    </main>
  );
}
