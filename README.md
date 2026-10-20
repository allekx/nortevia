# NorteVia

Site institucional da NorteVia, empresa de locação de caixas estacionárias de 5 m³.

## 1. Nome e objetivo

Este repositório contém a base do site institucional da **NorteVia**.

O objetivo do projeto é apresentar o serviço de locação de caixas estacionárias, informar dados comerciais confirmados e permitir o pedido de orçamento pelo WhatsApp, com uma base técnica preparada para SEO e evolução por fases.

## 2. Descrição da empresa e do serviço

A NorteVia realiza locação de caixas estacionárias de 5 m³ para armazenamento temporário de resíduos de obras, reformas, demolições, comércios e serviços compatíveis.

O atendimento é voltado a pessoas físicas e jurídicas. A área de atendimento confirmada é Manaus, Amazonas, Brasil. Não afirmar cobertura em municípios vizinhos sem nova confirmação.

## 3. Stack tecnológica e versões instaladas

Versões efetivamente instaladas nesta fase:

| Pacote | Versão |
| --- | --- |
| Next.js | 16.4.2 |
| React | 19.3.0 |
| React DOM | 19.3.0 |
| TypeScript | 5.9.3 |
| Tailwind CSS | 4.3.3 |
| @tailwindcss/turbopack | 4.3.3 |
| ESLint | 9.39.5 |
| eslint-config-next | 16.4.2 |
| @types/node | 20.19.43 |
| @types/react | 19.3.0 |
| @types/react-dom | 19.3.0 |

Outras informações do ambiente usado na criação:

- Node.js 24.20.0
- npm 11.19.0
- App Router
- TypeScript com `strict` e checagens adicionais
- Tailwind CSS v4 via `@tailwindcss/turbopack`
- Gerenciador de pacotes: npm

## 4. Pré-requisitos de desenvolvimento

- Node.js 20.9 ou superior
- npm
- Editor com suporte a TypeScript, preferencialmente Cursor

## 5. Como instalar as dependências

Na raiz do projeto:

```bash
npm install
```

## 6. Como iniciar o servidor de desenvolvimento

```bash
npm run dev
```

