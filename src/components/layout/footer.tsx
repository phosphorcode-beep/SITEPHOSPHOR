import { Instagram, Mail, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { TextHoverEffect, FooterBackgroundGradient } from "@/components/ui/hover-footer";
import { Wordmark } from "@/components/ui/wordmark";
import { siteContent } from "@/content/site-content";

const linkClass =
  "flex min-w-0 items-center gap-sm break-words text-small text-foreground-inverse/70 transition-colors hover:text-brand-accent";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border/12 text-foreground-inverse">
      <FooterBackgroundGradient />

      <Container className="relative z-10 py-lg sm:py-xl">
        <div className="grid grid-cols-2 gap-x-md gap-y-lg pb-lg sm:pb-xl lg:grid-cols-4 [&>*]:min-w-0">
          {/* Marca */}
          <div className="col-span-2 flex flex-col gap-md sm:col-span-1">
            <Wordmark className="text-2xl" />
            <p className="text-small text-foreground-inverse/65 sm:max-w-xs">
              {siteContent.brand.tagline}
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="mb-md font-secondary text-caption font-semibold uppercase tracking-widest text-brand-accent">
              Navegação
            </h4>
            <ul className="grid gap-sm">
              {siteContent.footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-small text-foreground-inverse/70 transition-colors hover:text-brand-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="mb-md font-secondary text-caption font-semibold uppercase tracking-widest text-brand-accent">
              Contato
            </h4>
            <ul className="grid gap-sm">
              <li>
                <a href="https://wa.me/5561982473645" target="_blank" rel="noopener noreferrer" className={linkClass}>
                  <MessageCircle className="shrink-0 text-brand-accent" size={16} aria-hidden />
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${siteContent.brand.contactEmail}`} className={`${linkClass} break-all`}>
                  <Mail className="shrink-0 text-brand-accent" size={16} aria-hidden />
                  {siteContent.brand.contactEmail}
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/phosphor.code"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  <Instagram className="shrink-0 text-brand-accent" size={16} aria-hidden />
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-md font-secondary text-caption font-semibold uppercase tracking-widest text-brand-accent">
              Legal
            </h4>
            <ul className="grid gap-sm">
              <li>
                <a href="/privacidade" className="text-small text-foreground-inverse/70 transition-colors hover:text-brand-accent">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="/termos" className="text-small text-foreground-inverse/70 transition-colors hover:text-brand-accent">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-t border-foreground-inverse/12" />

        <div className="flex items-center justify-center pt-lg">
          <p className="font-secondary text-caption text-foreground-inverse/45">
            © {year} {siteContent.brand.domain} · Todos os direitos reservados.
          </p>
        </div>
      </Container>

      {/* Wordmark gigante com revelação no hover */}
      <div className="relative z-10 -mb-6 -mt-12 hidden h-[12rem] items-center lg:flex">
        <TextHoverEffect text="phosphorcode" />
      </div>
    </footer>
  );
}
