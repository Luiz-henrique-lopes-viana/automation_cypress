import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given("que acesso na página de Login", () => {
    cy.visit('https://advantageonlineshopping.com')
})

When("defino meu usuário e senha",()=>{
    cy.get('#menuUserLink').click()
    cy.get('[a-hint="Username"] > .inputContainer > .ng-pristine').type('luizlopes')
    cy.get('[a-hint="Password"] > .inputContainer > .ng-pristine').type('Teste123456')
    cy.get('#sign_in_btn').click()
})

Then("tenho sucesso no login",()=> {
    cy.get('.logo > a')
})
