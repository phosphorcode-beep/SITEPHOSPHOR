import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { siteContent } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Política de Privacidade · Phosphorcode",
  description: "Como a Phosphorcode coleta, usa e protege dados enviados pelo site.",
};

export default function PrivacidadePage() {
  return (
    <main id="top">
      <Navbar />

      <section className="bg-background py-3xl">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Heading as="h1" size="h2">
              Política de Privacidade
            </Heading>
            <p className="mt-sm text-small text-foreground-secondary">
              Última atualização: junho de 2026.
            </p>

            <div className="mt-xl grid gap-lg text-body leading-relaxed text-foreground-secondary">
              <p>
                Esta política explica como a Phosphorcode trata as informações que
                você compartilha conosco ao navegar no site ou ao solicitar uma
                conversa sobre sistemas, integrações e operações de saúde.
              </p>

              <div>
                <Heading as="h2" size="h3" className="mb-sm">
                  Dados que coletamos
                </Heading>
                <p>
                  Coletamos apenas os dados que você nos envia de forma voluntária no
                  formulário de contato, como nome, empresa, email, número, quantidade
                  de funcionários e a descrição do contexto técnico ou operacional.
                </p>
              </div>

              <div>
                <Heading as="h2" size="h3" className="mb-sm">
                  Como usamos
                </Heading>
                <p>
                  Usamos esses dados exclusivamente para responder seu contato,
                  entender sistemas, riscos, integrações e prioridades, e conduzir uma
                  proposta quando fizer sentido. Não vendemos nem alugamos suas
                  informações.
                </p>
              </div>

              <div>
                <Heading as="h2" size="h3" className="mb-sm">
                  Compartilhamento
                </Heading>
                <p>
                  Seus dados podem ser processados em ferramentas de email e gestão
                  que utilizamos no atendimento, sempre com a finalidade de conduzir a
                  conversa comercial. Não há compartilhamento para fins de publicidade
                  de terceiros.
                </p>
              </div>

              <div>
                <Heading as="h2" size="h3" className="mb-sm">
                  Segurança
                </Heading>
                <p>
                  Adotamos medidas técnicas e organizacionais razoáveis para proteger
                  suas informações contra acesso não autorizado, perda ou alteração.
                </p>
              </div>

              <div>
                <Heading as="h2" size="h3" className="mb-sm">
                  Seus direitos
                </Heading>
                <p>
                  Você pode solicitar a qualquer momento o acesso, a correção ou a
                  exclusão dos seus dados. Para isso, envie um pedido para o email
                  abaixo.
                </p>
              </div>

              <div>
                <Heading as="h2" size="h3" className="mb-sm">
                  Contato
                </Heading>
                <p>
                  Dúvidas sobre esta política podem ser enviadas para{" "}
                  <a
                    href={`mailto:${siteContent.brand.contactEmail}`}
                    className="font-medium text-brand-primary hover:underline"
                  >
                    {siteContent.brand.contactEmail}
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
