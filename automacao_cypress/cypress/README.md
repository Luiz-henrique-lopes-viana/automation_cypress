#  Automação de Testes  

Este projeto foi desenvolvido para automatizar os testes do site **Advantage Online Shopping**, cobrindo tanto a interface web quanto as APIs. Ele segue a metodologia BDD, utilizando Cucumber e Cypress para a implementação dos testes.

## Ferramentas 

- **Cucumber**: Usado para escrever cenários de teste baseados em BDD.
- **Cypress**: Framework de testes de integração voltado para aplicações web.

## Principais Dependências

- "cypress-cucumber-preprocessor": "^4.3.1"
- "cypress": "^13.14.2"
- "cypress-file-upload": "^5.0.8"

## Configuração do Ambiente

1. Instale o Node.js em sua máquina.
2. Utilize uma IDE de JavaScript para o desenvolvimento (Visual Studio Code é recomendado).
3. Instale o Cypress e o Cucumber rodando os seguintes comandos no diretório raiz do projeto:

npm install cypress cypress-cucumber-preprocessor cypress-file-upload


Este README.md atualizado fornece uma explicação clara das tecnologias utilizadas, como configurar o ambiente e como executar os testes, além de incluir os comandos necessários para instalar o Cypress com Cucumber.

npm install cypress --save-dev
npm install cypress-cucumber-preprocessor --save-dev
npm install cypress-file-upload --save-dev

para rodar o projeto
npx cypress run --browser chrome --no-exit
npm run test:chrome
npm install -D cypress-xpath