Em seguida, abra [http://localhost:3000](http://localhost:3000).

## 7. Como executar build, lint e TypeScript

```bash
npm run lint
npm run typecheck
npm run build
```

O servidor de produção local, após o build, pode ser iniciado com:

```bash
npm run start
```

Nesta fase, o deploy ainda não deve ser feito.

### Variável de ambiente do domínio público

O domínio de produção ainda **não foi comprado**. Não configure `NEXT_PUBLIC_SITE_URL` com localhost, domínio de exemplo ou URL fictícia.

Quando o domínio real existir:

**Localmente**

1. Copie `.env.example` para `.env.local`.
2. Descomente `NEXT_PUBLIC_SITE_URL` e use a URL HTTPS definitiva, sem barra no final.
3. Reinicie `npm run dev`.
4. Não versione `.env.local`. O `.gitignore` ignora `.env*`, inclusive `.env.local`.

**Em produção**

1. Defina `NEXT_PUBLIC_SITE_URL` nas variáveis de ambiente do provedor de hospedagem.
2. Use o mesmo formato: HTTPS, domínio real, sem barra no final.
3. Gere um novo build depois de gravar a variável.
4. Não coloque a URL em arquivo versionado.

Enquanto a variável estiver ausente ou inválida, o `build` continua válido: não há canonical absoluto, o sitemap não lista URLs e o `robots.txt` não aponta para sitemap.

## 8. Estrutura de diretórios

```text
NORTEVIA/
├── AGENTS.md
├── README.md
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── tsconfig.json
├── assets/
│   └── img/                          # arquivos originais fornecidos
├── public/
│   └── assets/
│       └── img/                      # cópias usadas pelo site
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── WhatsAppLink.tsx
│   │   └── home/
│   │       ├── Audience.tsx
│   │       ├── Benefits.tsx
│   │       ├── Faq.tsx
│   │       ├── FinalCta.tsx
│   │       ├── Hero.tsx
│   │       ├── HowItWorks.tsx
│   │       ├── Pricing.tsx
│   │       └── Service.tsx
│   └── lib/
│       ├── seo.ts
│       └── site.ts
├── .env.example
└── node_modules/
```

## 9. Identidade visual e uso da logo

A marca usa vermelho, branco e preto.

Diretrizes atuais:

- Vermelho (`#E10600`) para destaque e conversão
- Preto e grafite para cabeçalho, rodapé e áreas de impacto
- Branco e cinza-claro para leitura
- Tipografia: Archivo nos títulos e Source Sans 3 no texto
- Logo original, sem redesenho, recorte agressivo ou distorção
- A logo contém elementos claros na palavra VIA; por isso ela é usada sobre fundos escuros
- O arquivo original da logo é quadrado e tem muita área vazia. O site usa `logo-nortevia-web.png` só para exibição, sem alterar o arquivo original.

Arquivos de imagem:

| Arquivo original | Cópia pública |
| --- | --- |
| `assets/img/Logo Nortevia.png` | `public/assets/img/logo-nortevia.png` (arquivo original, 1254×1254) |
| `assets/img/Logo Nortevia.png` | `public/assets/img/logo-nortevia-web.png` (cópia de exibição, recorte só da área útil) |
| `assets/img/norte via imagem.jpeg` | `public/assets/img/norte-via-imagem.jpeg` |
| `assets/img/norte via imagem 2.jpeg` | `public/assets/img/norte-via-imagem-2.jpeg` |
| `assets/img/norte via imagem 3.jpeg` | `public/assets/img/norte-via-imagem-3.jpeg` |
| `assets/img/norte via imagem 4.jpeg` | `public/assets/img/norte-via-imagem-4.jpeg` |

Novas imagens devem ser colocadas em `assets/img/` e copiadas para `public/assets/img/` com nomes sem espaços.

## 10. Dados comerciais confirmados

- Nome: NorteVia
- CNPJ: 61.868.548/0001-42
- E-mail: nortevia.am@gmail.com
- WhatsApp: +55 92 98629-5982
- Serviço: locação de caixas estacionárias de 5 m³
- Valor informado: R$ 450,00 por locação
- Permanência habitual: 5 dias, sem contar o dia da entrega nem o dia da retirada
- A caixa poderá permanecer por mais tempo conforme o fluxo operacional da rota
- Área de atendimento: Manaus, Amazonas, Brasil

O valor não deve ser apresentado como diária. A cotação final deve ser confirmada com a empresa.

## 11. Funcionalidades concluídas

- Inicialização do projeto Next.js com App Router
- Configuração de TypeScript, Tailwind CSS, ESLint e npm
- Estrutura `src/app`, `src/components`, `src/lib` e `public/assets/img`
- Identidade visual básica
- Layout global com cabeçalho e rodapé
- Página inicial provisória com dados confirmados
- Link real de orçamento via WhatsApp
- Link real de e-mail
- Scripts `dev`, `build`, `start`, `lint` e `typecheck`
- README de continuidade
- Verificações executadas nesta fase: `npm run lint`, `npm run typecheck` e `npm run build` concluídos sem erro
- Servidor de desenvolvimento iniciado em `http://localhost:3000`
- A rota `/` foi gerada como página estática
- A home e as imagens em `public/assets/img/` responderam HTTP 200
- Validação da fundação concluída: `lint`, `typecheck`, `build` e inspeção no navegador
- Correção da logo no cabeçalho e no rodapé: a marca ficou ilegível no tamanho de 40px porque o PNG original é 1254×1254 com grande margem. Foi criada a cópia `public/assets/img/logo-nortevia-web.png` apenas para exibição
- Página comercial completa da home, com hero, capacidade, serviço, preço, processo, público, FAQ e CTA final
- Mensagem de WhatsApp atualizada e reutilizada por todos os CTAs de orçamento
- SEO técnico básico: title, description, Open Graph, Twitter, idioma `pt-BR`, favicon com arquivo existente, `sitemap.xml` e `robots.txt`
- Área de atendimento confirmada e publicada: Manaus, Amazonas, Brasil

## 12. Funcionalidades pendentes

- Confirmação do domínio de produção (`NEXT_PUBLIC_SITE_URL`)
- Páginas internas (serviço, contato, política, quando confirmadas)
- Formulários além do WhatsApp
- Analytics
- Favicon quadrado dedicado, se a empresa quiser um ícone diferente da logo de exibição
- Deploy
- SEO avançado e dados estruturados, somente com informações confirmadas

## 13. Decisões arquiteturais e técnicas

- O projeto foi criado com `create-next-app@16.4.2`, versão estável no momento da implementação.
- Cache Components não foi habilitado. Não é necessário para um site institucional nesta fase.
- Os dados comerciais ficam centralizados em `src/lib/site.ts` para evitar informação inventada espalhada pela interface.
- Apenas links com destino real foram criados: início, WhatsApp e e-mail.
- A configuração do TypeScript foi endurecida com `strict`, `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch` e `noUncheckedIndexedAccess`.
- Tailwind CSS v4 usa `@theme` em `src/app/globals.css`. Não existe `tailwind.config.js`, porque essa é a configuração compatível com a versão instalada.
- A pasta `assets/img/` preserva os arquivos originais. O site consome as cópias em `public/assets/img/`.
- A logo usada na interface é `logo-nortevia-web.png`, uma cópia recortada só da área útil. O arquivo original não foi alterado.
- O conteúdo comercial da home fica centralizado em `src/lib/site.ts`. As seções da página leem esses dados e não repetem números ou preços em arquivos soltos.
- A home usa três fotografias reais e distintas: caixas empilhadas no hero, caminhão ao lado das caixas no serviço e transporte da caixa no processo. A foto do caminhão vazio (`norte via imagem.jpeg`) não foi usada para não simular galeria maior do que o necessário.
- O cabeçalho ficou fixo no topo para as âncoras internas (`#como-funciona`, `#preco`, `#faq`) não ficarem escondidas.
- O FAQ usa `<details>` e `<summary>`, sem JavaScript de cliente extra.
- A área de atendimento confirmada é somente Manaus. Títulos e descrições usam a localização de forma natural, sem páginas de bairro e sem afirmar municípios vizinhos.
- O domínio de produção ainda não foi comprado. `metadataBase`, canonical, imagem social absoluta e a linha de sitemap só são gerados quando `NEXT_PUBLIC_SITE_URL` é uma URL HTTPS válida. Localhost, `example.com` e valores inválidos são ignorados para o build não publicar URL falsa.
- O `sitemap.xml` e o `robots.txt` usam as convenções nativas do Next.js 16 (`src/app/sitemap.ts` e `src/app/robots.ts`). Sem domínio confirmado, o sitemap fica vazio e o robots não aponta para ele.
- O favicon atual é o arquivo existente `public/assets/img/logo-nortevia-web.png`. O original da marca não foi alterado.
- O `tsconfig.json` exclui `.next/dev` porque o validador gerado pelo Next.js 16 declara tipos não usados e quebra `noUnusedLocals`. O `next build` pode recolocar `.next/dev/types` no `include`; a exclusão deve ser preservada.
- Não foi feito deploy.

## 14. Problemas conhecidos e informações não confirmadas

- O domínio de produção ainda não foi confirmado. Não use localhost nem um domínio de exemplo como se fosse real.
- Não há endereço físico, horários de funcionamento, avaliações, clientes, certificações, garantias, lista de resíduos aceitos, coordenadas ou disponibilidade imediata confirmados.
- Não afirmar atendimento em municípios vizinhos nem criar páginas de bairros sem conteúdo específico.
- Nas fotos das caixas aparece o texto "Disk Entulho". Esse nome não foi adotado no site porque não foi confirmado como dado comercial oficial.
- A fotografia `norte via imagem.jpeg` (caminhão sem caixa) existe no projeto, mas não é usada na home comercial.
- O arquivo original da logo permanece intacto em `assets/img/Logo Nortevia.png`. A versão usada na interface é uma cópia recortada só para leitura no navegador.
- O npm reportou o pacote `eslint@9.39.5` como depreciado. Ele foi instalado pelo `create-next-app` e não foi trocado para não quebrar a compatibilidade com `eslint-config-next@16.4.2`.
- O `npm audit` do create-next-app apontou vulnerabilidades. Elas devem ser revisadas com cuidado; não usar `npm audit fix --force`.

## 15. Próximas etapas, em ordem de prioridade

1. Comprar o domínio de produção e só então definir `NEXT_PUBLIC_SITE_URL` com a URL HTTPS real, sem barra no final.
2. Definir páginas internas necessárias, se houver conteúdo confirmado.
3. Preparar analytics e deploy em fase posterior.

## 16. Histórico resumido das etapas concluídas

### Fase 01 — Criação do projeto do zero

- Projeto Next.js criado do zero.
- Stack, estrutura, identidade visual, layout, cabeçalho, rodapé e página inicial provisória implementados.
- Imagens fornecidas organizadas em `public/assets/img/`.
- README criado como documentação de continuidade.
- `lint`, `typecheck` e `build` executados com sucesso. A home e as imagens foram confirmadas via HTTP 200.

### Fase 01.1 — Validação da fundação

- Código, scripts e estrutura da Fase 01 conferidos no estado real dos arquivos.
- `npm run lint`, `npm run typecheck` e `npm run build` executados novamente, sem erro.
- Home validada no navegador em `http://localhost:3000`: título, textos confirmados, links reais de WhatsApp e e-mail, imagens e layout desktop/mobile.
- Problema encontrado e corrigido: logo ilegível no cabeçalho. Criada a cópia de exibição `public/assets/img/logo-nortevia-web.png`, sem alterar o arquivo original.
- A página comercial completa permanece pendente.

### Fase 02 — Página comercial completa

- Home comercial implementada sobre a fundação existente, sem nova stack e sem páginas extras.
- Seções: hero, capacidade e operação, apresentação do serviço, preço e condições, como funciona, público, FAQ e CTA final.
- Componentes novos: `SectionHeading` e as seções em `src/components/home/`.
- Cabeçalho e rodapé preservados. O rodapé ganhou âncoras reais para as seções da home.
- WhatsApp único, com mensagem de orçamento e confirmação de endereço.
- Verificações: `lint`, `typecheck` e `build` sem erro. Home conferida no navegador em desktop e mobile.
- Decisões visuais: fundos grafite/preto nas áreas de conversão, vermelho só nos CTAs, cards limpos sem selos fictícios e fotografias reais com proporção reservada.

### Fase 03 — SEO técnico básico

- Metadata da home no `layout.tsx`, sem duplicar tags na página.
- Título atual: `NorteVia | Locação de Caixa Estacionária de 5 m³ em Manaus`.
- Description atual: locação de caixa de 5 m³ em Manaus para obras, reformas e entulho.
- Open Graph e Twitter básicos. `metadataBase`, canonical e imagem social absoluta só entram com `NEXT_PUBLIC_SITE_URL` válida.
- Favicon aponta para `logo-nortevia-web.png`, arquivo já existente.
- `sitemap.xml` e `robots.txt` implementados. Sem domínio comprado, o sitemap não lista URLs e o robots apenas permite `/`.
- Continuação da fase: validação da URL pública endurecida e documentação local/produção de `NEXT_PUBLIC_SITE_URL`, sem tratar o domínio como comprado.

### Atualização comercial — Área de atendimento em Manaus

- A área de atendimento foi confirmada: Manaus, Amazonas, Brasil.
- Dados centralizados em `src/lib/site.ts` e metadados em `src/lib/seo.ts` atualizados.
- A home informa o atendimento em Manaus de forma natural no hero, na capacidade, no preço, no FAQ, no CTA final e no rodapé.
- SEO prioriza buscas locais sem repetição artificial: título e description mencionam locação de caixa estacionária de 5 m³ em Manaus, obras, reformas e entulho.
- Não foram criadas páginas de bairros nem schema local com endereço, horário ou coordenadas.

### Fase 03 — continuação sem domínio comprado

- A implementação existente de metadata, sitemap e robots foi revisada e preservada.
- `getPublicSiteUrl()` ignora variável ausente, HTTP, localhost e hosts de exemplo, para o `build` não gerar URL canônica falsa.
- `.env.local` permanece ignorado pelo Git (`.env*` e `.env.local`).
- README atualizado com o procedimento local e o de produção para quando o domínio for comprado.

### Ajuste visual — identidade industrial

- Hero com tipografia maior, imagem em sangria no desktop, indicadores de capacidade e cidade, e CTAs mais marcados.
- Seções com composições diferentes: lista numerada, lista com divisores, linha de processo, grade editorial e painel de preço.
- Cabeçalho com âncoras da página no desktop, barra vermelha da marca e botões com acabamento mais firme.
- Animações só em CSS, com `prefers-reduced-motion` respeitado. Nenhuma biblioteca nova.
- Textos, preço, WhatsApp, FAQ, imagens e SEO preservados.

## 17. INSTRUÇÕES PARA RETOMAR O PROJETO COM IA

Antes de modificar o projeto, a IA deve:

1. Ler este `README.md` por completo.
2. Ler os arquivos relevantes em `src/app`, `src/components`, `src/lib` e as configurações da raiz.
3. Verificar o estado real do código. Não presumir que uma etapa está pronta só porque aparece neste arquivo.
4. Identificar a última etapa concluída. Neste momento, a última etapa é o **ajuste visual industrial da home, sem mudança de conteúdo comercial**.
5. Preservar as decisões já tomadas: dados confirmados, ausência de conteúdo fictício, identidade visual, links reais e TypeScript rigoroso.
6. Não inventar endereço físico, horários, avaliações, clientes, certificações, garantias, tipos de resíduos aceitos, disponibilidade imediata ou atendimento fora de Manaus.
7. Não apresentar o valor como diária.
8. Não distorcer a logo original.
9. Ao concluir qualquer tarefa, atualizar este README para refletir exatamente o que foi feito, o que permanece pendente e a próxima etapa.
10. Executar as verificações possíveis (`lint`, `typecheck`, `build`) e corrigir erros encontrados antes de declarar a tarefa concluída.
)
