let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

juntar = (base, adicional) => {
  for (let i = 0; i < adicional.length; i++) {
    console.log(base[i])
    base.push(adicional[i])
  }
  console.log('vetor adicionado: ' + adicional)
  console.log('resultado: ' + base)
}

juntar(vetorPilha, vetorAdiciona)
