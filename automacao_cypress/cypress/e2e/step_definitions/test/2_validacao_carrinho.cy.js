import { Given, When, Then, } from 'cypress-cucumber-preprocessor/steps'

Given("Login e acesso ao carrinho", () => {
          cy.visit('https://advantageonlineshopping.com')
          cy.get('#menuUserLink').click();
          cy.get('[a-hint="Username"] > .inputContainer > .ng-pristine').type('LuizLopestesteqa');
          cy.get('[a-hint="Password"] > .inputContainer > .ng-pristine').type('*Teste123456');
          cy.get('#sign_in_btn').click();
          cy.get('#mobileSearch > .roboto-medium').type('tablet');
          cy.get('#mobileSearch > #menuSearch').click();


        });
      
When("faço a verificação dos produtos no carrinho",()=>{ 
  cy.get(':nth-child(1) > :nth-child(4) > .productName').click();
  cy.contains(' HP ELITEPAD 1000 G2 TABLET ').should('exist');
  cy.get('#Description > :nth-child(2)').should('contain', '$1,009.00');
  cy.get('.fixedBtn > .roboto-medium').click();
  cy.get('[href=""]').click();
  cy.get(':nth-child(3) > :nth-child(4) > .productName').click();
  cy.contains(' HP PRO TABLET 608 G1').should('exist');
  cy.get('#Description > :nth-child(2)').should('contain', '$479.00');
   cy.xpath('//*[@id="productProperties"]/div[4]/button').click({ force: true });
   cy.get('li > #toolTipCart > :nth-child(1) > table > tfoot > :nth-child(2) > td > #checkOutPopUp').click();

      });
      Then("finalizo a compra", () => {
        cy.wait(4000);
        // Valores dos produtos
        const valorProduto1 = 1009.00;
        const valorProduto2 = 479.00;
        const taxa = 50.00;
        // Calcular o valor total esperado
        const valorTotalEsperado = valorProduto1 + valorProduto2 + taxa;
        // Obter o valor total exibido na página de checkout
        cy.get('.roboto-bold > .roboto-medium') 
          .invoke('text')
          .then((text) => {
            const valorTotalExibido = parseFloat(text.replace('$', '').replace(',', ''));
            expect(valorTotalExibido).to.eq(valorTotalEsperado);
          });
      });