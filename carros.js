let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['gol bola', 'palio', 'corsa', 'focus']
let vetorDouble = [1.0, 1.6, 1.8, 2.0]

function concatenar(...args) {
  resultado = []
  for (let i = 0; i < arguments.length; i++) {
    resultado = resultado.concat(arguments[i])
  }
  return resultado
}

console.log(concatenar(vetorString, vetorDouble))
