let vetor = [1, 2, 3, 4, 5, 6]

function multiplicaVetor(vetor, multiplicador) {
  let vetorResultado = []
  vetor.forEach(elemento => {
    vetorResultado.push(elemento * multiplicador)
  })

  return vetorResultado
}

console.log(multiplicaVetor(vetor, 30))
