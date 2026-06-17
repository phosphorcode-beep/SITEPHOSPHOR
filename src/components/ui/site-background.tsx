/* Fundo global: textura de ruído + grid técnico + iluminação radial.
   Fixo atrás de todo o conteúdo (o hero tem o seu próprio fundo por cima). */
export function SiteBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#050505]"
    >
      {/* 1. Ruído ultra-suave (dithering) */}
      <div className="absolute inset-0 z-30 opacity-[0.018] mix-blend-screen">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
          preserveAspectRatio="none"
        >
          <filter id="microGrain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.99"
              numOctaves="2"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#microGrain)" />
        </svg>
      </div>

      {/* 2. Grid técnico suavizado */}
      <div
        className="absolute inset-0 z-10 opacity-[0.012]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "120px 120px",
        }}
      />

      {/* 3. Iluminação radial em três camadas */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, #161616 0%, #101010 25%, #080808 60%, #050505 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, transparent 10%, #050505 90%)",
          }}
        />
        <div className="absolute left-0 top-0 h-48 w-full bg-gradient-to-b from-stone-400/5 to-transparent" />
      </div>
    </div>
  );
}
