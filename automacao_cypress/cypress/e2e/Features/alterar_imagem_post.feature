Feature: Enviar uma nova imagem para o produto na API

  Scenario: Enviar uma nova imagem para o produto com ID 20
    Given que eu tenho o endpoint da API para enviar a imagem do produto
    When eu envio a imagem do tablet para o produto
    Then a resposta deve ter o status 200