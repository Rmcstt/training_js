planoDeTrabalho = (S, plano) => {
  switch (plano) {
    case 'a':
      console.log('seu salario sera de :', S + S * 0.1)
      break
    case 'b':
      console.log('seu salario sera de :', S + S * 0.15)
      break
    case 'c':
      console.log('seu salario sera de :', S + S * 0.2)
      break
    default:
      console.log('nao especificado')
  }
}

planoDeTrabalho(1250, 'a')
