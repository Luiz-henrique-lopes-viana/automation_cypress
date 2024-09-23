/// <reference types="cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

let userId;
let productId = '13'; // ID do produto a ser utilizado nos testes
let newImageId;

// Passo para fazer login com usuário e senha pré-definidos
Given('que faço login com as credenciais pré-definidas', () => {
  const Username = 'luizlopeslopes'; // Nome de usuário para login
  const password = 'Teste123456'; // Senha para login

  cy.request({
    method: 'POST',
    url: 'https://advantageonlineshopping.com/api/auth/login', // URL do endpoint de login
    body: {
      Username: Username, // Envia o nome de usuário no corpo da requisição
      password: password, // Envia a senha no corpo da requisição
    },
  }).then((response) => {
    expect(response.status).to.eq(200); // Verifica se o status da resposta é 200 (OK)
    userId = response.body.userId; // Armazena o userId retornado na resposta
  });
});

// Passo para fazer uma requisição PUT para trocar a imagem do produto
When('eu faço uma requisição PUT para "/catalog/api/v1/product/image/520583219/luizlopes/ffffff?product_id=13" com a nova imagem', () => {
  const filePath = 'cypress/fixtures/tablet2024.png'; // Caminho da nova imagem

  cy.fixture(filePath, 'base64').then((fileContent) => {
    cy.request({
      method: 'PUT',
      url: `https://www.advantageonlineshopping.com/catalog/api/v1/product/image/520583219/luhenImg/ffffff?product_id=13`, // URL do endpoint para trocar a imagem do produto
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        image: fileContent, // Envia a nova imagem no corpo da requisição
      },
      failOnStatusCode: false,
    }).as('putImageRequest');
  });
});

// Verifica se a resposta tem status 200
Then('a resposta deve ter status 200', () => {
  cy.get('@putImageRequest').then((response) => {
    expect(response.status).to.eq(200);
  });
});

// Verifica se o corpo da resposta confirma a atualização da imagem
Then('o corpo da resposta deve confirmar a atualização da imagem', () => {
  cy.get('@putImageRequest').then((response) => {
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message', 'Image updated successfully');
  });
});

// Verifica se o id da nova imagem foi retornado
Then('o id da nova imagem deve ser retornado', () => {
  cy.get('@putImageRequest').then((response) => {
    expect(response.body).to.have.property('imageId');
    newImageId = response.body.imageId; // Armazena o id da nova imagem
  });
});