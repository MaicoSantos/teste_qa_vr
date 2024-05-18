/// <reference types="Cypress" />
const fakerBr = require('faker-br');
const faker = require('faker');

const qtd = faker.random.number({ max: 300 })
const valor = fakerBr.finance.amount()
const valor_formatado = valor.replace('.', ',');
const valor_total = qtd * valor;
const valor_total_formatado = valor_total.toLocaleString('pt-BR')

describe('VR - Testes', () => {

    beforeEach(() => {

        cy.visit('https://www.vr.com.br/')
        // , {
        // //     // onBeforeLoad: (win) => {
        // //     //     win.sessionStorage.clear()
        //     // }
        // })
    })

    afterEach(() => {
        
        // cy.screenshot()
    })

    it('Adicionar Cartão VR Auto ao Carrinho de compras', () => {
          console.log("quantidade"+ qtd)
          console.log("valor"+ valor_formatado)
          console.log("valorTotal"+ valor_total_formatado + " SOMA:" + qtd*valor)
        cy.seleciona_btn_compra()
        // cy.clickAndOpenInSameTab()
        cy.seleciona_grid_cartoes_VR()
        cy.inserir_quantidade_valor_auto(qtd, valor_formatado)
        cy.valida_produto_adicionado_carrinho(qtd, valor_formatado, valor_total_formatado)
    });

})
