import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { siteContent } from "@/content/site-content";

export function FinalCta() {
  return (
    <Section className="bg-brand-secondary text-foreground-inverse" id="cta-final">
      <div className="grid gap-lg lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="max-w-3xl">
          <Heading as="h2" size="h2" className="text-foreground-inverse">
            {siteContent.contact.title}
          </Heading>
          <p className="mt-md text-body text-foreground-inverse/80">
            {siteContent.contact.description}
          </p>
        </div>
        <ButtonLink href="#contato" variant="primary">
          {siteContent.contact.cta}
          <ArrowRight aria-hidden size={18} />
        </ButtonLink>
      </div>
    </Section>
  );
}
