Feature: Busca de Produto

  Scenario: Buscar o produto pelo ID e validar a resposta
    Given que faço uma requisição GET para "/catalog/api/v1/products/13"
    Then a resposta deve ter status 200
    And o corpo da resposta deve conter o ID do produto
    And o corpo da resposta deve conter o nome do produto