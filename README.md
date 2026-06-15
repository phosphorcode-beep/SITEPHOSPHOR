# Site Phosphor

Landing page em Next.js preparada para receber um brandbook completo. A estrutura usa App Router, TypeScript, Tailwind CSS, tokens visuais e componentes reutilizaveis.

## Como rodar

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

Para validar producao:

```bash
npm run lint
npm run typecheck
npm run build
```

## Estrutura principal

- `src/app/page.tsx`: pagina principal e composicao das secoes.
- `src/content/site-content.ts`: textos, menus, planos, FAQ e placeholders editoriais.
- `src/styles/theme.css`: tokens visuais globais para cores, fontes, escala tipografica, espacamentos, raios, sombras e tema escuro.
- `tailwind.config.ts`: mapeamento dos tokens CSS para classes Tailwind.
- `src/components/ui/`: componentes base como Button, Card, Badge, Section, Container, Heading e Input.
- `src/components/layout/`: Navbar e Footer.
- `public/brand/`: logos, simbolo, favicon, imagens institucionais e icones.

## Como aplicar o brandbook

### Cores

Troque os canais RGB em `src/styles/theme.css`.

Tokens disponiveis:

- `--color-primary`
- `--color-secondary`
- `--color-accent`
- `--color-background`
- `--color-surface`
- `--color-text-primary`
- `--color-text-secondary`
- `--color-border`
- `--color-error`
- `--color-success`
- `--color-warning`
- `--shadow-color`

Se a marca tiver tema escuro, atualize tambem o bloco `[data-theme="dark"]`.

### Fontes

Atualize em `src/styles/theme.css`:

- `--font-primary`
- `--font-secondary`
- escala `--font-size-display`, `--font-size-h1`, `--font-size-h2`, `--font-size-h3`, `--font-size-body`, `--font-size-small`, `--font-size-caption`

Se a fonte oficial vier do Google Fonts ou de arquivos locais, configure o carregamento em `src/app/layout.tsx` e mantenha os tokens apontando para a familia correta.

### Logos e assets

Substitua os arquivos em:

- `public/brand/logo.svg`
- `public/brand/logo-dark.svg`
- `public/brand/symbol.svg`
- `public/brand/favicon.svg`
- `public/brand/images/`
- `public/brand/icons/`

Mantenha os nomes quando possivel para evitar alterar imports.

### Componentes base

Para alterar estilos globais de UI, comece pelos componentes em `src/components/ui/`. Eles consomem tokens do Tailwind e evitam cores hardcoded nos blocos da pagina.

### Conteudo e tom de voz

Edite `src/content/site-content.ts` para ajustar:

- Nome e tagline da marca
- Headline e subheadline
- Beneficios
- Passos
- Depoimentos
- Planos
- FAQ
- CTAs
- Links do footer

O campo `toneOfVoice` registra o tom esperado da marca e serve como placeholder editorial para futuras revisoes.

## Checklist de aplicacao do brandbook

1. Atualizar tokens de cor e tipografia em `src/styles/theme.css`.
2. Substituir assets em `public/brand/`.
3. Revisar copy em `src/content/site-content.ts`.
4. Ajustar componentes base se o brandbook definir estilos especificos de botao, card, input ou badge.
5. Rodar `npm run lint`, `npm run typecheck` e `npm run build`.
6. Conferir visual em mobile, tablet e desktop.

## Decisoes tecnicas

- O projeto nao depende de dados externos obrigatorios.
- A identidade visual fica centralizada em tokens CSS conectados ao Tailwind.
- Os componentes base reduzem duplicacao e facilitam trocar estilos quando o brandbook oficial chegar.
- O conteudo comercial fica separado da composicao visual para facilitar revisoes de tom de marca.
