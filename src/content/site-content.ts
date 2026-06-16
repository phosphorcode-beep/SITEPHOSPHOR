import {
  Activity,
  ArrowRightLeft,
  BarChart2,
  Blocks,
  Code2,
  DatabaseBackup,
  FileSearch,
  Globe,
  LayoutDashboard,
  MonitorSmartphone,
  ServerCog,
  ShieldCheck,
  ShoppingCart,
  Stethoscope,
  Zap,
} from "lucide-react";

export const siteContent = {
  brand: {
    name: "Phosphor.code",
    tagline: "Software para operação real.",
    contactEmail: "contato@phosphorcode.com.br",
    domain: "phosphorcode.com.br",
  },

  nav: [
    { label: "Home", href: "#top" },
    { label: "Parceiros", href: "#parceiros" },
    { label: "Método", href: "#metodo" },
    { label: "Formulário", href: "#contato" },
    { label: "Contato", href: "#footer" },
  ],

  hero: {
    // TODO: Aguardando promessa central definida pelo cliente.
    eyebrow: "Engenharia de software · Varejo & Saúde",
    headline: "TODO: Promessa central da Phosphor.code",
    subheadline:
      "Desenvolvemos softwares com IA sob medida para empresas em crescimento.",
    primaryCta: "Ver soluções",
    secondaryCta: "Entre em contato",
    microcopy: "Diagnóstico · Arquitetura · MVP · Integrações · Evolução mensal",
  },

  metrics: [
    { label: "Foco", value: "Varejo & Saúde" },
    { label: "Método", value: "Diagnóstico → evolução" },
    { label: "Base", value: "Segurança desde o início" },
  ],

  servicos: {
    eyebrow: "Serviços",
    title: "O que a Phosphor.code entrega",
    description:
      "Sistemas, sites, plataformas e integrações pensados com arquitetura técnica, revisão e continuidade.",
    cards: [
      {
        icon: ServerCog,
        title: "Sistemas internos",
        description:
          "Plataformas administrativas, dashboards, portais e ferramentas operacionais para o fluxo real da empresa.",
      },
      {
        icon: MonitorSmartphone,
        title: "Sites e plataformas",
        description:
          "Sites institucionais, portais, áreas logadas e experiências digitais conectadas à operação.",
      },
      {
        icon: ArrowRightLeft,
        title: "Integrações",
        description:
          "Conectamos ERP, PDV, e-commerce, agenda, CRM, gateways, automações e sistemas legados.",
      },
      {
        icon: LayoutDashboard,
        title: "Dashboards e dados",
        description:
          "Indicadores, relatórios e painéis para quem precisa decidir com dados confiáveis.",
      },
    ],
  },

  solucoes: {
    eyebrow: "Soluções",
    title: "Para varejo e saúde",
    description:
      "Verticais de atuação com foco em processo, integração e resultado operacional.",
    verticals: [
      {
        id: "varejo",
        icon: ShoppingCart,
        eyebrow: "Para varejo",
        title: "Menos planilha, mais controle de operação.",
        description:
          "Criamos sistemas para redes, lojas e operações digitais que precisam controlar pedidos, estoque, vendas, clientes e integrações com mais precisão.",
        points: [
          "Sistemas de pedidos",
          "Controle de estoque",
          "Integração com ERP e PDV",
          "CRM e histórico de clientes",
          "E-commerce e portais B2B/B2C",
          "Dashboards de vendas e ruptura",
        ],
      },
      {
        id: "saude",
        icon: Stethoscope,
        eyebrow: "Para saúde",
        title: "Atendimento digital com segurança e rastreabilidade.",
        description:
          "Desenvolvemos sistemas para clínicas, consultórios, laboratórios e operações com dados sensíveis, com atenção a acesso, registros, segurança e LGPD.",
        points: [
          "Sites para clínicas",
          "Agendamento online",
          "Portal do paciente",
          "Sistemas administrativos",
          "Automação de atendimento",
          "Controle de acesso e dados sensíveis",
        ],
      },
    ],
  },

  metodo: {
    eyebrow: "Método",
    // TODO: Aguardando nomes reais das etapas definidos pelo cliente.
    title: "Como trabalhamos",
    description:
      "Um processo estruturado que reduz risco e entrega sistemas que sobrevivem ao uso real.",
    steps: [
      {
        number: "01",
        icon: FileSearch,
        // TODO: Nome real da etapa a definir com o cliente.
        name: "TODO : Etapa 1",
        description: "Diagnóstico técnico e operacional. Mapeamos processos, gargalos, sistemas existentes e oportunidades.",
      },
      {
        number: "02",
        icon: Code2,
        name: "TODO : Etapa 2",
        description: "Arquitetura e desenvolvimento. Desenhamos fluxos, dados, integrações e construímos o MVP.",
      },
      {
        number: "03",
        icon: Zap,
        name: "TODO : Etapa 3",
        description: "Implantação e testes. Validamos em ambiente real antes de colocar em produção.",
      },
      {
        number: "04",
        icon: Activity,
        name: "TODO : Etapa 4",
        description: "Evolução contínua. Monitoramos, corrigimos, documentamos e evoluímos o sistema após a entrega.",
      },
    ],
    note: "TODO : Projeto bom não termina no deploy. Aguardando frase de apoio do cliente.",
  },

  tech: {
    eyebrow: "Tecnologia",
    // TODO: Conteúdo de tech stack a definir com o cliente.
    title: "Stack e diferenciais técnicos",
    description: "TODO : Conteúdo desta seção aguardando definição com o cliente.",
    items: [
      {
        icon: Globe,
        title: "Frontend moderno",
        description: "TODO : Descrever stack de frontend utilizada.",
      },
      {
        icon: ServerCog,
        title: "Backend robusto",
        description: "TODO : Descrever stack de backend e APIs.",
      },
      {
        icon: DatabaseBackup,
        title: "Banco e infraestrutura",
        description: "TODO : Descrever banco de dados e infraestrutura de deploy.",
      },
      {
        icon: ShieldCheck,
        title: "Segurança e LGPD",
        description: "Autenticação segura, permissões por perfil, logs, backups e conformidade com LGPD.",
      },
      {
        icon: Blocks,
        title: "Integrações e APIs",
        description: "TODO : Descrever principais integrações e APIs utilizadas.",
      },
      {
        icon: BarChart2,
        title: "Observabilidade",
        description: "TODO : Monitoramento, métricas e alertas.",
      },
    ],
  },

  parceiros: {
    eyebrow: "Parceiros",
    // TODO: Logos e depoimentos a fornecer pelo cliente.
    title: "Quem confia na Phosphor.code",
    description: "TODO : Logos de parceiros e depoimentos a serem fornecidos pelo cliente.",
    // Placeholder logos
    logos: [
      { name: "TODO : Parceiro 1", placeholder: true },
      { name: "TODO : Parceiro 2", placeholder: true },
      { name: "TODO : Parceiro 3", placeholder: true },
      { name: "TODO : Parceiro 4", placeholder: true },
      { name: "TODO : Parceiro 5", placeholder: true },
      { name: "TODO : Parceiro 6", placeholder: true },
    ],
    testimonials: [
      {
        quote: "TODO : Depoimento a ser fornecido pelo cliente.",
        author: "TODO : Nome",
        role: "TODO : Cargo, Empresa",
        placeholder: true,
      },
    ],
  },

  cerhole: {
    // ⚠ Aguardando definição de conteúdo pelo cliente.
    title: "Cerhole",
    pending: true,
    note: "⚠ O cliente ainda não definiu o que é esta seção. Pode ser produto, marca ou metodologia.",
  },

  contact: {
    eyebrow: "Contato",
    title: "Fale com a Phosphor.code",
    description:
      "Conte o cenário da sua empresa. Avaliamos processos, sistemas, gargalos e possibilidades de evolução técnica.",
    cta: "Enviar mensagem",
    // TODO: Definir integração de envio (e-mail, webhook, CRM).
    formNote: "TODO : Definir destino do formulário: e-mail, webhook ou CRM.",
  },

  footerLinks: [
    { label: "Home", href: "#top" },
    { label: "Serviços", href: "#servicos" },
    { label: "Soluções", href: "#solucoes" },
    { label: "Método", href: "#metodo" },
    { label: "Contato", href: "#contato" },
  ],
};
