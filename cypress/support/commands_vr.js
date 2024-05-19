const testeVRPage = require('./teste_vr_page.js')
const testeVR_Pg = new testeVRPage()

// Commands para separa os testes em blocos e por funcionalidades botões e telas

Cypress.Commands.add('seleciona_btn_compra', () => {
  cy.get(testeVR_Pg.btn_compre_online).then(($el) => {
    // Adiciona um listener temporário para capturar a URL
    cy.window().then((win) => {
      const originalOpen = win.open;
      let newUrl;

      // Intercepta a chamada ao window.open para capturar a URL
      win.open = function(url) {
        newUrl = url;
        return originalOpen.apply(win, arguments);
      };

      // Clica no elemento que dispara a nova aba
      cy.wrap($el).click();

      // Aguarda um tempo para garantir que a URL foi capturada
      cy.wait(500).then(() => {
        if (newUrl) {
          // Navega para a URL capturada na mesma aba
          cy.visit(newUrl);
        }
        // Restaura o comportamento original do window.open
        win.open = originalOpen;
      });
    });
  });
});

Cypress.Commands.add('seleciona_grid_cartoes_VR', { timeout: 7000 }, () => {

    cy.get(testeVR_Pg.btn_fechar_pop_up)
      .should('be.visible')
      .should('exist')
      .click()
  
      cy.get(testeVR_Pg.grid_cartões_vr)
      .should('be.visible')
      .should('exist')
      .should('contains.text', "Cartões VR", { matchCase: false })
      .click()

})

Cypress.Commands.add('inserir_quantidade_valor_auto', { timeout: 7000 }, (quantidade, valor) => {

    cy.get(testeVR_Pg.card_produtos)
      .should('be.visible')
      .should('exist')
      .should('contains.text', "Auto")
  
    cy.get(testeVR_Pg.quantidade_produto_auto)
      .should('be.visible')
      .should('exist')
      .type(quantidade)

      cy.get(testeVR_Pg.valor_produto_auto)
      .should('be.visible')
      .should('exist')
      .type(valor)

      cy.get(testeVR_Pg.btn_add_carrinho_auto)
      .should('be.visible')
      .should('exist')
      .should('contains.text', "Adicionar ao carrinho")
      .click()

})

Cypress.Commands.add('valida_produto_adicionado_carrinho', { timeout: 7000 }, (quantidade, valor, valorTotal) => {

    cy.get(testeVR_Pg.flag_carrinho_compra)
      .should('be.visible')
      .should('exist')
  
    cy.get(testeVR_Pg.conteudo_card)
      .should('be.visible')
      .should('exist')
      .should('contains.text', "Produto adicionado!")

      cy.get(testeVR_Pg.btn_seguir_carrinho)
      .should('be.visible')
      .should('exist')
      .should('contains.text', "Seguir para o carrinho")

      cy.get(testeVR_Pg.btn_icone_carrinho)
      .should('be.visible')
      .should('exist')
      .click()

      cy.get(testeVR_Pg.titulo_produto_carrinho)
      .should('be.visible')
      .should('exist')
      .should('contains.text', "Auto")

      cy.get(testeVR_Pg.valor_produto_carrinho)
      .should('be.visible')
      .should('exist')
      .should('contain.text', "Valor por cartão")
      .should('contain.text', valor)

      cy.get(testeVR_Pg.quantidade_produto_carrinho)
      .should('be.visible')
      .should('exist')
      .should('contains.text', "Quantidade cartões"+quantidade , { matchCase: false })
      
      cy.get(testeVR_Pg.valor_total_carrinho)
      .should('be.visible')
      .should('exist')
      .should('contain.text', "Total parcial")
      .should('contain.text', valorTotal)

})
