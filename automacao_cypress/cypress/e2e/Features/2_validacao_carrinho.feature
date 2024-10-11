Feature: Inserir carrinho

  Scenario: Validar carrinho
    Given Login e acesso ao carrinho
    When faço a verificação dos produtos no carrinho
    Then finalizo a compra