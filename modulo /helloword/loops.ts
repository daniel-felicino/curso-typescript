const NumeroMax = 10;
let contador = 10;
if (contador < NumeroMax) {
    contador++
}
console.log(contador)

const idadeDirigir = 19;

if (idadeDirigir <= 18) {
    console.log('sem permição para dirigir ')
} else {
    console.log('Permitido')
}

//OPERADOR TERNARIO ?

const idadeparavotar = 17
const podevatar = (idadeparavotar < 18) ? ('Não vota') : ('Vota')
console.log(podevatar)



var flor = ['flor', 'rosa', 'violeta', 'girasol']
for (var i of flor) {
    console.log(i)
}
for (var i of flor) {
    console.log(i)
}

//sort()
var numeros = [1, 3, 50, 6, 33, 78, 9]
numeros.sort(function (a, b) { return a - b });
console.log(numeros)

var letras = ['a', 'l', 'z', 'b', 'd', 'c', 'f']
letras.sort();
console.log(letras)

//while

let contadorNumeros = 0;
const usuarios = ['tulipa', 'rosa', 'violeta', 'girasol']
while (usuarios[contadorNumeros]) {
    console.log('As flores são:', usuarios[contadorNumeros])
    contadorNumeros++;
}

