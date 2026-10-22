# 🏁 FlagQuiz

Quiz interativo de bandeiras de países, desenvolvido com **Angular** e estilizado com **Tailwind CSS**.

> Teste seus conhecimentos de geografia e veja quantas bandeiras você consegue identificar.

[![Netlify Status](https://api.netlify.com/api/v1/badges/0be36565-ce90-4912-a315-7b4cb2ce4450/deploy-status)](https://app.netlify.com/projects/flagquiz-live/deploys)

<!-- Se tiver deploy, adicione aqui: [Ver demo](https://seu-link) -->

## 📋 Sobre o projeto

O FlagQuiz é uma aplicação web de página única (SPA) em que o jogador é desafiado a reconhecer bandeiras de países. O projeto foi gerado com o [Angular CLI](https://github.com/angular/angular-cli) (versão 22.1.8) e usa o ecossistema moderno do Angular, com testes unitários em Vitest.

## 🛠️ Tecnologias

- [Angular 22](https://angular.dev/) (core, router, forms)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/) via PostCSS
- [RxJS](https://rxjs.dev/)
- [Vitest](https://vitest.dev/) + jsdom para testes unitários
- [Prettier](https://prettier.io/) e EditorConfig para padronização de código

## ✅ Pré-requisitos

- [Node.js](https://nodejs.org/) em uma versão LTS recente (compatível com Angular 22)
- npm (o projeto declara `npm@12.0.2` em `packageManager`)

## 🚀 Como executar

1. Clone o repositório:

   ```bash
   git clone https://github.com/lucassrlkz/flag-quiz.git
   cd flag-quiz
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   ```

4. Abra [http://localhost:4200](http://localhost:4200) no navegador. A aplicação recarrega automaticamente a cada alteração nos arquivos.

## 📜 Scripts disponíveis

| Comando         | Descrição                                                        |
| --------------- | ---------------------------------------------------------------- |
| `npm start`     | Sobe o servidor de desenvolvimento (`ng serve`)                  |
| `npm run build` | Gera o build de produção na pasta `dist/`                        |
| `npm run watch` | Recompila automaticamente em modo de desenvolvimento             |
| `npm test`      | Executa os testes unitários com Vitest (`ng test`)               |

## 📁 Estrutura do projeto

```
flag-quiz/
├── .vscode/            # Configurações do editor
├── public/             # Arquivos estáticos
├── src/                # Código-fonte da aplicação
├── angular.json        # Configuração do Angular CLI
├── package.json        # Dependências e scripts
├── tsconfig*.json      # Configurações do TypeScript
├── .postcssrc.json     # Configuração do PostCSS / Tailwind
├── .prettierrc         # Regras de formatação
└── .editorconfig       # Padronização do editor
```

## 🧪 Testes

Para rodar os testes unitários:

```bash
npm test
```

## 🏗️ Build de produção

```bash
npm run build
```

Os arquivos otimizados serão gerados em `dist/`.

## 🧱 Gerando novos componentes

O Angular CLI possui schematics para acelerar o desenvolvimento:

```bash
ng generate component nome-do-componente
```

Para ver todas as opções disponíveis:

```bash
ng generate --help
```

## 🤝 Contribuindo

Contribuições são bem-vindas!

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/minha-feature`)
3. Faça commit das alterações (`git commit -m 'Adiciona minha feature'`)
4. Envie para a branch (`git push origin feature/minha-feature`)
5. Abra um Pull Request

## 👤 Autor

Feito por [Lucas](https://github.com/lucassrlkz).
Email contato.lucassilva97@gmail.com

## 📄 Licença