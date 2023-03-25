function porcentagemFaturamento() {
    const faturamentos = {SP: 67836.43, RJ: 36678.66, MG: 29229.88, ES: 27165.48, OUTROS: 19849.53}
    const faturamentoTotal = Object.values(faturamentos).reduce((soma, dado) => soma + dado, 0) 
    const percentuais = {}
    for (const estado in faturamentos) {
        percentuais[estado] = faturamentos[estado] * 100 / faturamentoTotal
    }
    let resumoFaturamento = ""
    for (const estado in percentuais) {
        resumoFaturamento += `Porcentagem de faturamento de ${estado}: ${percentuais[estado]}\n`
    }
    return resumoFaturamento
}