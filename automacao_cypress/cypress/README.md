# Projeto de Testes Automatizados - Inmetrics

Este projeto implementa testes automatizados para o site **Advantage Online Shopping**. Os testes abrangem tanto a interface web quanto a API, utilizando a metodologia BDD com Cucumber e Cypress.

## Tecnologias Utilizadas

- **Cucumber**: Utilizado para escrever cenários de teste seguindo a metodologia BDD.
- **Cypress**: Framework de testes de integração para aplicações web.

## Dependências

- "cypress-cucumber-preprocessor": "^4.3.1"
- "cypress": "^13.14.2"
- "cypress-file-upload": "^5.0.8"

## Configuração do Ambiente

1. Instale o Node.js.
2. Escolha uma IDE de JavaScript para programar (recomendamos o Visual Studio Code).
3. Instale o Cypress e o Cucumber executando os seguintes comandos na raiz da pasta do seu projeto:

```bash


Este README.md atualizado fornece uma explicação clara das tecnologias utilizadas, como configurar o ambiente e como executar os testes, além de incluir os comandos necessários para instalar o Cypress com Cucumber.

npm install cypress --save-dev
npm install cypress-cucumber-preprocessor --save-dev
npm install cypress-file-upload --save-dev

para rodar o projeto
npx cypress run --browser chrome --no-exit
npm run test:chrome


#bdd_api

foi inserido os teste com postman e teste funcional na pasta bdd_api
