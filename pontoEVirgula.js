formatarValorDecimal = valorDecimal => {
  valorEmReais = `R$ ${valorDecimal.toFixed(2).replace('.', ',')}`
  console.log(valorEmReais)
}
formatarValorDecimal(0.2 + 0.1)
//R$ 0,30
