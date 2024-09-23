/// <reference types="cypress" 
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

// cypress/support/index.js

// Comandos personalizados podem ser adicionados aqui

// cypress/support/index.js

// Comando de login
Cypress.Commands.add('login', (email, password) => {
  cy.visit('https://advantageonlineshopping.com');
  cy.get('#menuUserLink').click()
    cy.get('[a-hint="Username"] > .inputContainer > .ng-pristine').type('luizlopeslopes')
    cy.get('[a-hint="Password"] > .inputContainer > .ng-pristine').type('Teste123456')
    cy.get('#sign_in_btn').click()
});



