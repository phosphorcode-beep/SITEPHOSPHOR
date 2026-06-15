import { ArrowRight, CheckCircle2, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button, ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Section } from "@/components/ui/section";
import { FinalCta } from "@/components/sections/cta";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { siteContent } from "@/content/site-content";

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto mb-xl max-w-3xl text-center">
      <Badge>{eyebrow}</Badge>
      <Heading className="mt-md" size="h2">
        {title}
      </Heading>
      <p className="mt-md text-body text-foreground-secondary">{description}</p>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-brand-lg border border-border bg-surface p-lg shadow-brand-lg">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at top right, rgb(var(--color-primary) / 0.18), transparent 34%), linear-gradient(135deg, rgb(var(--color-surface)), rgb(var(--color-muted)))",
        }}
      />
      <div className="relative grid h-full content-between gap-lg">
        <div className="grid gap-md">
          <div className="flex items-center justify-between border-b border-border pb-md">
            <div>
              <p className="text-caption font-semibold uppercase text-foreground-secondary">Pipeline</p>
              <p className="text-h3 font-bold text-foreground-primary">Leads qualificados</p>
            </div>
            <span className="rounded-brand-sm bg-status-success/10 px-sm py-xs text-small font-semibold text-status-success">
              +38%
            </span>
          </div>
          <div className="grid gap-sm">
            {["Descoberta", "Proposta", "Conversao"].map((item, index) => (
              <div className="grid gap-xs" key={item}>
                <div className="flex items-center justify-between text-small">
                  <span className="font-medium text-foreground-primary">{item}</span>
                  <span className="text-foreground-secondary">{68 + index * 9}%</span>
                </div>
                <div className="h-2 rounded-brand-sm bg-muted">
                  <div
                    className="h-2 rounded-brand-sm bg-brand-primary"
                    style={{ width: `${68 + index * 9}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-md rounded-brand border border-border bg-background/80 p-lg backdrop-blur">
          <div className="flex items-start gap-md">
            <div className="rounded-brand bg-brand-accent/10 p-sm text-brand-accent">
              <Mail aria-hidden size={20} />
            </div>
            <div>
              <p className="font-semibold text-foreground-primary">Nova oportunidade</p>
              <p className="text-small text-foreground-secondary">
                Lead capturado pelo CTA principal com interesse em plano Pro.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-sm text-center text-caption text-foreground-secondary">
            <span className="rounded-brand-sm bg-muted px-xs py-sm">Brand tokens</span>
            <span className="rounded-brand-sm bg-muted px-xs py-sm">Componentes</span>
            <span className="rounded-brand-sm bg-muted px-xs py-sm">Conteudo</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main id="top">
      <Navbar />

      <Section className="overflow-hidden bg-background pt-xl sm:pt-2xl">
        <div className="grid gap-2xl lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="max-w-3xl">
            <Badge>{siteContent.hero.eyebrow}</Badge>
            <Heading as="h1" className="mt-md" size="h1">
              {siteContent.hero.headline}
            </Heading>
            <p className="mt-lg max-w-2xl text-body text-foreground-secondary">{siteContent.hero.subheadline}</p>
            <div className="mt-xl flex flex-col gap-md sm:flex-row">
              <ButtonLink href="#cta-final">
                {siteContent.hero.primaryCta}
                <ArrowRight aria-hidden size={18} />
              </ButtonLink>
              <ButtonLink href="#planos" variant="outline">
                {siteContent.hero.secondaryCta}
              </ButtonLink>
            </div>
          </div>
          <HeroVisual />
        </div>
      </Section>

      <Section className="bg-surface" id="beneficios">
        <SectionIntro
          eyebrow="Beneficios"
          title="Uma base comercial consistente desde o primeiro deploy"
          description="A estrutura foi pensada para acelerar apresentacoes, captacao de leads e evolucao visual com governanca."
        />
        <div className="grid gap-md sm:grid-cols-2 lg:grid-cols-4">
          {siteContent.benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <Card className="grid gap-md" key={benefit.title}>
                <div className="flex size-11 items-center justify-center rounded-brand bg-brand-primary/10 text-brand-primary">
                  <Icon aria-hidden size={22} />
                </div>
                <div>
                  <Heading as="h3" size="h3">
                    {benefit.title}
                  </Heading>
                  <p className="mt-sm text-small text-foreground-secondary">{benefit.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section id="como-funciona">
        <SectionIntro
          eyebrow="Como funciona"
          title="Tres passos para sair do placeholder e chegar na marca final"
          description="Troque mensagens, aplique identidade visual e publique com uma arquitetura preparada para manutencao."
        />
        <div className="grid gap-md md:grid-cols-3">
          {siteContent.steps.map((step, index) => (
            <Card className="grid gap-md" key={step.title}>
              <span className="flex size-10 items-center justify-center rounded-brand bg-brand-secondary text-small font-bold text-foreground-inverse">
                {index + 1}
              </span>
              <Heading as="h3" size="h3">
                {step.title}
              </Heading>
              <p className="text-small text-foreground-secondary">{step.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="grid gap-xl lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <Badge>Prova social</Badge>
            <Heading className="mt-md" size="h2">
              Preparado para receber casos reais, logos e depoimentos
            </Heading>
            <p className="mt-md text-body text-foreground-secondary">
              Os exemplos abaixo sao ficticios e funcionam como slots editoriais para substituir por clientes,
              parceiros e resultados validados.
            </p>
          </div>
          <div className="grid gap-md">
            {siteContent.testimonials.map((testimonial) => (
              <Card key={testimonial.author}>
                <p className="text-body text-foreground-primary">&quot;{testimonial.quote}&quot;</p>
                <p className="mt-md font-semibold text-foreground-primary">{testimonial.author}</p>
                <p className="text-small text-foreground-secondary">{testimonial.role}</p>
              </Card>
            ))}
            <div className="grid grid-cols-2 gap-sm sm:grid-cols-4">
              {siteContent.partnerLogos.map((logo) => (
                <div
                  className="flex min-h-16 items-center justify-center rounded-brand border border-border bg-background px-md text-center text-small font-semibold text-foreground-secondary"
                  key={logo}
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="recursos">
        <SectionIntro
          eyebrow="Recursos"
          title="Diferenciais para vender agora e evoluir depois"
          description="Componentes, assets e tokens criam uma base simples de manter quando o brandbook oficial chegar."
        />
        <div className="grid gap-md sm:grid-cols-2">
          {siteContent.features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card className="grid gap-md md:grid-cols-[auto_1fr]" key={feature.title}>
                <div className="flex size-12 items-center justify-center rounded-brand bg-brand-accent/10 text-brand-accent">
                  <Icon aria-hidden size={24} />
                </div>
                <div>
                  <Heading as="h3" size="h3">
                    {feature.title}
                  </Heading>
                  <p className="mt-sm text-small text-foreground-secondary">{feature.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section className="bg-surface" id="planos">
        <SectionIntro
          eyebrow="Planos"
          title="Escolha o nivel ideal para apresentar sua oferta"
          description="Valores e pacotes sao placeholders comerciais para adaptar ao modelo real do negocio."
        />
        <div className="grid gap-md lg:grid-cols-3">
          {siteContent.plans.map((plan) => (
            <Card
              className={plan.recommended ? "relative border-brand-primary shadow-brand" : undefined}
              key={plan.name}
            >
              {plan.recommended ? <Badge className="mb-md">Recomendado</Badge> : null}
              <Heading as="h3" size="h3">
                {plan.name}
              </Heading>
              <p className="mt-sm text-small text-foreground-secondary">{plan.description}</p>
              <p className="mt-lg text-h2 font-bold text-foreground-primary">{plan.price}</p>
              <ul className="mt-lg grid gap-sm">
                {plan.features.map((feature) => (
                  <li className="flex items-start gap-sm text-small text-foreground-secondary" key={feature}>
                    <CheckCircle2 className="mt-1 shrink-0 text-status-success" aria-hidden size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <ButtonLink className="mt-lg w-full" href="#cta-final" variant={plan.recommended ? "primary" : "outline"}>
                {plan.cta}
              </ButtonLink>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="faq">
        <SectionIntro
          eyebrow="FAQ"
          title="Perguntas frequentes"
          description="Respostas curtas para reduzir atrito antes da conversao."
        />
        <div className="mx-auto grid max-w-4xl gap-sm">
          {siteContent.faqs.map((faq) => (
            <details className="rounded-brand border border-border bg-surface p-lg" key={faq.question}>
              <summary className="cursor-pointer font-semibold text-foreground-primary">{faq.question}</summary>
              <p className="mt-sm text-small text-foreground-secondary">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="grid gap-lg rounded-brand-lg border border-border bg-background p-lg shadow-brand-sm lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <Badge>Captacao</Badge>
            <Heading className="mt-md" size="h2">
              Receba interessados sem depender de integracoes no primeiro dia
            </Heading>
            <p className="mt-md text-body text-foreground-secondary">
              Este formulario e um placeholder acessivel para conectar depois ao CRM, automacao ou ferramenta de email.
            </p>
          </div>
          <form className="grid gap-md" action="mailto:contato@phosphor.example">
            <Input label="Nome" name="name" placeholder="Seu nome" required />
            <Input label="Email" name="email" placeholder="voce@empresa.com" required type="email" />
            <Button type="submit">
              Enviar interesse
              <ArrowRight aria-hidden size={18} />
            </Button>
          </form>
        </div>
      </Section>

      <FinalCta />
      <Footer />
    </main>
  );
}
