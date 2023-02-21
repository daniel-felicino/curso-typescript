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

function animaislista(numerodeanimais: string[]) {
    for (let i = 0; i < numerodeanimais.length; i++) {

        console.log(animais[i])

    }
}
animaislista(animais)

//-------------------------------
//tuple

let pessoas: [string, ...string[], number]

pessoas = ['joão', 'Maria', 'Sara', 'fernando', 'Duda', 33]

console.log(...pessoas)

console.log(pessoas)

let pessoas2: [string, ...string[]]

pessoas2 = ['daniel', 'rafael', 'amanda', 'augusto', 'cida', 'roberto', 'silva']
let pessoas3: [number, ...string[]] = [3, ...pessoas2]
console.log(...pessoas3)

function pessoaslista(nome: string[], idade: number[]) {

    return [...nome, ...idade]
}
let resultado = pessoaslista(['daniel'], [33])
console.log(resultado)

type Nome =
    | [primeiroNome: string, segudoNome: string]
    | [primeiroNome: string, nomedomeio: string, segudoNome: string]

function listarnome(...nome: Nome) {
    return [...nome]
}
console.log(listarnome('daniel', 'feliciano', 'silva'))
console.log(listarnome('daniel', 'daniel'))

enum Idioma {

    Portugues,
    ingles,
    japones
}
console.log(Idioma)

enum dias {

    segunda = 'seg',
    terca = 'ter',
    quarta = 'quar',
    quinta = 'quin',
    sexta = 'sex',
    sabado = 'sabado',
    domingo = 'dom'
}
console.log(dias.segunda)

//VOID-------------------------------

function loginError(erroMensagem: string) {
    console.log(erroMensagem)
}
loginError('erro')

const loginErro2 = (errorMesagem: string) => {

    console.log(errorMesagem)
}
loginErro2("erro login 2")

//NULL----------------

var testeNull = null
console.log(testeNull)
console.log(typeof (testeNull), 'exemplo null')

//Undefind--------
var testeundefined;
console.log(testeundefined)
console.log(typeof (testeundefined), 'exemplo undefind')


//NEVER----------

// function erro(mensagem: string): never {

//     throw new Error(mensagem)
// }
// console.log(erro('error 404'))

// function rejectError() {

//     return Error
//         ('erros 2 exemplo')
// }
// console.log(rejectError())

// var texto:string = 'daniel fronend'
// console.log(texto.replace('daniel' ,'beckend'))

// var pessoasEmpresa: [string,number,true]= 
// pessoasEmpresa = ['daniel',33,true]

// console.log(pessoasEmpresa.toString().replace('daniel','foi')) 


const meuVeiculo = {
    marca: 'Ford',
    modelo: 'Mustang',
    cor: 'red'
}

const atualizarVeiculo = {
    tipo: 'carro',
    ano: 2021,
    cor: 'yellow'
}
const atualização = { ...meuVeiculo, ...atualizarVeiculo }
console.log(atualização)

