"use client";

import { useState, type FormEvent } from "react";
import { AnimatedInput } from "@/components/ui/animated-input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FlowButton } from "@/components/ui/flow-button";

const AGENT_URL = "https://agent.jotform.com/019ed7c521247d6498ccaac2c7704876e720";

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

  function set(field: keyof typeof fields) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setFields((prev) => ({ ...prev, [field]: e.target.value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const msg = [
      `Nova solicitação via site Phosphorcode`,
      ``,
      `Nome: ${fields.nome}`,
      `Empresa: ${fields.empresa}`,
      `Instagram: @${fields.instagram.replace(/^@/, "")}`,
      `E-mail: ${fields.email}`,
      `Telefone: ${fields.telefone}`,
      `Funcionários: ${fields.funcionarios}`,
      ``,
      `O que precisa resolver:`,
      fields.mensagem,
    ].join("\n");

    const url = `${AGENT_URL}?startMessage=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
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
        text="Enviar — nosso agente entra em contato"
        className="mt-sm w-full justify-center"
      />

      <p className="text-center text-xs text-foreground-secondary/60">
        Ao enviar, nosso agente recebe suas informações e entra em contato pelo seu Instagram.
      </p>
    </form>
  );
}
