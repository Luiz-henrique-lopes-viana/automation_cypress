
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'


Given("que estou logado no sistema", () => {
    cy.visit('https://advantageonlineshopping.com')
    cy.get('#menuUserLink').click();
    cy.get('[a-hint="Username"] > .inputContainer > .ng-pristine').type('luizloppeEss');
    cy.get('[a-hint="Password"] > .inputContainer > .ng-pristine').type('*Teste123456');
    cy.get('#sign_in_btn').click();
    cy.get('#mobileSearch > .roboto-medium').type('HP ELITE X2 1011 G1 TABLET');
    cy.get('#mobileSearch > #menuSearch').click();


  });

  When("pesquiso pelo produto HP ELITE X2 1011 G1 TABLET",()=>{ 
    cy.get('#17').click();
    cy.get('.fixedBtn > .roboto-medium').click();
    cy.wait(2000);
    cy.get('li > #toolTipCart > :nth-child(1) > table > tfoot > :nth-child(2) > td > #checkOutPopUp').click();  
}); 

Then("adiciono o produto ao carrinho",()=> {
    cy.get('li > #toolTipCart > :nth-child(1) > table > tfoot > :nth-child(2) > td > #checkOutPopUp').click();  
    cy.contains('ORDER PAYMENT').should('exist');
}); 