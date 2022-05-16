cota = idade => {
  if (idade < 10) {
    return 180
  } else if (idade < 30) {
    return 150
  } else if (idade < 60) {
    return 195
  } else if (idade > 60) {
    return 230
  }
}

idadePlano = a => {
  console.log(
    `valor para essa idade é de R$`,
    cota(a).toFixed(2).replace('.', ',')
  )
}

idadePlano(80)
