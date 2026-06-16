import Image from "next/image";
import { Container } from "@/components/ui/container";
import { siteContent } from "@/content/site-content";

export function Footer() {
  return (
    <footer className="border-t border-border/15 bg-surface py-xl" id="footer">
      <Container className="grid gap-lg md:grid-cols-[1fr_auto] md:items-center">
        <div className="grid gap-sm">
          <Image src="/brand/logo.svg" alt={siteContent.brand.name} width={198} height={40} />
          <p className="max-w-xs text-small text-foreground-secondary">
            {siteContent.brand.tagline}
          </p>
          <a
            href={`mailto:${siteContent.brand.contactEmail}`}
            className="text-caption text-foreground-secondary transition-colors hover:text-foreground-primary"
          >
            {siteContent.brand.contactEmail}
          </a>
        </div>

        <nav
          className="flex flex-wrap gap-md font-secondary text-caption font-semibold uppercase text-foreground-secondary"
          aria-label="Links do rodapé"
        >
          {siteContent.footerLinks.map((link) => (
            <a
              className="transition-colors hover:text-foreground-primary focus-visible:text-foreground-primary"
              href={link.href}
              key={link.label}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </Container>

      <Container className="mt-lg border-t border-border/10 pt-lg">
        <p className="font-secondary text-caption text-foreground-secondary/60">
          © {new Date().getFullYear()} {siteContent.brand.domain} · Todos os direitos reservados.
        </p>
      </Container>
    </footer>
  );
}
