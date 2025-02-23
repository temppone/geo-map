# Projeto de visualização da evolução populacional

## Visão geral

Aplicação frontend desenvolvida para visualizar a evolução populacional entre diferentes bairros de uma cidade. Este projeto demonstra habilidades de desenvolvimento React com ferramentas e práticas modernas.

## Stack técnica

- React 18
  - Hooks personalizados para gerenciamento de estado
  - Lazy loading e Code splitting
- Chakra UI
  - Sistema de design consistente
  - Temas customizáveis
  - Componentes acessíveis (WAI-ARIA)
- React Query v4
  - Cache otimizado
  - Gerenciamento de estado servidor
  - Revalidação automática
- Recharts
  - Gráficos responsivos
  - Customização avançada de visualizações
  - Suporte a animações
- i18n
  - Suporte multi-idioma
  - Formatação de números e datas
- Vitest + React Testing Library
  - Testes unitários
  - Testes de integração
  - Cobertura de código

## Endpoints da API

A aplicação consome dois endpoints principais:

- `GET /bairros-geojson` - Fornece dados geométricos dos bairros
- `GET /populacao` - Fornece dados populacionais

Exemplos de respostas podem ser encontrados em `src/backend/`.

## Funcionalidades

- Visualização do mapa com limites dos bairros
- Visualização da evolução populacional para bairros selecionados
- Design responsivo com componentes do Chakra UI
- Otimização de requisições com React Query
- Suporte à internacionalização

## Começando

### Pré-requisitos

- Node.js 18+

### Instalação

```bash
# Usando nvm para gerenciamento de versão do Node
nvm install
nvm use

# Instalando dependências
npm install

# Iniciando servidor de desenvolvimento
npm run dev
```

## Testes

Testes escritos usando Vitest e React Testing Library

```bash
npm run test
```

## Scripts disponíveis

```bash
# Desenvolvimento
npm run dev        # Inicia servidor de desenvolvimento
npm run build      # Build de produção
npm run preview    # Preview da build

# Qualidade de Código
npm run lint       # Executa ESLint

# Testes
npm run test       # Executa testes
```

## Estrutura do projeto

```
src/
├── backend/       # Backend com dados mockados
├── constants/     # Variáveis globais constante
├── components/    # Componentes reutilizáveis
├── i18n/          # Configurações do i18n
├── pages/         # Páginas do projeto
├── services/      # Serviços, hooks e API
├── tests/         # Configurações e utils de tests
```
