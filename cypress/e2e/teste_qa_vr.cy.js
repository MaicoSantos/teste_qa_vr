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
    })

    afterEach(() => {
        cy.screenshot()
    })

    it('Adicionar Cartão VR Auto ao Carrinho de compras', () => {
        cy.seleciona_btn_compra()
        cy.seleciona_grid_cartoes_VR()
        cy.inserir_quantidade_valor_auto(qtd, valor_formatado)
        cy.valida_produto_adicionado_carrinho(qtd, valor_formatado, valor_total_formatado)
    });

})
