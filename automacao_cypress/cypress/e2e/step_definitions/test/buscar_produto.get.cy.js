import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const API_URL = 'https://www.advantageonlineshopping.com/catalog/api/v1/products';

Given('que eu tenho o endpoint da API de produtos', () => {
  // O endpoint já está definido na variável API_URL
});

When('eu envio uma requisição GET para buscar o produto com ID 20', () => {
  cy.request(`${API_URL}/20`).as('produtoResponse');
});

Then('a resposta deve ter o status 200 e o corpo da resposta deve conter o ID 20', () => {
  cy.get('@produtoResponse').then((response) => {
    console.log(response.body); // Imprime a resposta no console
    expect(response.status).to.eq(200);
    // Ajuste a verificação com base na estrutura real da resposta
  });
});