// ESCREVA UM ALGORITIMO PARA CALCULAR O DESCONTO DE 10% SOBRE O PREÇO DE COMPRA DE UM PRODUTO (UM BEM, UM PROJETO) APRESENTE O PREÇO DA TELA

function calcularDesconto(preco){
    const precoProduto = preco
    const desconto = precoProduto * 0.10;
    const preçoFinal = precoProduto - desconto
    
    console.log(`Preço do Produto: R$ ${precoProduto.toFixed(2)}\nDesconto: R$ ${desconto.toFixed(2)}\nValor a pagar: R$ ${preçoFinal.toFixed(2)}`)
}

const preco = 437
calcularDesconto(preco)