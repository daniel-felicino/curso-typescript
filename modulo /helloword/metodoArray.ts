type array = {

  nome: string,
  sobrenome: string,
  cidade: string,
}

function acessoArray(paremetro: array) {

  for (var  i = 0; i < acessoArray.length; i++) {

    console.log(`Os paramentros são : ${paremetro} `)
  }
}
acessoArray({nome:'Daniel',sobrenome:"Silva",cidade:'Uberaba'})


 var animais:string[] = ['abelha','cão','gato','elefante','baleia']
// var insetos:string[] = ['pernelongo','barata','mosca','formiga','aranha']

// animais.pop()
// console.log()
// animais.push('leão')
// console.log(animais)
// animais.sort()
// console.log(animais)
//  var instos = ['pernelongo','barata','mosca','formiga','aranha']
// var e = animais.concat(instos)
//  console.log(e)

// console.log(animais.shift())

// console.log(animais.splice(0,1))
// console.log(animais.splice(1,0,'daniel'))
// console.log(animais.splice(2,2))
animais.unshift('daniel')
console.log( animais)

// console.log(animais.slice(1,4))

// console.log(animais.toString())


