negativos = vector => {
  let menos = 0
  for (let i = 0; i < vector.length; i++) {
    if (vector[i] < 0) {
      menos++
    }
  }
  return `quantidade de negativos: ${menos}`
}

vector = [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]

console.log(negativos(vector))
