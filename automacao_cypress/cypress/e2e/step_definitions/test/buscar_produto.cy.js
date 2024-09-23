import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given("que faço a pesquisa do produto", () => {
          cy.visit('https://advantageonlineshopping.com')
          cy.get('#mobileSearch > .roboto-medium').type('laptops'); 
        });
      

When("clico no produto desejado",()=>{
    cy.get('svg[data-ng-click="goToCategoryPage()"]').click()
});


Then("adiciono o produto no carrinho",()=> {
    cy.get(':nth-child(1) > :nth-child(4) > .productName').click()
});
