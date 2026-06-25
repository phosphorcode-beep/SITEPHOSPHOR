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
    tagline: "Software proprietário para operações de saúde.",
    toneOfVoice: "Direto, técnico, confiante e focado em engenharia.",
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
    baseText: "O software que a sua operação de saúde precisa",
    rotatingWords: [
      "não existe pronto.",
      "integra agenda.",
      "protege dados.",
      "rastreia documentos.",
      "organiza gestão.",
      "conecta financeiro.",
      "cresce com segurança.",
      "nós construímos.",
    ],
    subheadline:
      "Projetamos, desenvolvemos e mantemos sistemas proprietários para clínicas, laboratórios, operadoras e empresas de saúde que chegaram ao limite das ferramentas prontas.",
    primaryCta: "Avaliar minha operação de saúde",
    secondaryCta: "Mapear sistemas e integrações",
    microcopy: "Discovery · Arquitetura · Build · Integração · Evolução contínua",
  },
  pain: {
    eyebrow: "Limite do pronto",
    title: "Toda operação de saúde chega a um ponto em que o software pronto começa a limitar.",
    cards: [
      {
        icon: FileSpreadsheet,
        title: "Dados sensíveis espalhados",
        description:
          "Paciente, documentos, atendimento e financeiro circulando entre sistemas, arquivos e controles manuais.",
      },
      {
        icon: Unplug,
        title: "Agenda sem integração",
        description: "Agenda, prontuário, CRM, financeiro e gestão operando sem uma arquitetura comum.",
      },
      {
        icon: RefreshCw,
        title: "Processos sem rastreabilidade",
        description:
          "A equipe confere dados manualmente, perde histórico e depende de combinados frágeis para operar.",
      },
      {
        icon: LineChart,
        title: "Gestão sem visão em tempo real",
        description:
          "Diretores e gestores sem indicadores confiáveis para acompanhar unidades, atendimento e produtividade.",
      },
    ],
  },
  solutions: {
    eyebrow: "Software proprietário",
    title: "Sistemas para saúde feitos para o fluxo real da operação.",
    subtitle:
      "Construímos portais, dashboards, CRMs, sistemas internos e integrações seguras com arquitetura, testes, documentação e continuidade. Não adaptamos sua operação ao software disponível: projetamos o sistema para ela.",
    cards: [
      {
        icon: ServerCog,
        title: "Sistemas proprietários",
        description:
          "Módulos administrativos, operacionais e de gestão construídos para clínicas, laboratórios, operadoras e redes de saúde.",
      },
      {
        icon: MonitorSmartphone,
        title: "Portais e áreas logadas",
        description:
          "Portais de paciente, atendimento, documentos e gestão conectados às regras e permissões da operação.",
      },
      {
        icon: ArrowRightLeft,
        title: "Integrações profundas",
        description:
          "Conectamos agenda, prontuário, financeiro, CRM, ERP, bases de dados, APIs e sistemas legados.",
      },
      {
        icon: LayoutDashboard,
        title: "Dashboards e rastreabilidade",
        description:
          "Indicadores, logs, relatórios e painéis para acompanhar operação, segurança e performance com dados confiáveis.",
      },
    ],
  },
  process: {
    eyebrow: "Ciclo de trabalho",
    title: "Do discovery à evolução contínua.",
    description:
      "Antes de programar, entendemos sistemas, riscos, integrações e fluxo operacional. Depois construímos uma base própria, segura e mantível para crescer com a empresa.",
    cta: "Avaliar minha operação de saúde",
    phases: [
      {
        phase: "Phosphor Discovery",
        title: "Mapeamos sistemas, riscos e integrações.",
        description:
          "Levantamos agenda, prontuário, financeiro, documentos, CRM, dados sensíveis, permissões, gargalos e sistemas atuais. O objetivo é entender onde a operação perdeu controle e definir uma arquitetura inicial com prioridades claras.",
      },
      {
        phase: "Phosphor Build",
        title: "Construímos o sistema proprietário.",
        description:
          "Transformamos o diagnóstico em portais, CRMs, dashboards, módulos administrativos e ferramentas operacionais. Cada entrega nasce com código próprio, versionado, documentado e preparado para manutenção.",
      },
      {
        phase: "Phosphor Integrate",
        title: "Integramos o que precisa conversar.",
        description:
          "Conectamos agenda, prontuário, financeiro, atendimento, documentos, CRM, ERP e APIs com segurança, rastreabilidade e visão de dados. Integração não é gatilho solto: é parte da arquitetura.",
      },
      {
        phase: "Phosphor Care",
        title: "Mantemos, monitoramos e evoluímos.",
        description:
          "Acompanhamos o uso real, mantemos backups, logs, permissões e segurança, corrigimos pontos críticos e planejamos novas entregas. O sistema precisa sobreviver ao crescimento da operação.",
      },
    ],
  },
  techRuler: {
    eyebrow: "Régua técnica mínima",
    title: "Funcionar não basta.",
    description:
      "Todo projeto entrega uma base técnica mínima. O sistema precisa ser seguro, rastreável, documentado e mantível por qualquer time técnico.",
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
      "Documentação para o cliente",
      "Checklist de segurança e deploy",
    ],
  },
  verticals: {
    eyebrow: "Especialização",
    title: "Saúde no centro. Varejo como experiência complementar.",
    cards: [
      {
        icon: Stethoscope,
        name: "Phosphor Health",
        description:
          "Sistemas proprietários para clínicas, laboratórios, operadoras e redes de saúde que precisam integrar agenda, paciente, documentos, financeiro, atendimento e gestão.",
      },
      {
        icon: ShoppingCart,
        name: "Phosphor Retail",
        description:
          "A mesma engenharia aplicada a varejo e e-commerce quando a operação exige pedidos, estoque, CRM, dashboards e integração entre canais.",
      },
    ],
  },
  gettingStarted: {
    eyebrow: "Como começamos",
    title: "Antes de construir, mapeamos.",
    text: "Entendemos os sistemas em uso, os dados sensíveis, as integrações críticas, os riscos de segurança e os fluxos que não podem quebrar. A proposta vem depois do diagnóstico técnico e funcional.",
    cta: "Mapear sistemas e integrações",
  },
  faq: {
    eyebrow: "Perguntas frequentes",
    title: "Perguntas frequentes",
    items: [
      {
        question: "Vocês trabalham só com saúde?",
        answer:
          "Nossa especialidade é saúde: clínicas, laboratórios, operadoras, redes de saúde e healthtechs. Também aplicamos a mesma engenharia a operações de varejo e e-commerce quando há necessidade real de software proprietário.",
      },
      {
        question: "O que significa software proprietário?",
        answer:
          "É um sistema construído para a sua operação, com código próprio, documentação, versionamento e arquitetura sob medida. Ele não obriga a empresa a se adaptar ao limite de uma ferramenta pronta.",
      },
      {
        question: "Como o escopo é definido?",
        answer:
          "O escopo nasce do discovery. Mapeamos sistemas atuais, riscos, integrações, permissões, dados sensíveis e prioridades antes de definir o que será construído primeiro.",
      },
      {
        question: "Vocês integram com sistemas que já usamos?",
        answer:
          "Sim. Integramos agenda, prontuário, financeiro, CRM, ERP, bases de dados, APIs e sistemas legados. A integração é planejada na arquitetura, não tratada como remendo no fim.",
      },
      {
        question: "Existe manutenção após a entrega?",
        answer:
          "Sim. O Phosphor Care cobre manutenção, evolução, monitoramento, backups, logs, permissões, segurança e melhorias contínuas conforme o sistema passa pelo uso real.",
      },
      {
        question: "De quem é a propriedade do software?",
        answer:
          "O software é da sua empresa. Você recebe código versionado, documentação técnica, documentação para o cliente e os acessos necessários para manter propriedade e continuidade.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Vamos conversar",
    title: "Sua operação de saúde precisa de um software proprietário?",
    text: "Vamos mapear sistemas, riscos e integrações para entender o que precisa ser construído, conectado ou evoluído com segurança.",
    cta: "Avaliar minha operação de saúde",
  },
  contact: {
    cta: "Avaliar minha operação de saúde",
    segmentoOptions: [
      { value: "saude", label: "Saúde" },
      { value: "varejo", label: "Varejo / e-commerce" },
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
