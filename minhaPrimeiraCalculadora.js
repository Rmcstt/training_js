calcular = (a, soma, c) => {
  switch (soma) {
    case 'mais':
      console.log(a + c)
      break
    case 'menos':
      console.log(a - c)
      break
    case 'dividido por':
      console.log(a / c)
      break
    case 'vezes':
      console.log(a * c)
      break
    default:
      console.log('sabe digitar não ?')
  }
}

calcular(500, 'dividido por', 2)
