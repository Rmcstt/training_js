function minhaArray(vetor) {
  let impar = 0

  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] % 2 == 0) {
      impar++
    }
  }
  console.log(impar)
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//minhaArray(vetor)

minhaArray2 = vetor2 => {
  let max = 60
  let min = 1

  let valor = Math.random() * (max - min) + min
  let valor1 = Math.random() * (max - min) + min
  let valor2 = Math.random() * (max - min) + min
  let valor3 = Math.random() * (max - min) + min
  let valor4 = Math.random() * (max - min) + min
  let valor5 = Math.random() * (max - min) + min

  mecanismo = []
  for (let i = 0; i < vetor2.length; i++) {
    if (vetor2[i] == 1) {
      mecanismo.push(Math.floor(valor))
    } else if (vetor2[i] == 2) {
      mecanismo.push(Math.floor(valor1))
    } else if (vetor2[i] == 3) {
      mecanismo.push(Math.floor(valor2))
    } else if (vetor2[i] == 4) {
      mecanismo.push(Math.floor(valor3))
    } else if (vetor2[i] == 5) {
      mecanismo.push(Math.floor(valor4))
    } else if (vetor2[i] == 6) {
      mecanismo.push(Math.floor(valor5))
    } else {
      mecanismo.push('invalido')
    }
  }
  return mecanismo
}

vetor2 = [1, 2, 3, 4, 5, 6]
//console.log('joga na mega', minhaArray2(vetor2))
////////////////

function megaVirada(sorte) {
  let resultadoMega = []
  let max = 61
  let min = 1
  sorte.forEach(() => {
    resultadoMega.push(Math.floor(Math.random() * (max - min) + min))
  })

  return resultadoMega
}
sorte = [1, 2, 3, 4, 5, 6]

joga = () => {
  console.log('joga na mega', megaVirada(sorte.sort()))
}

joga()
