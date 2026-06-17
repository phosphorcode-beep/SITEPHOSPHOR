"use client";

/**
 * JOTFORM_URL: cole aqui a URL do seu form quando criar no Jotform.
 * Ex: "https://form.jotform.com/251234567890"
 * Enquanto vazio, exibe o CTA do Instagram.
 */
const JOTFORM_URL = "https://agent.jotform.com/019ed7c521247d6498ccaac2c7704876e720";

const INSTAGRAM_HANDLE = "phosphorcode";
const INSTAGRAM_DM_URL = `https://ig.me/m/${INSTAGRAM_HANDLE}`;

export function ContactForm() {
  if (JOTFORM_URL) {
    return (
      <div className="reveal overflow-hidden rounded-brand-lg border border-border/14 shadow-brand-sm" data-delay="120">
        <iframe
          src={JOTFORM_URL}
          title="Formulário de contato"
          width="100%"
          height="600"
          frameBorder="0"
          scrolling="no"
          allow="geolocation; microphone; camera"
          className="block w-full"
          style={{ minHeight: 520 }}
        />
      </div>
    );
  }

  return (
    <div
      className="reveal flex flex-col items-start gap-lg rounded-brand-lg border border-border/14 bg-background p-lg shadow-brand-sm"
      data-delay="120"
    >
      <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888]">
        <svg viewBox="0 0 24 24" fill="white" className="size-6" aria-hidden>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      </div>

      <div>
        <p className="text-caption font-semibold uppercase tracking-widest text-brand-primary">
          Atendimento via Instagram
        </p>
        <h3 className="mt-xs text-h3 font-bold text-foreground-primary">
          Fale com a gente pelo Direct
        </h3>
        <p className="mt-sm text-small text-foreground-secondary">
          Clique abaixo para abrir o Direct do Instagram da Phosphorcode. Respondemos rápido e já
          vamos entender o que você precisa antes de qualquer proposta.
        </p>
      </div>

      <a
        href={INSTAGRAM_DM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-sm rounded-full bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] px-lg py-sm text-small font-semibold text-white transition-opacity hover:opacity-90"
      >
        Abrir Direct — @{INSTAGRAM_HANDLE}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="size-4" aria-hidden>
          <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>

      <p className="text-xs text-foreground-secondary/50">
        Em breve: formulário integrado com automação via Jotform.
      </p>
    </div>
  );
}
