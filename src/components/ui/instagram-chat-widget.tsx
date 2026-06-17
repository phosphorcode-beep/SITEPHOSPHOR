"use client";

import { useState } from "react";

const IG_URL = "https://ig.me/m/phosphor.code";
const AVATAR = "https://cdn.jotfor.ms/assets/agent-avatars/avatar_icon_254.png";

const IgIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path d="M12 1c-2.987 0-3.362.019-4.535.067-1.17.054-1.968.237-2.668.51a5.403 5.403 0 0 0-1.95 1.27A5.384 5.384 0 0 0 1.58 4.794c-.272.7-.46 1.501-.513 2.672C1.014 8.64 1 9.014 1 12.002c0 2.987.014 3.362.067 4.535.054 1.171.24 1.97.513 2.669a5.383 5.383 0 0 0 1.266 1.948 5.417 5.417 0 0 0 1.951 1.27c.7.272 1.498.459 2.668.512C8.638 22.99 9.013 23 12 23s3.362-.017 4.535-.064c1.17-.053 1.972-.24 2.671-.512a5.393 5.393 0 0 0 1.948-1.27 5.384 5.384 0 0 0 1.267-1.948c.271-.7.458-1.498.512-2.669.053-1.173.067-1.547.067-4.535 0-2.988-.014-3.362-.067-4.536-.054-1.17-.24-1.972-.512-2.672a5.384 5.384 0 0 0-1.267-1.947 5.392 5.392 0 0 0-1.948-1.27c-.7-.273-1.5-.456-2.671-.51C15.362 1.014 14.987 1 12 1Zm0 1.981c2.937 0 3.284.018 4.444.064 1.072.048 1.657.23 2.045.38.513.2.878.438 1.263.823a3.4 3.4 0 0 1 .822 1.264c.15.387.332.973.38 2.045.054 1.16.065 1.507.065 4.445 0 2.937-.012 3.284-.064 4.444-.05 1.073-.23 1.654-.38 2.042-.2.514-.438.882-.823 1.267-.385.385-.75.623-1.263.822-.388.15-.973.329-2.045.378-1.16.053-1.507.064-4.444.064-2.937 0-3.284-.018-4.444-.064-1.072-.049-1.654-.227-2.041-.378a3.415 3.415 0 0 1-1.267-.822 3.416 3.416 0 0 1-.822-1.267c-.15-.387-.329-.97-.378-2.042-.052-1.16-.064-1.507-.064-4.444 0-2.938.013-3.285.064-4.445.05-1.072.227-1.658.378-2.045.2-.514.437-.879.822-1.264a3.415 3.415 0 0 1 1.267-.822c.387-.15.969-.332 2.041-.38C8.716 2.991 9.063 2.98 12 2.98Zm5.872 1.827a1.321 1.321 0 1 0 .002 2.642 1.321 1.321 0 0 0-.002-2.642ZM12 6.35A5.649 5.649 0 0 0 6.353 12 5.649 5.649 0 1 0 12 6.352Zm0 1.985a3.665 3.665 0 0 1 3.665 3.666 3.665 3.665 0 1 1-7.33 0A3.665 3.665 0 0 1 12 8.336Z" />
  </svg>
);

export function InstagramChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        position: "fixed",
        right: "1.5rem",
        bottom: "4rem",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "center",
        width: 360,
        borderRadius: 30,
      }}
    >
      {/* ── Popup ────────────────────────────────────────────── */}
      <div
        style={{
          width: "100%",
          backgroundColor: "#ffffff",
          borderRadius: "0.375rem",
          fontFamily: "sans-serif",
          paddingBottom: "1rem",
          border: "1px solid #E3E5F5",
          marginBottom: "0.75rem",
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0%)" : "translateY(8px)",
          visibility: open ? "visible" : "hidden",
          transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.35s cubic-bezier(0.4,0,0.2,1)",
          pointerEvents: open ? "auto" : "none",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", padding: "1rem", gap: "1.25rem", position: "relative" }}>
          {/* Avatar */}
          <div style={{ position: "relative", width: "3rem", height: "3rem" }}>
            <img src={AVATAR} alt="Phosphorcode" style={{ width: "2.75rem", height: "2.75rem", borderRadius: "9999px", backgroundColor: "#f8fafc" }} />
            <div style={{ position: "absolute", bottom: 0, right: "-2px", width: "1rem", height: "1rem", backgroundColor: "#fff", borderRadius: "9999px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: "0.75rem", height: "0.75rem", backgroundColor: "#22c55e", borderRadius: "9999px" }} />
            </div>
          </div>

          {/* Info */}
          <div style={{ flexGrow: 1 }}>
            <p style={{ fontWeight: 700, color: "#334155", margin: "0.25rem 0" }}>phosphor.code</p>
            <p style={{ fontWeight: 500, color: "#334155", margin: "0.25rem 0", fontSize: "0.875rem" }}>Online</p>
          </div>

          {/* Fechar */}
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Fechar"
            style={{ position: "absolute", top: 8, right: 8, background: "transparent", border: "none", cursor: "pointer", color: "#334155", fontSize: "1rem", padding: "0.25rem 0.5rem", lineHeight: 1 }}
          >
            ×
          </button>
        </div>

        <div style={{ borderTop: "1px solid #E3E5F5", marginBottom: "0.5rem" }} />

        {/* Mensagem */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: "1.25rem", padding: "1rem" }}>
          <img src={AVATAR} alt="" style={{ width: "2.5rem", height: "2.5rem", borderRadius: "9999px", backgroundColor: "#f8fafc", flexShrink: 0 }} />
          <div style={{ backgroundColor: "#fafafa", borderRadius: "0.375rem", padding: "0.75rem 1rem" }}>
            <p style={{ color: "#334155", margin: "0.25rem 0" }}>Olá! 👋</p>
            <p style={{ color: "#334155", margin: "0.25rem 0" }}>Como posso te ajudar?</p>
          </div>
        </div>

        {/* CTA */}
        <div style={{ padding: "0 1rem" }}>
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.75rem",
              width: "100%",
              height: "3rem",
              borderRadius: "9999px",
              backgroundColor: "#3b82f6",
              color: "#ffffff",
              fontWeight: 500,
              fontSize: "1rem",
              textDecoration: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <IgIcon size={22} />
            Mensagem no Instagram
          </a>
        </div>
      </div>

      {/* ── Botão flutuante ──────────────────────────────────── */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Falar no Instagram"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "3.25rem",
          height: "3.25rem",
          borderRadius: "9999px",
          backgroundColor: "#ffffff",
          color: "#4b5563",
          border: "1px solid #E3E5F5",
          cursor: "pointer",
          boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
          opacity: open ? 0 : 1,
          transform: open ? "scale(0.8)" : "scale(1)",
          transition: "opacity 0.25s ease, transform 0.25s ease",
          pointerEvents: open ? "none" : "auto",
        }}
      >
        <IgIcon size={24} />
      </button>
    </div>
  );
}
