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
const WEBHOOK_URL = "";

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
    return (
      <div className="reveal flex flex-col items-start gap-lg rounded-brand-lg border border-border/14 bg-background p-lg shadow-brand-sm" data-delay="120">
        <div className="flex size-12 items-center justify-center rounded-xl bg-brand-primary/10">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="size-6 text-brand-primary" aria-hidden>
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <p className="text-h3 font-bold text-foreground-primary">Recebemos suas informações!</p>
          <p className="mt-sm text-small text-foreground-secondary">
            Nosso agente vai entrar em contato com{" "}
            <strong>@{fields.instagram.replace(/^@/, "")}</strong> pelo Instagram em breve com tudo que você precisa saber.
          </p>
        </div>
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
