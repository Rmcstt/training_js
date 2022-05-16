Preco = (N, prod) => {
  switch (prod) {
    case 100:
      return `${extenso(N)} hotdog R$${(N * 3.0).toFixed(2).replace('.', ',')}`
      break
    case 200:
      return `${extenso(N)} hamburguer R$${(N * 4)
        .toFixed(2)
        .replace('.', ',')}`
      break
    case 300:
      return `${extenso(N)} cheeseburguer R$${(N * 5.5)
        .toFixed(2)
        .replace('.', ',')}`
      break
    case 400:
      return `${extenso(N)} bauru R$${(N * 7.5).toFixed(2).replace('.', ',')}`
      break
    case 500:
      return `${extenso(N)} suco R$${(N * 3.5).toFixed(2).replace('.', ',')}`
      break
    case 600:
      return `${extenso(N)} refrigerante R${
        ('refrigerante', 'R$', (N * 2.8).toFixed(2).replace('.', ','))
      }`

      break
    default:
      return `invalido`
  }
}
extenso = a => {
  switch (a) {
    case 0:
      return `zero`
      break
    case 1:
      return `um`
      break
    case 2:
      return `dois`
      break
    case 3:
      return `tres`
      break
    case 4:
      return `quatro`
      break
    case 5:
      return `cinco`
      break
    case 6:
      return `seis`
      break
    case 7:
      return `sete`
      break
    case 8:
      return `oito`
      break
    case 9:
      return `nove`
      break
    case 10:
      return `dez`
      break
    case 11:
      return `onze`
      break
    case 12:
      return `doze`
      break
    case 13:
      return `treze`
    case 14:
      return `quatorze`
      break
    case 15:
      return `quinze`
    case 16:
      return `desesseis`
      break
    case 17:
      return `desessete`
      break
    case 18:
      return `dezoito`
      break
    case 19:
      return `desenove`
    case 20:
      return `vinte`
  }
}

console.log(Preco(15, 300))

//muito feliz pois consegui juntar duas funções "sozinho !!!"
