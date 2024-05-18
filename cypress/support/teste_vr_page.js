class testeVRPage {
    constructor() {

        this.btn_compre_online = "#buttonCompreOnline"

        this.btn_fechar_pop_up = "button.close-button"

        //data-testid="shelf-product-container-modalidade-avulso"
        // #produto-auto-quantidade
        //#produto-auto-valor
        //#btn-adicionar-carrinho-auto
        //btn-seguir-carrinho-auto
        //.product-in-cart-view__flag
        //.product-in-cart-view__content Produto adicionado!
//btn-meu-carrinho
//.product-title__information
//.product-information__value
//.product-information__amount
//.information__total-value


        this.input_pesquisa = "#search-field"
        this.btn_enviar_pesuqisa = " button[class='search-submit ast-search-submit']"
        this.titulo_busca = ".page-title"
        this.subtitulo_busca = ".rank-math-breadcrumb"
        this.post = ".ast-row"
        this.busca_nao_encontrada = "#main > section.no-results.not-found"
        this.msg_busca_nao_encontrada = ".page-content > p"

    }
}

module.exports = testeVRPage
