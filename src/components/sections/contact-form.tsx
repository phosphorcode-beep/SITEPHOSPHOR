"use client";

import { useState, type FormEvent } from "react";
import { AnimatedInput } from "@/components/ui/animated-input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FlowButton } from "@/components/ui/flow-button";

const WHATSAPP = "5561982473645";

export function ContactForm() {
  const [fields, setFields] = useState({
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
    funcionarios: "",
    mensagem: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function set(field: keyof typeof fields) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setFields((prev) => ({ ...prev, [field]: e.target.value }));
  }

  function openWhatsAppFallback() {
    const text = [
      `🟢 *Nova mensagem via site Phosphorcode*`,
      ``,
      `👤 *Nome:* ${fields.nome}`,
      `🏢 *Empresa:* ${fields.empresa}`,
      `📧 *E-mail:* ${fields.email}`,
      `📱 *Telefone:* ${fields.telefone}`,
      `👥 *Funcionários:* ${fields.funcionarios}`,
      ``,
      `💬 *O que precisa resolver:*`,
      fields.mensagem,
    ].join("\n");

    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      if (!res.ok) throw new Error("falha no envio");
      setStatus("sent");
    } catch {
      // Se o envio automático falhar, cai no fluxo do WhatsApp
      openWhatsAppFallback();
      setStatus("idle");
    }
  }

  if (status === "sent") {
    return (
      <div
        className="reveal grid gap-sm rounded-brand-lg border border-border/14 bg-background p-lg text-center shadow-brand-sm"
        data-delay="120"
      >
        <p className="text-lg font-semibold text-foreground">Recebemos seu contato.</p>
        <p className="text-sm text-foreground-secondary/80">
          Vamos analisar o contexto e chamar você no WhatsApp informado para avançar com a conversa técnica.
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
        placeholder="Descreva sistemas atuais, integrações críticas, dados sensíveis, documentos, permissões ou fluxos que precisam de mais controle."
        required
        value={fields.mensagem}
        onChange={set("mensagem")}
      />

      <FlowButton
        type="submit"
        text={status === "sending" ? "Enviando..." : "Avaliar minha operação de saúde"}
        className="mt-sm w-full justify-center"
      />

      <p className="text-center text-xs text-foreground-secondary/60">
        Ao enviar, analisamos seu contexto antes de propor qualquer caminho.
      </p>
    </form>
  );
}
