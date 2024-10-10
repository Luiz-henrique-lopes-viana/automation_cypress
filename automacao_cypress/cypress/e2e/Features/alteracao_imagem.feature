Feature: API de produtos

  Scenario: Trocar a imagem do produto com ID 13
    Given que faço login com as credenciais pré-definidas
    When eu faço uma requisição PUT para "/catalog/api/v1/product/image/723964127/luhenImg/ffffff?product_id=13" com a nova imagem
    Then a resposta deve ter status 200