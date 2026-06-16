import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteContent } from "@/content/site-content";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/15 bg-background/95 backdrop-blur">
      <Container className="flex min-h-16 items-center justify-between gap-lg">
        <a
          className="flex items-center shrink-0"
          href="#top"
          aria-label={`${siteContent.brand.name} — página inicial`}
        >
          <Image src="/brand/logo.svg" alt={siteContent.brand.name} width={198} height={40} priority />
        </a>

        <nav
          className="hidden items-center gap-lg font-secondary text-caption font-semibold uppercase text-foreground-secondary lg:flex"
          aria-label="Navegação principal"
        >
          {siteContent.nav.map((item) => (
            <a
              className="transition-colors hover:text-foreground-primary focus-visible:text-foreground-primary"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-md">
          <ButtonLink href="#contato" className="hidden sm:inline-flex">
            Falar com a Phosphorcode
            <ArrowRight aria-hidden size={16} />
          </ButtonLink>
          <ButtonLink href="#contato" className="sm:hidden">
            <ArrowRight aria-hidden size={16} />
            <span className="sr-only">Contato</span>
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}
