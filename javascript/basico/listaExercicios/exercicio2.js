// ESCREVA UM ALGORITIMO QUE RECEBA 4 VALORES, SOME OS DOIS PRIMEIROS COM O PRODUTO DOS DOIS ÚLTIMOS

function calcularValores(valor1, valor2, valor3, valor4){
    resultado = (valor1 * valor2) + (valor3 * valor4)
    return resultado
}

console.log(calcularValores(2, 3, 8, 5))