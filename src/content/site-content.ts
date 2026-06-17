import {
  ArrowRightLeft,
  FileSpreadsheet,
  LayoutDashboard,
  LineChart,
  MonitorSmartphone,
  RefreshCw,
  ServerCog,
  ShoppingCart,
  Stethoscope,
  Unplug,
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
    { label: "Início", href: "#top" },
    { label: "Método", href: "#processo" },
    { label: "Contato", href: "#contato" },
    { label: "FAQ", href: "#faq" },
  ],
  hero: {
    baseText: "Criamos softwares para empresas que precisam controlar",
    rotatingWords: [
      "vendas.",
      "estoque.",
      "atendimento.",
      "agendamentos.",
      "pedidos.",
      "dados sensíveis.",
      "processos críticos.",
      "indicadores.",
    ],
    subheadline:
      "Desenvolvemos softwares sob medida para transformar processos manuais em operações integradas, seguras e rastreáveis.",
    primaryCta: "Criar software sob medida",
    secondaryCta: "Ver método",
    microcopy: "Diagnóstico · Arquitetura · Desenvolvimento · Implantação · Evolução",
  },
  pain: {
    eyebrow: "Dor operacional",
    title: "Quando a operação cresce, o improviso começa a custar caro.",
    cards: [
      {
        icon: FileSpreadsheet,
        title: "Planilhas soltas",
        description:
          "Informações importantes espalhadas entre arquivos, mensagens e controles manuais.",
      },
      {
        icon: Unplug,
        title: "Sistemas que não conversam",
        description: "ERP, agenda, PDV, CRM e e-commerce operando sem integração real.",
      },
      {
        icon: RefreshCw,
        title: "Retrabalho operacional",
        description:
          "A equipe repete tarefas, confere dados manualmente e perde tempo com processos frágeis.",
      },
      {
        icon: LineChart,
        title: "Decisão sem visibilidade",
        description:
          "Gestores sem indicadores confiáveis para acompanhar vendas, estoque, atendimento e produtividade.",
      },
    ],
  },
  solutions: {
    eyebrow: "Soluções",
    title: "Softwares sob medida para vender, atender e operar melhor.",
    subtitle:
      "Criamos sistemas internos, sites, plataformas e integrações com arquitetura, revisão técnica e continuidade — para empresas que precisam controlar processos, dados e operações críticas sem depender de improviso.",
    cards: [
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
        title: "Integrações operacionais",
        description:
          "Conectamos ERP, PDV, e-commerce, agenda, CRM, gateways, automações e sistemas legados.",
      },
      {
        icon: LayoutDashboard,
        title: "Dashboards e indicadores",
        description:
          "Indicadores, relatórios e painéis para quem precisa decidir com dados confiáveis.",
      },
    ],
  },
  process: {
    eyebrow: "Método Phosphor",
    title: "Software sob medida,\nprocesso estruturado.",
    description:
      "Cada operação é diferente. Por isso, começamos entendendo o contexto real da empresa antes de desenhar, construir e evoluir a solução.",
    cta: "Criar software sob medida",
    phases: [
      {
        phase: "Fase 01 · Diagnóstico operacional",
        title: "Mapeamos a operação.",
        description:
          "Antes de qualquer linha de código, mergulhamos na rotina real da empresa. Levantamos processos, gargalos, sistemas atuais, fluxos manuais, dados sensíveis e pontos de risco. O objetivo é entender onde a operação perde tempo e controle, e definir com clareza o que o software precisa resolver de verdade.",
      },
      {
        phase: "Fase 02 · Arquitetura da solução",
        title: "Desenhamos o software sob medida.",
        description:
          "Com o diagnóstico em mãos, transformamos a operação em uma estrutura técnica clara: fluxos, regras de negócio, integrações, permissões por perfil, modelo de dados e prioridades de entrega. Tudo desenhado para o contexto da empresa, sem depender de modelo pronto ou template genérico.",
      },
      {
        phase: "Fase 03 · Desenvolvimento e implantação",
        title: "Construímos e colocamos em operação.",
        description:
          "Desenvolvemos o software com revisão técnica, testes, segurança e documentação em cada etapa. Conectamos integrações, validamos com a equipe, homologamos e implantamos com previsibilidade, para que a solução funcione no uso real do dia a dia, e não apenas em demonstração.",
      },
      {
        phase: "Fase 04 · Evolução contínua",
        title: "Evoluímos com a operação.",
        description:
          "A entrega é o começo da relação, não o fim. Acompanhamos o uso, monitoramos o sistema, corrigimos pontos críticos, ajustamos fluxos e implementamos melhorias. Conforme a empresa cresce, expandimos o software com novas funcionalidades e integrações, sempre com suporte e manutenção contínuos.",
      },
    ],
  },
  techRuler: {
    eyebrow: "Régua técnica",
    title: "Sob medida não significa improvisado.",
    description:
      "Todo projeto entrega uma base técnica mínima. É a régua que garante segurança, rastreabilidade e manutenção no longo prazo.",
    checklist: [
      "Autenticação segura",
      "Permissões por perfil",
      "Banco de dados estruturado",
      "Logs e rastreabilidade",
      "Backups",
      "Ambiente de teste",
      "Deploy em produção",
      "Documentação técnica",
      "Documentação para o cliente",
      "Plano de evolução",
    ],
  },
  verticals: {
    eyebrow: "Varejo e saúde",
    title: "Software sob medida para operações de varejo e saúde.",
    cards: [
      {
        icon: ShoppingCart,
        name: "Varejo",
        description:
          "Pedidos, estoque, CRM, e-commerce, PDV, dashboards, automações e integrações com sistemas comerciais.",
      },
      {
        icon: Stethoscope,
        name: "Saúde",
        description:
          "Agenda, portal do paciente, dados sensíveis, documentos, atendimento, relatórios e segurança de acesso.",
      },
    ],
  },
  gettingStarted: {
    eyebrow: "Como começamos",
    title: "O primeiro passo é entender a operação.",
    text: "Antes de propor uma solução, analisamos o cenário atual: processos, sistemas, gargalos, riscos e prioridades. A partir disso, definimos o melhor caminho para construir ou evoluir o software.",
    cta: "Mapear minha operação",
  },
  faq: {
    eyebrow: "Dúvidas frequentes",
    title: "Perguntas frequentes",
    items: [
      {
        question: "Qual é o prazo de um projeto?",
        answer:
          "Depende do escopo. Após o diagnóstico, definimos um cronograma realista por entregas. Os projetos costumam começar por um MVP funcional e evoluir a partir do uso real.",
      },
      {
        question: "Como o escopo é definido?",
        answer:
          "O escopo nasce do diagnóstico operacional. Mapeamos processos, prioridades e integrações antes de definir o que será construído na primeira fase.",
      },
      {
        question: "Existe suporte após a entrega?",
        answer:
          "Sim. Depois da implantação, acompanhamos o uso, corrigimos pontos críticos e evoluímos a solução com suporte e manutenção contínuos.",
      },
      {
        question: "Vocês integram com os sistemas que já usamos?",
        answer:
          "Sim. Conectamos o software a ERPs, PDVs, CRMs, agendas, e-commerces, gateways e sistemas legados que a empresa já utiliza.",
      },
      {
        question: "O software pode evoluir depois?",
        answer:
          "Sim. O software é construído para evoluir. Novas funcionalidades, ajustes e melhorias entram em ciclos planejados conforme a operação cresce.",
      },
      {
        question: "De quem é a propriedade do software?",
        answer:
          "O software é seu. Você recebe o código, a documentação técnica e os acessos necessários para manter a propriedade total da solução.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Vamos conversar",
    title: "Sua operação precisa de um software sob medida?",
    text: "Vamos mapear seus processos e entender o que precisa ser construído, integrado ou melhorado.",
    cta: "Criar software sob medida",
  },
  contact: {
    cta: "Criar software sob medida",
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
    { label: "Início", href: "#top" },
    { label: "Método", href: "#processo" },
    { label: "FAQ", href: "#faq" },
    { label: "Contato", href: "#contato" },
  ],
};
