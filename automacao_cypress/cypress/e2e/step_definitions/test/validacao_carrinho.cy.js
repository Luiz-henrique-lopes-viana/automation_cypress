import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given("Login e acesso ao carrinho", () => {
          cy.visit('https://advantageonlineshopping.com')
          cy.get('#menuUserLink').click();
          cy.get('[a-hint="Username"] > .inputContainer > .ng-pristine').type('luizlopes');
          cy.get('[a-hint="Password"] > .inputContainer > .ng-pristine').type('Teste123456');
          cy.get('#sign_in_btn').click();
          cy.get('#mobileSearch > .roboto-medium').type('tablet');
          cy.get('svg[data-ng-click="goToCategoryPage()"]').click();
          cy.get(':nth-child(1) > :nth-child(4) > .productName').click();
          cy.get('.fixedBtn > .roboto-medium')

        });
      
When("faço a verificação do produto",()=>{ 
    cy.get('#shoppingCartLink').click();
    cy.get(':nth-child(6) > .price')
      .should('exist') 
      .and('be.visible'); 

      });

Then("finalizo a compra",()=> {
    cy.get('#checkOutButton').click();
    cy.get('.mobileBtnHandler > #next_btn').click();
});