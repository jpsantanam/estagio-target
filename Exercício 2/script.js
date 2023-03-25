function fibonacci(numero){
    if(typeof numero != "number"){
        return "Não é um número"
    }
    if(numero < 0){
        return `O número ${numero} NÃO pertece a sequência`
    }
    const vetorFibonacci = [0, 1]
    let ultimaPosicao = vetorFibonacci[vetorFibonacci.length - 1]
    let penultimaPosicao = vetorFibonacci[vetorFibonacci.length - 2]
    
    while(ultimaPosicao < numero){
        vetorFibonacci.push(ultimaPosicao + penultimaPosicao)
        ultimaPosicao = vetorFibonacci[vetorFibonacci.length - 1]
        penultimaPosicao = vetorFibonacci[vetorFibonacci.length - 2]
    }
    if(vetorFibonacci.indexOf(numero) >= 0){
        return `O número ${numero} pertece a sequência`
    }
    return `O número ${numero} NÃO pertece a sequência`
}