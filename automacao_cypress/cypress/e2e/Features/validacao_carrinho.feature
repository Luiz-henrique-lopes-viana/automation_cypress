Feature: Inserir carrinho

  Scenario: Validar carrinho
    Given Login e acesso ao carrinho
    When faço a verificação do produto
    Then finalizo a compra 