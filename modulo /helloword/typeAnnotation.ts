var nome: string = "daniel silva"
console.log(nome)

var animais: string[] = ['leao', 'elegante', 'tartaruga']
console.log(animais)

var numeros: number[] = [1, 2, 3, 4, 5]
console.log(numeros)
var carros: {
    nome: string,
    ano: number,
    preco: number
}
carros = {
    nome: 'ferrare',
    ano: 1989,
    preco: 123.00
}
console.log(carros)

function multiplicar(number1: number, number2: number) {

    return number1 * number2
}
console.log(multiplicar(10, 50))


let tarefaConcluida: boolean = false
let tarefaPendente: boolean = false
if (tarefaConcluida) {

    console.log('tarefa deu certo')
} else {

    console.log('deu ruim')
}
var idade: any = 25;
if (idade >= 25) {
    console.log("menor")
} else {
    console.log('maior ')
}



var frutas1: Array<string> = ['manga', 'maça', 'laranja', 'pera']
frutas1.push('mamão')
console.log(frutas1.length)
var lista = [1, 2, 3, 5]
lista = [...lista, 23, 56, 547, 66]
console.log(lista)

var frutas: string[] = ['manga', 'maça', 'laranja', 'pera']
console.log(frutas[3])

function listafrutas(frutaslista: string[]) {

    for (var i = 0; i < frutaslista.length; i++) {
        console.log(frutas[i])
    }
}
listafrutas(frutas)

function animaislista(numerodeanimais:string[]) {
    for (let i = 0; i < numerodeanimais.length; i++) {
       
        console.log( animais[i])
        
    }
}
animaislista(animais)