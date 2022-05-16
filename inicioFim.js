function imprimirImpares(fim = 100, inicio = 0) {
  if (inicio > fim) {
    inicio = fim + inicio
    fim = inicio - fim
    inicio = inicio - fim
  }

  for (let i = inicio; i <= fim; i++) {
    if (i % 2 == 1) {
      console.log(i)
    } else if (i % 2 == 0) {
      console.log(i)
    }
  }
}

imprimirImpares(19, 3)
