const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://advantageonlineshopping.com', // URL da aplicação a ser testada
    specPattern: 'cypress/e2e/Features/*.{feature,js}', // Padrão para localizar arquivos de teste (arquivos .feature e .js)
    supportFile: 'cypress/support/index.js', // Caminho para o arquivo de suporte que será carregado antes dos testes
    setupNodeEvents(on, config) {
      // Configura o preprocessor para interpretar arquivos Cucumber
      on('file:preprocessor', cucumber());
    },
  },
});