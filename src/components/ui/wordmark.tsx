import { cn } from "@/lib/utils";

/* Wordmark da marca: símbolo fiel (quadrado ivory + "p" + barra verde)
   como SVG, e "phosphorcode" em HTML (fonte do site, sem sobreposição).
   O tamanho é controlado pela classe de `text-*` em className. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex select-none items-center gap-[0.4em] font-primary text-xl font-bold leading-none tracking-tight",
        className,
      )}
      aria-label="Phosphorcode"
    >
      <svg
        viewBox="0 0 52 52"
        className="h-[1.4em] w-[1.4em] shrink-0"
        aria-hidden
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="52" height="52" rx="14" fill="#F2F1E7" />
        <text
          x="14"
          y="37"
          fill="#0E100B"
          fontFamily="Arial, sans-serif"
          fontSize="34"
          fontWeight="700"
        >
          p
        </text>
        <rect x="34" y="13" width="10" height="26" rx="5" fill="#96D26E" />
      </svg>
      <span className="text-foreground-inverse">
        phosphor<span className="text-brand-accent">code</span>
      </span>
    </span>
  );
}
