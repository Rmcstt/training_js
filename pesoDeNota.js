tresNotas = (nota1, nota2, nota3) => {
  media = nota1 * 0.3 + nota2 * 0.3 + nota3 * 0.4
  return console.log(`${aprovadoOuNao(media)} ${media}`)
}

aprovadoOuNao = a => {
  if (a >= 5) {
    return `aprovado com media`
  } else if (a < 5) {
    return `reprovado com media`
  } else {
    return `sem nota`
  }
}
tresNotas(0, 0, 10)
tresNotas(9, 0, 10)
tresNotas(8, 0, 6)
tresNotas(8, 0, 10)
tresNotas(0, 10, 10)
tresNotas(10, 10, 0)
// esse eu me matei kkk porem eu gostei de resolver sozinho!!!
