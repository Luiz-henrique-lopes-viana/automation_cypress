/// <reference types="cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
//ALTERAR ID DO USUARIO E O BEARER TOKEN
const API_URL = 'https://www.advantageonlineshopping.com/catalog/api/v1/product/image/571335369/images/414141?product_id=20';
const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3d3cuYWR2YW50YWdlb25saW5lc2hvcHBpbmcuY29tIiwidXNlcklkIjo1NzEzMzUzNjksInN1YiI6Imx1aXpsb3BwZUVzc3MiLCJyb2xlIjoiVVNFUiJ9.JkM29q6gYvt2Rq1b2N62l46cGkSqEPoJdUZalDQtZUg';

Given('que eu tenho o endpoint da API para enviar a imagem do produto', () => {
});

When('eu envio a imagem do tablet para o produto', () => {
  cy.fixture('widowns.jpg', 'base64').then((imageBase64) => {
    const formData = new FormData();
    const blob = Cypress.Blob.base64StringToBlob(imageBase64, 'image/jpeg');
    formData.append('file', blob, '4k-laptop-black-windows-10-t66zeddgrctl86s2.jpg');

    cy.request({
      method: 'POST',
      url: API_URL,
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${TOKEN}`
      },
      body: formData,
      failOnStatusCode: false 
    }).then((response) => {

      console.log(response);
      cy.wrap(response).as('trocaImagemResponse');
    });
  });
});

Then('a resposta deve ter o status 200', () => {
  cy.get('@trocaImagemResponse').then((response) => {

    console.log(response);
    expect(response.status).to.eq(200);
  });
});