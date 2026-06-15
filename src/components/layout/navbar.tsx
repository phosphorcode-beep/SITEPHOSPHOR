import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteContent } from "@/content/site-content";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <Container className="flex min-h-16 items-center justify-between gap-lg">
        <a className="flex items-center" href="#top" aria-label={`${siteContent.brand.name} inicio`}>
          <Image src="/brand/logo.svg" alt={siteContent.brand.name} width={152} height={36} priority />
        </a>
        <nav className="hidden items-center gap-lg text-small font-medium text-foreground-secondary lg:flex" aria-label="Navegacao principal">
          {siteContent.nav.map((item) => (
            <a className="transition-colors hover:text-foreground-primary" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div>
          <ButtonLink href="#cta-final">
            <span className="hidden sm:inline">Comecar</span>
            <ArrowRight aria-hidden size={16} />
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}
