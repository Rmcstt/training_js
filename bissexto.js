bissexto = ano => {
  if (ano <= 0) {
    console.log('invalido')
  } else if (ano % 100 == 0) {
    console.log('nao')
  } else if (ano % 400 == 0) {
    console.log('sim')
  } else if (ano % 4 == 0) {
    console.log('sim')
  } else {
    console.log('nao')
  }
}
bissexto(92)
