bank1 = rendaComJuros = (capital, taxa = 0.02, meses = 12) => {
  rendaComJuros = `R$ ${capital + capital * taxa * meses}`
  console.log('capital:', capital, '→', 'poupado', '→', rendaComJuros)
}

bank1(500.0)

bank2 = rendaComJurosCompostos = (capital, taxa = 0.02, meses = 12) => {
  rendaComJurosCompostos = `R$ ${capital * (1 + taxa) ** meses}`
  console.log('capital:', capital, '→', 'poupado', '→', rendaComJurosCompostos)
}

bank2(500)
//capital: 500 → poupado → R$ 620
//capital: 500 → poupado → R$ 634.12
