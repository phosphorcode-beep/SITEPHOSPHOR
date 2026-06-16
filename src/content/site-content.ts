import {
  Activity,
  AlertCircle,
  ArrowRightLeft,
  BarChart2,
  Code2,
  DatabaseBackup,
  FileSearch,
  FileText,
  LayoutDashboard,
  LockKeyhole,
  MonitorSmartphone,
  RefreshCcw,
  ServerCog,
  ShieldCheck,
  ShoppingCart,
  Stethoscope,
  Unlink,
} from "lucide-react";

export const siteContent = {
  brand: {
    name: "Phosphorcode",
    tagline: "Software para operação real.",
    toneOfVoice: "Sênior, técnica, discreta, confiável e direta.",
    contactEmail: "contato@phosphorcode.com.br",
    domain: "phosphorcode.com.br",
  },
  nav: [
    { label: "Soluções", href: "#solucoes" },
    { label: "Varejo", href: "#varejo" },
    { label: "Saúde", href: "#saude" },
    { label: "Processo", href: "#processo" },
    { label: "Segurança", href: "#seguranca" },
    { label: "Contato", href: "#contato" },
  ],
  hero: {
    eyebrow: "Engenharia de software · Varejo & Saúde",
    headline: "Sistemas que seguram a sua operação.",
    subheadline:
      "Software sob medida para varejo e saúde — feito para vender, atender e operar com mais controle, integração e segurança.",
    primaryCta: "Falar com a Phosphorcode",
    secondaryCta: "Ver soluções",
    microcopy: "Diagnóstico · Arquitetura · MVP · Integrações · Evolução mensal",
  },
  metrics: [
    { label: "Foco", value: "Varejo & Saúde" },
    { label: "Método", value: "Diagnóstico → evolução" },
    { label: "Base", value: "Segurança desde o início" },
  ],
  problem: {
    title: "Quando a operação cresce, o improviso começa a custar caro.",
    description:
      "Planilhas desconectadas, retrabalho, sistemas que não conversam e decisões sem visibilidade travam empresas que dependem de operação diária. A Phosphorcode transforma processos confusos em sistemas confiáveis, integrados e rastreáveis.",
    pains: [
      { icon: FileText, label: "Planilhas desconectadas" },
      { icon: AlertCircle, label: "Erro manual em pedidos, agenda ou estoque" },
      { icon: Unlink, label: "Sistemas que não conversam" },
      { icon: LockKeyhole, label: "Dados sensíveis sem controle" },
      { icon: BarChart2, label: "Relatórios difíceis de extrair" },
      { icon: RefreshCcw, label: "Retrabalho operacional" },
    ],
  },
  services: [
    {
      icon: ServerCog,
      title: "Sistemas internos",
      description:
        "Plataformas administrativas, dashboards, portais e ferramentas operacionais construídas para o fluxo real da empresa.",
    },
    {
      icon: MonitorSmartphone,
      title: "Sites e plataformas digitais",
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
      title: "Dashboards e visibilidade",
      description:
        "Indicadores, relatórios e painéis para quem precisa decidir com dados confiáveis.",
    },
  ],
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
      cta: "Ver soluções para varejo",
    },
    {
      id: "saude",
      icon: Stethoscope,
      eyebrow: "Para saúde",
      title: "Atendimento digital com segurança e rastreabilidade.",
      description:
        "Desenvolvemos sistemas para clínicas, consultórios, laboratórios e operações com dados sensíveis, sempre com atenção a acesso, registros, segurança e LGPD.",
      points: [
        "Sites para clínicas",
        "Agendamento online",
        "Portal do paciente",
        "Sistemas administrativos",
        "Automação de atendimento",
        "Controle de acesso e dados sensíveis",
      ],
      cta: "Ver soluções para saúde",
    },
  ],
  process: {
    title: "Antes do código, vem o diagnóstico.",
    note: "Projeto bom não termina no deploy. Ele precisa sobreviver ao uso real, à equipe e ao crescimento.",
    phases: [
      {
        name: "Phosphor Audit",
        icon: FileSearch,
        title: "Diagnóstico",
        description:
          "Diagnóstico técnico e operacional. Mapeamos processos, gargalos, sistemas existentes, riscos e oportunidades.",
      },
      {
        name: "Phosphor Build",
        icon: Code2,
        title: "Construção",
        description:
          "Construção de sistema, site ou plataforma. Desenhamos arquitetura, protótipo, MVP, integrações e implantação.",
      },
      {
        name: "Phosphor Care",
        icon: Activity,
        title: "Evolução mensal",
        description:
          "Manutenção e evolução mensal. Monitoramos, corrigimos, documentamos e evoluímos o sistema depois da entrega.",
      },
    ],
  },
  securitySection: {
    title: "Funcionar não basta. Precisa ser seguro, rastreável e mantível.",
    description:
      "Segurança, permissões, logs, backups e documentação são parte do projeto desde o início — não ajustes feitos no fim.",
    checklist: [
      "TypeScript",
      "Autenticação segura",
      "Permissões por perfil",
      "Banco estruturado",
      "Logs de erro",
      "Backups",
      "Versionamento Git",
      "Ambiente de teste",
      "Ambiente de produção",
      "README técnico",
      "Documentação do cliente",
      "Checklist de segurança e deploy",
    ],
    cards: [
      {
        icon: LockKeyhole,
        title: "Controle de acesso",
        description: "Permissões, perfis e rastreabilidade pensados desde o desenho do sistema.",
      },
      {
        icon: DatabaseBackup,
        title: "Backups e continuidade",
        description:
          "Rotinas para proteger informação crítica e reduzir dependência de pessoas ou improvisos.",
      },
      {
        icon: ShieldCheck,
        title: "LGPD e privacidade",
        description:
          "Tratamento de dados com critério técnico, clareza de fluxo e menor superfície de risco.",
      },
    ],
  },
  comparison: {
    title: "A diferença está no processo.",
    columns: ["Agência genérica", "Vibe coder", "Phosphorcode"],
    rows: [
      {
        label: "Foco",
        values: [
          "Site, app, sistema",
          "Faço rápido com IA",
          "Operação em varejo e saúde",
        ],
      },
      {
        label: "Processo",
        values: [
          "Pedido → orçamento → entrega",
          "Prompt → código → deploy",
          "Diagnóstico → arquitetura → MVP → evolução",
        ],
      },
      {
        label: "Qualidade",
        values: [
          "Varia muito",
          "Rápida, mas arriscada",
          "Revisada, testada e documentada",
        ],
      },
      {
        label: "Segurança",
        values: [
          "Muitas vezes secundária",
          "Geralmente fraca",
          "Parte do projeto desde o início",
        ],
      },
      {
        label: "Pós-entrega",
        values: [
          "Suporte informal",
          "Pouca previsibilidade",
          "Evolução mensal e governança",
        ],
      },
    ],
  },
  contact: {
    title: "Vamos mapear onde sua operação está perdendo controle?",
    description:
      "Conte o cenário da sua empresa. A Phosphorcode avalia processos, sistemas, gargalos e possibilidades de evolução técnica.",
    cta: "Solicitar diagnóstico",
    segmentoOptions: [
      { value: "varejo", label: "Varejo" },
      { value: "saude", label: "Saúde" },
      { value: "outro", label: "Outro" },
    ],
    urgenciaOptions: [
      { value: "agora", label: "Agora" },
      { value: "proximos-meses", label: "Próximos meses" },
      { value: "diagnostico", label: "Apenas diagnóstico" },
    ],
  },
  footerLinks: [
    { label: "Soluções", href: "#solucoes" },
    { label: "Varejo", href: "#varejo" },
    { label: "Saúde", href: "#saude" },
    { label: "Processo", href: "#processo" },
    { label: "Segurança", href: "#seguranca" },
    { label: "Contato", href: "#contato" },
  ],
};
