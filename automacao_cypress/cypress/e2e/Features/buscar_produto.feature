Feature: Buscar produtos na API

  Scenario: Buscar produto específico com ID 20
    Given que eu tenho o endpoint da API de produtos
    When eu envio uma requisição GET para buscar o produto com ID 20
    Then a resposta deve ter o status 200 e o corpo da resposta deve conter o ID 20