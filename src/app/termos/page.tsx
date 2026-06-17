import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { siteContent } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Termos de Uso · Phosphorcode",
  description: "Condições de uso do site e dos serviços da Phosphorcode.",
};

export default function TermosPage() {
  return (
    <main id="top">
      <Navbar />

      <section className="bg-background py-3xl">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Heading as="h1" size="h2">
              Termos de Uso
            </Heading>
            <p className="mt-sm text-small text-foreground-secondary">
              Última atualização: junho de 2026.
            </p>

            <div className="mt-xl grid gap-lg text-body leading-relaxed text-foreground-secondary">
              <p>
                Ao acessar este site você concorda com os termos descritos abaixo.
                Caso não concorde, recomendamos que não utilize o site.
              </p>

              <div>
                <Heading as="h2" size="h3" className="mb-sm">
                  Uso do site
                </Heading>
                <p>
                  O conteúdo deste site tem caráter informativo sobre os serviços da
                  Phosphorcode. Você se compromete a utilizar o site de forma lícita e
                  a não tentar comprometer sua segurança ou disponibilidade.
                </p>
              </div>

              <div>
                <Heading as="h2" size="h3" className="mb-sm">
                  Propriedade intelectual
                </Heading>
                <p>
                  A marca, os textos, o layout e os demais elementos do site pertencem
                  à Phosphorcode. A reprodução sem autorização prévia não é permitida.
                </p>
              </div>

              <div>
                <Heading as="h2" size="h3" className="mb-sm">
                  Serviços e propostas
                </Heading>
                <p>
                  As informações sobre serviços têm caráter geral. Qualquer escopo,
                  prazo ou valor é definido apenas em proposta formal, após o
                  entendimento da sua necessidade.
                </p>
              </div>

              <div>
                <Heading as="h2" size="h3" className="mb-sm">
                  Limitação de responsabilidade
                </Heading>
                <p>
                  A Phosphorcode não se responsabiliza por decisões tomadas com base
                  apenas no conteúdo informativo do site, sem uma análise específica do
                  seu caso.
                </p>
              </div>

              <div>
                <Heading as="h2" size="h3" className="mb-sm">
                  Alterações
                </Heading>
                <p>
                  Estes termos podem ser atualizados a qualquer momento. A versão
                  vigente é sempre a publicada nesta página.
                </p>
              </div>

              <div>
                <Heading as="h2" size="h3" className="mb-sm">
                  Contato
                </Heading>
                <p>
                  Dúvidas sobre estes termos podem ser enviadas para{" "}
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
