class testeVRPage {
    constructor() {
        
        // Mapeamento dos elementos da tela
        this.btn_compre_online = "#buttonCompreOnline"
        this.btn_fechar_pop_up = "button.close-button"
        this.grid_cartões_vr = "[data-testid='shelf-product-container-modalidade-avulso']"
        this.quantidade_produto_auto = "#produto-auto-quantidade"
        this.valor_produto_auto = "#produto-auto-valor"
        this.btn_add_carrinho_auto = "#btn-adicionar-carrinho-auto"
        this.btn_seguir_carrinho = "#btn-seguir-carrinho-auto"
        this.flag_carrinho_compra = ".product-in-cart-view__flag"
        this.conteudo_card = ".product-in-cart-view__content"
        this.btn_icone_carrinho = "#btn-meu-carrinho"
        this.titulo_produto_carrinho = ".product-title__information"
        this.valor_produto_carrinho = ".product-information__value"
        this.quantidade_produto_carrinho = ".product-information__amount"
        this.valor_total_carrinho = ".footer__information"
        this.card_produtos = ".indvidual-products-page__content"

    }
}

module.exports = testeVRPage
