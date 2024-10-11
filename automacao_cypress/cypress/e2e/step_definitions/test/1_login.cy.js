import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given("Crio uma conta", () => {
    cy.visit('https://advantageonlineshopping.com');
    cy.get('#menuUserLink').click();
    cy.get('.create-new-account').click();
    //ALTERAR O NOME CASO CRIAR NOVA CONTA PARA RODAR O TESTE//
    cy.get(':nth-child(2) > [a-hint="Username"] > .inputContainer > label').type('LuizLopestesteqa');

    ///^^ ALTERAR A CIMA ^^///
    cy.get('[sec-name="userEmail"] > .inputContainer > label').type('luizZz@teste.com');
    cy.get(':nth-child(3) > [a-hint="Password"] > .inputContainer > label').type('*Teste123456');
    cy.get('[a-hint="Confirm password"] > .inputContainer > label').type('*Teste123456');
    cy.get('[sec-name="userFirstName"] > .inputContainer > label').type('Luiz Henrique');
    cy.get('[sec-name="userLastName"] > .inputContainer > label').type('Lopes');
    cy.get(':nth-child(2) > :nth-child(3) > .ng-isolate-scope > .inputContainer > label').type('1140028922');
    cy.get('[sec-name="userCountry"] > .inputContainer > .ng-valid').select('Brazil');
    cy.get('[sec-name="userCity"] > .inputContainer > label').type('São Paulo');
    cy.get('[sec-name="userAdress"] > .inputContainer > label').type('Rua Teste');
    cy.get('[sec-name="userState"] > .inputContainer > label').type('São Paulo');
    cy.get('[sec-name="registrationAgreement"] > .inputContainer > .ng-pristine').click();
})

When("valido se a conta foi criada",()=>{
    cy.get('#register_btn').click();
    cy.contains('CREATE ACCOUNT').should('be.visible');
})

Then("tenho sucesso no login",()=> {
    cy.get('.logo > a').click();
})
