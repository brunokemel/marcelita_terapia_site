# Marcelia Corrêa — Terapia Energética

Landing page institucional e comercial criada para apresentar o trabalho da terapeuta energética **Marcelia Corrêa**, explicar os formatos de atendimento e direcionar visitantes para uma conversa pelo WhatsApp.

O projeto foi pensado para funcionar bem em celulares, tablets e computadores, com uma identidade visual acolhedora baseada em rosa-salmão, creme e verde.

## Objetivo do projeto

A página ajuda a visitante a percorrer uma jornada simples:

1. Entender a proposta da terapia energética.
2. Conhecer a Marcelia e sua forma de atendimento.
3. Visualizar os serviços disponíveis.
4. Entender como funciona o primeiro contato.
5. Clicar em um botão para conversar pelo WhatsApp.

Como terapias energéticas são práticas complementares, o site evita promessas de cura e informa que os atendimentos não substituem acompanhamento médico ou psicológico.

## Tecnologias utilizadas

- **React:** construção da interface por componentes.
- **TypeScript:** tipagem e maior segurança durante o desenvolvimento.
- **Styled Components:** estilos escritos junto aos componentes, com suporte a propriedades e responsividade.
- **Vite:** servidor de desenvolvimento e geração da versão de produção.
- **Lucide React:** ícones utilizados na interface.

## Estrutura do projeto

```text
Marcelia/
├── .openai/
│   └── hosting.json           # Configuração da hospedagem
├── src/
│   ├── components/
│   │   ├── Button.tsx         # Botão reutilizável
│   │   ├── Header.tsx         # Cabeçalho, navegação e menu mobile
│   │   └── SectionHeading.tsx # Títulos reutilizáveis das seções
│   ├── domain/
│   │   └── services.ts        # Serviços e geração dos links de contato
│   ├── styles/
│   │   ├── GlobalStyle.ts     # Estilos globais da aplicação
│   │   └── theme.ts           # Paleta de cores e valores do tema
│   ├── App.tsx                # Estrutura e conteúdo principal da página
│   └── main.tsx               # Ponto de entrada do React
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Como a arquitetura funciona

A aplicação foi separada por responsabilidade:

- `components` contém elementos visuais reutilizáveis.
- `styles` centraliza a identidade visual e os estilos globais.
- `domain` contém as regras relacionadas aos atendimentos e links comerciais.
- `App.tsx` reúne as seções e define a ordem da experiência.

O arquivo `src/domain/services.ts` utiliza duas classes:

- `ServiceCatalog`: mantém a lista de atendimentos exibida nos cartões.
- `ContactLinkBuilder`: monta as mensagens enviadas pelos botões de WhatsApp.

Essa separação permite alterar um serviço ou a forma de contato sem precisar reorganizar toda a página.

## Seções da landing page

- **Apresentação:** mensagem principal e primeiro botão de contato.
- **Sobre:** apresentação profissional da Marcelia.
- **Atendimentos:** cartões com os formatos de cuidado.
- **Como funciona:** explicação do contato, escolha do formato e atendimento.
- **Mensagem de acolhimento:** reforço emocional da proposta.
- **Chamada final:** último convite para conversar pelo WhatsApp.
- **Rodapé:** identificação profissional e acesso ao contato.

## Como executar localmente

É necessário ter o [Node.js](https://nodejs.org/) instalado.

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O terminal mostrará o endereço local, normalmente `http://localhost:5173`.

## Comandos disponíveis

### Desenvolvimento

```bash
npm run dev
```

Inicia o projeto em modo de desenvolvimento.

### Produção

```bash
npm run build
```

Verifica o TypeScript e gera os arquivos de produção na pasta `dist`.

### Prévia da produção

```bash
npm run preview
```

Abre localmente a última versão gerada pelo comando de build.

## Como personalizar

### Alterar as cores

Edite `src/styles/theme.ts`. A cor rosa-salmão principal utilizada atualmente é:

```ts
pink: '#FF91A4'
```

### Alterar textos

Os textos das seções estão em `src/App.tsx`.

### Alterar atendimentos

Edite a lista `items` da classe `ServiceCatalog`, em `src/domain/services.ts`. Cada atendimento possui:

- Identificador.
- Chamada curta.
- Título.
- Descrição.
- Formato.
- Ícone.

### Configurar o WhatsApp

O método `whatsapp()` está em `src/domain/services.ts`. Atualmente ele cria uma mensagem pronta, mas não possui um número de destinatário fixo.

Para direcionar todos os contatos ao WhatsApp da Marcelia, adicione o número com código do país e DDD, usando apenas números:

```ts
return `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
```

Substitua o número do exemplo pelo contato profissional correto.

### Adicionar uma fotografia

A seção “Sobre mim” utiliza temporariamente um monograma com a letra **M**. O componente `Portrait`, em `src/App.tsx`, está preparado para ser substituído ou adaptado para exibir uma fotografia real da Marcelia.

## Responsividade

O layout possui ajustes para diferentes larguras de tela:

- Menu compacto em celulares.
- Seções em uma coluna em telas menores.
- Botões adaptados para toque.
- Tipografia com tamanhos fluidos.
- Cartões empilhados no celular.

## Informações que ainda devem ser confirmadas

Antes da divulgação final, é recomendado confirmar:

- Número profissional do WhatsApp.
- Fotografia oficial da Marcelia.
- Perfil correto do Instagram, caso seja adicionado.
- Nomes e descrições dos atendimentos realmente oferecidos.
- Modalidades disponíveis: presencial, online ou ambas.
- Cidade ou região dos atendimentos presenciais.

## Publicação

A versão hospedada está disponível em:

[marcelia-correa-terapias.wryeel2.chatgpt.site](https://marcelia-correa-terapias.wryeel2.chatgpt.site)

O projeto também pode ser hospedado em serviços compatíveis com aplicações Vite utilizando o conteúdo gerado na pasta `dist`.

## Referências utilizadas no conteúdo

- [Práticas Integrativas e Complementares em Saúde — Ministério da Saúde](https://www.gov.br/saude/pt-br/composicao/saps/pics/pics/)
- [Reiki — Ministério da Saúde](https://www.gov.br/saude/pt-br/composicao/saps/pics/as-praticas/reiki)
- [Reiki — National Center for Complementary and Integrative Health](https://www.nccih.nih.gov/health/reiki)

## Observação importante

Os textos comerciais e os serviços apresentados formam uma proposta editorial inicial. Eles devem ser revisados com a Marcelia antes da divulgação pública para garantir que representem corretamente sua formação, seus atendimentos e sua maneira de trabalhar.
