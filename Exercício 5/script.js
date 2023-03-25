function inverteTexto(texto){
    let textoInvertido = ""
    for(let i = texto.length - 1; i >= 0; i--){
        textoInvertido += texto[i]
    }
    return `"${texto}" invertido é igual a "${textoInvertido}"`
}