import Image from "next/image";
import { Container } from "@/components/ui/container";
import { siteContent } from "@/content/site-content";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-xl">
      <Container className="grid gap-lg md:grid-cols-[1fr_auto] md:items-center">
        <div className="grid gap-sm">
          <Image src="/brand/logo.svg" alt={siteContent.brand.name} width={152} height={36} />
          <p className="max-w-xl text-small text-foreground-secondary">{siteContent.brand.tagline}</p>
          <p className="text-caption text-foreground-secondary">{siteContent.brand.contactEmail}</p>
        </div>
        <nav className="flex flex-wrap gap-md text-small text-foreground-secondary" aria-label="Links do rodape">
          {siteContent.footerLinks.map((link) => (
            <a className="transition-colors hover:text-foreground-primary" href={link.href} key={link.label}>
              {link.label}
            </a>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
