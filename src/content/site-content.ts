import {
  BarChart3,
  Gauge,
  Layers3,
  LockKeyhole,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

export const siteContent = {
  brand: {
    name: "Phosphor",
    tagline: "Placeholder para tagline oficial da marca.",
    toneOfVoice: "Moderno, premium, minimalista, tecnologico e confiavel.",
    contactEmail: "contato@phosphor.example",
  },
  nav: [
    { label: "Beneficios", href: "#beneficios" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Recursos", href: "#recursos" },
    { label: "Planos", href: "#planos" },
    { label: "FAQ", href: "#faq" },
  ],
  hero: {
    eyebrow: "Sistema pronto para receber brandbook",
    headline: "Transforme uma ideia digital em uma presenca pronta para vender",
    subheadline:
      "Uma landing page SaaS B2B com design system, componentes reutilizaveis e conteudo estruturado para aplicar a identidade oficial da marca sem refazer o projeto.",
    primaryCta: "Quero captar leads",
    secondaryCta: "Ver planos",
  },
  benefits: [
    {
      icon: Rocket,
      title: "Lancamento rapido",
      description: "Base pronta para apresentar produto, captar interesse e validar oferta.",
    },
    {
      icon: ShieldCheck,
      title: "Visual consistente",
      description: "Tokens centralizam cores, fontes, raios, sombras e espacamentos.",
    },
    {
      icon: Workflow,
      title: "Fluxo claro",
      description: "Secoes pensadas para explicar valor, reduzir duvidas e conduzir ao CTA.",
    },
    {
      icon: Layers3,
      title: "Componentes base",
      description: "UI reutilizavel para evoluir o site sem duplicar estilos.",
    },
  ],
  steps: [
    {
      title: "Defina a oferta",
      description: "Troque os textos centralizados pelo posicionamento oficial do negocio.",
    },
    {
      title: "Aplique o brandbook",
      description: "Atualize tokens, fontes, logos e imagens nos arquivos de tema e marca.",
    },
    {
      title: "Publique e otimize",
      description: "Valide build, responsividade e clareza dos CTAs antes da campanha.",
    },
  ],
  testimonials: [
    {
      quote:
        "A estrutura deixou nossa apresentacao comercial muito mais clara e facil de ajustar com a marca final.",
      author: "Marina Costa",
      role: "Head de Marketing, NovaStack",
    },
    {
      quote:
        "Conseguimos trocar tokens e copy sem mexer na arquitetura da pagina. Foi uma base muito solida.",
      author: "Rafael Torres",
      role: "Founder, Atlas Ops",
    },
  ],
  partnerLogos: ["North Labs", "Vero Capital", "Orbita", "Lineal"],
  features: [
    {
      icon: BarChart3,
      title: "Captura de demanda",
      description: "CTAs, planos e FAQ organizados para gerar conversoes qualificadas.",
    },
    {
      icon: LockKeyhole,
      title: "Padrao escalavel",
      description: "Tokens e componentes reduzem retrabalho quando a identidade evoluir.",
    },
    {
      icon: Gauge,
      title: "Performance simples",
      description: "Sem dependencia de dados externos ou bibliotecas visuais desnecessarias.",
    },
    {
      icon: Sparkles,
      title: "Pronto para marca",
      description: "Assets, conteudo e tema preparados para receber guias oficiais.",
    },
  ],
  plans: [
    {
      name: "Basico",
      price: "R$ 990",
      description: "Para validar uma oferta com presenca digital profissional.",
      features: ["Landing page responsiva", "Design tokens base", "CTA e FAQ", "Conteudo editavel"],
      cta: "Comecar basico",
    },
    {
      name: "Pro",
      price: "R$ 2.400",
      description: "Para equipes que precisam de uma base comercial mais completa.",
      features: ["Tudo do Basico", "Componentes reutilizaveis", "Secao de planos", "Preparacao para brandbook"],
      cta: "Escolher Pro",
      recommended: true,
    },
    {
      name: "Enterprise",
      price: "Sob consulta",
      description: "Para marcas que precisam conectar design system e crescimento.",
      features: ["Tudo do Pro", "Arquitetura multi-pagina", "Suporte a tema escuro", "Evolucao de componentes"],
      cta: "Falar com vendas",
    },
  ],
  faqs: [
    {
      question: "Posso aplicar meu brandbook depois?",
      answer: "Sim. As principais decisoes visuais ficam centralizadas em tokens e componentes base.",
    },
    {
      question: "O conteudo fica facil de trocar?",
      answer: "Sim. A copy principal esta em um arquivo de conteudo para editar tom de voz e mensagens.",
    },
    {
      question: "O site ja nasce responsivo?",
      answer: "Sim. A interface foi estruturada para mobile, tablet e desktop desde a primeira versao.",
    },
    {
      question: "Preciso de dados externos para rodar?",
      answer: "Nao. A pagina funciona com conteudo local e pode evoluir para integracoes depois.",
    },
    {
      question: "Onde entram logo e favicon?",
      answer: "A pasta public/brand possui placeholders para logo, logo escuro, simbolo e favicon.",
    },
    {
      question: "O layout pode virar um site completo?",
      answer: "Sim. A base de componentes permite criar novas paginas mantendo a consistencia visual.",
    },
  ],
  finalCta: {
    headline: "Pronto para transformar atencao em oportunidade?",
    description: "Use esta base para apresentar a proposta, testar mensagens e aplicar a identidade oficial da marca com rapidez.",
    cta: "Agendar conversa",
  },
  footerLinks: [
    { label: "Politica de privacidade", href: "#" },
    { label: "Termos de uso", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
  ],
};
