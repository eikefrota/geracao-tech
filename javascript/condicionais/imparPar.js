function ImparOuPar(numero){
    if (numero === 0){
        console.log("O número é zero!")
    }
    else if (numero % 2 == 0){
        console.log("O número é par!")
    }
    else{
        console.log("O número é impar!")
    }
}

ImparOuPar(12345)