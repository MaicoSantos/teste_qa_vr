/// <reference types="Cypress" />

const busca_sucesso = "Conta"
const busca_inexistente = "123@$!XPTO"

describe('VR - Testes', () => {

    beforeEach(() => {

        cy.visit('https://www.vr.com.br/', {
            onBeforeLoad: (win) => {
                win.sessionStorage.clear()
                win.onerror = null
            }
        })
    })

    afterEach(() => {
        
        cy.screenshot()
    })

    it('Adicionar Cartão VR Auto ao Carrinho de compras', () => {

        cy.pesquisar_conteudo(busca_sucesso)
        cy.valida_pesquisa_sucesso(busca_sucesso)
    });

})
