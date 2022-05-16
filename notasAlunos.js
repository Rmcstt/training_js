//corrigido haha
function aprovadoOuNao(nota) {
  let notaCorrigida = arredondar(nota)
  if (nota >= 40) {
    console.log(`aprovado com nota ${notaCorrigida}`)
  } else {
    console.log(`reprovado com nota ${nota}`)
  }
}

arredondar = nota => {
  if (nota % 5 > 2) {
    return nota + (5 - (nota % 5))
  } else {
    return nota
  }
}
aprovadoOuNao(100)
aprovadoOuNao(30)
aprovadoOuNao(38)
aprovadoOuNao(88)
aprovadoOuNao(61)
