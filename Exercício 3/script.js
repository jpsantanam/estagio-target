function faturamentoMain(){
    fetch('dados.json')
        .then(response => response.json())
        .then(dados => console.log(faturamento(dados)))
        .catch(error => console.log(error));
}
function faturamento(dados){
    dados.sort((dadoA, dadoB) => dadoA.valor - dadoB.valor)
    const dadosFiltrados = dados.filter(dado => dado.valor > 0)
    const faturamentoMedio = dadosFiltrados.reduce((soma, dado) => soma + dado.valor / dadosFiltrados.length, 0)
    const diasFaturamentoSuperior = dadosFiltrados.filter(dado =>dado.valor > faturamentoMedio).length

    const menorFaturamento = dados[0].valor;
    const menorFaturamentoFiltrado = dadosFiltrados[0].valor;
    const maiorFaturamento = dadosFiltrados[dadosFiltrados.length - 1].valor

    return `Menor valor de faturamento total: ${menorFaturamento}
Menor valor de faturamento filtrado: ${menorFaturamentoFiltrado}
Maior valor de faturamento: ${maiorFaturamento}
Número de dias com faturamento superior à média mensal: ${diasFaturamentoSuperior}`
}