meVende = fruta => {
  switch (fruta) {
    case 'maca':
      console.log('nao vendemos maca aqui')
      break
    case 'kiwi':
      console.log('estamos com escacez de kiwi')
      break
    case 'melancia':
      console.log('sao 3 reais o quilo')
      break
    default:
      console.log('vc esta falando nada com nada amigo')
  }
}

meVende('oiiuoi')
