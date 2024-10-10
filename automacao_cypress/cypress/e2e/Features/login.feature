
Feature: Login de Usuário

  Scenario: Login bem-sucedido com credenciais válidas
    Given Crio uma conta
    When valido se a conta foi criada
    Then tenho sucesso no login