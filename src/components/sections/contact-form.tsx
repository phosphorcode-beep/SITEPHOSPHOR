"use client";

import { useState, type FormEvent } from "react";
import { AnimatedInput } from "@/components/ui/animated-input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FlowButton } from "@/components/ui/flow-button";

/**
 * WEBHOOK_URL: cole aqui a URL do webhook Make/Zapier.
 * O webhook recebe os dados e aciona o agente para enviar DM no Instagram.
 * Exemplo Make: https://hook.eu2.make.com/xxxxxxxxxxxx
 */
const WEBHOOK_URL = "https://hook.us2.make.com/bo36bfbgm04avtwyb2fpiknkbeqeenub";

export function ContactForm() {
  const [fields, setFields] = useState({
    nome: "",
    empresa: "",
    instagram: "",
    email: "",
    telefone: "",
    funcionarios: "",
    mensagem: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  function set(field: keyof typeof fields) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setFields((prev) => ({ ...prev, [field]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const payload = {
      ...fields,
      instagram: fields.instagram.replace(/^@/, ""),
      origem: "site-phosphorcode",
      timestamp: new Date().toISOString(),
    };

    try {
      if (WEBHOOK_URL) {
        await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    const handle = fields.instagram.replace(/^@/, "");
    return (
      <div className="flex flex-col items-start gap-lg rounded-brand-lg border border-border/14 bg-background p-lg shadow-brand-sm">
        {/* Check */}
        <div className="flex size-12 items-center justify-center rounded-xl bg-brand-primary/10">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="size-6 text-brand-primary" aria-hidden>
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div>
          <p className="text-h3 font-bold text-foreground-primary">Informações recebidas!</p>
          <p className="mt-sm text-small text-foreground-secondary">
            Agora mande qualquer mensagem para a gente no Instagram — nosso agente já vai ter tudo sobre você e responde na hora.
          </p>
        </div>

        {/* CTA principal */}
        <a
          href="https://ig.me/m/phosphor.code"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-sm rounded-full bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] px-lg py-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden>
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          Abrir Direct — @phosphor.code
        </a>

        <p className="text-xs text-foreground-secondary/50">
          Mande "Oi" e nosso agente já responde com tudo pronto para <strong>@{handle}</strong>.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="reveal grid gap-md rounded-brand-lg border border-border/14 bg-background p-lg shadow-brand-sm"
      aria-label="Formulário de contato"
      data-delay="120"
    >
      <AnimatedInput
        label="Nome"
        name="nome"
        required
        autoComplete="name"
        value={fields.nome}
        onChange={set("nome")}
      />

      <AnimatedInput
        label="Empresa"
        name="empresa"
        required
        autoComplete="organization"
        value={fields.empresa}
        onChange={set("empresa")}
      />

      <AnimatedInput
        label="Seu @ do Instagram"
        name="instagram"
        required
        placeholder="@seuusuario"
        value={fields.instagram}
        onChange={set("instagram")}
      />

      <AnimatedInput
        label="E-mail"
        name="email"
        type="email"
        required
        autoComplete="email"
        value={fields.email}
        onChange={set("email")}
      />

      <AnimatedInput
        label="Telefone / WhatsApp"
        name="telefone"
        type="tel"
        required
        autoComplete="tel"
        value={fields.telefone}
        onChange={set("telefone")}
      />

      <Select
        label="Quantidade de funcionários"
        name="funcionarios"
        required
        value={fields.funcionarios}
        onChange={set("funcionarios")}
        options={[
          { value: "1-10",   label: "1 a 10" },
          { value: "11-50",  label: "11 a 50" },
          { value: "51-200", label: "51 a 200" },
          { value: "200+",   label: "Mais de 200" },
        ]}
      />

      <Textarea
        label="O que você precisa resolver?"
        name="mensagem"
        placeholder="Descreva o que está travando sua operação: planilhas soltas, sistemas que não conversam, retrabalho, falta de indicadores..."
        required
        value={fields.mensagem}
        onChange={set("mensagem")}
      />

      <FlowButton
        type="submit"
        text={status === "sending" ? "Enviando..." : "Enviar — nosso agente entra em contato"}
        className="mt-sm w-full justify-center"
      />

      {status === "error" && (
        <p className="text-center text-xs text-red-500">
          Erro ao enviar. Tente novamente ou fale pelo Instagram.
        </p>
      )}

      <p className="text-center text-xs text-foreground-secondary/60">
        Após o envio, nosso agente entra em contato pelo seu Instagram com todas as informações.
      </p>
    </form>
  );
}
