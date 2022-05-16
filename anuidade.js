let capital = 500.0
let taxa = 0.05

calculoTaxa = rendaComJurosCompostos = mes => {
  if (mes > 0 && mes < 13) {
    mes = mes - 1
    rendaComJurosCompostos = capital * (1 + taxa) ** mes
    return rendaComJurosCompostos.toFixed(2)
  } else {
    console.log('mes invalido')
  }
}
calculoMes = a => {
  console.log(
    `anuidade do clube = R$${capital} + juros** de ${
      taxa * 100
    }% a.m.⇢  R$${calculoTaxa(a)}`
  )
}

calculoMes(12)
