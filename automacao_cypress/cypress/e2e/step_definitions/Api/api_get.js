/// <reference types="cypress" />
import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

let productId = 13; // ID do produto a ser utilizado nos testes
let getProductResponse;

// Passo para fazer uma requisição GET para o endpoint de produtos
Given('que faço uma requisição GET para "/catalog/api/v1/products/13"', () => {
  const endpoint = `https://www.advantageonlineshopping.com/catalog/api/v1/products/${productId}`;

  cy.request(endpoint) // Faz a requisição GET
    .then((response) => {
      getProductResponse = response; // Armazena a resposta da requisição
    });
});

// Verifica se a resposta tem status 200
Then('a resposta deve ter status 200', () => {
  expect(getProductResponse.status).to.eq(200);
});

// Verifica se o corpo da resposta contém o ID do produto
Then('o corpo da resposta deve conter o ID do produto', () => {
  expect(getProductResponse.body).to.have.property('id', productId);
});

// Verifica se o corpo da resposta contém o nome do produto
Then('o corpo da resposta deve conter o nome do produto', () => {
  expect(getProductResponse.body).to.have.property('name');
});