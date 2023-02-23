function somarNumeros(a: number, b: number): number {
    return a + b
}
var resul = somarNumeros(5, 10)
console.log(resul)

const saudacao = function (mens: string) {

    return mens
}

console.log(saudacao('Olá devs'))

const saudar = (menssagem: string) => {

    return menssagem
}
var resutdado = saudar("Olá FronEnd")
console.log(resutdado)

function informDdos(idpessoa: number, name: string, email?: string) {

    console.log('Id', idpessoa, 'Nome', name)
    if (email != undefined) {
        console.log('EMIAL', email)
    }
}
informDdos(1, 'daniel')
informDdos(1, 'daniel','daniel@gmail')


function conectd(mensagemlog: string, nome: string) {
    var horalog = new Date().toLocaleDateString()

    console.log(horalog, ' ', mensagemlog, ' ', nome)
}
conectd('Olá', 'Daniel')


// type dadosPessoais = {
//     idNome: number,
//     nome: string,
//     idade?: number
//     email: string

// }
import { dadosPessoais1 } from "./interface.js"
function mostrarDdos (parametro:dadosPessoais1){

    console.log(parametro)
   
}
 mostrarDdos({idNome:1,nome:'daniel',email:'daniel@'})

 mostrarDdos({idNome:1,nome:'daniel',email:'daniel@',idade:5,celular:88653698})


 //defalt paramets aula 47 - 49
//o segundo parametro não é obrigatorio 
function desconto (preco:number,decontoPecro = 0.05){

    return preco * (1 - decontoPecro)

}
var res = desconto(50)
console.log(res)

function mensagemSaudar(nome:string,saudar = 'Olá!'){

    return nome + ' ' + saudar
}
console.log(mensagemSaudar('daniel'))

//rest parameter
//só aceita um tipo de argumento string ou number ou boolean
function meusNUmeros(...numeros:number[]){
var contador = 0

numeros.forEach((numero)=>(contador += numero))
return contador
}
console.log(meusNUmeros(20,65,65,248,99,3,64,2,658,8,6,)) //soma total = 1238

function comprarFrutas(frase:string,...frutas:string[]){

    return frase + frutas.join(', ')
}
console.log(comprarFrutas('Daniel vai no varejão comprar...','coco','laranja','morango','mamão'))

function listadepessoas (frase:string,...pessoal:string[]){

    return frase + ' '+ pessoal.join(', ')
}
console.log(listadepessoas('Olá develepers','Daniel','Amanda','Maria','Carlos'))



class vendasProdutos {
    public exibirprodutos(...produtos:string[]):void{
    for (const produto of produtos) {
        console.log(produto)
    }
}}
const departamentoProdutos: vendasProdutos = new vendasProdutos();
console.log('Pordutos disponiveis para venda são :')
departamentoProdutos.exibirprodutos('Mouse','Notebook','Cabo USB','Teclado')

class testenumeros {
    public exibirmumeros(...numerosdestaques:number[]):void{
        for (const contador of numerosdestaques) {
            console.log(contador)
        }
    }
}
var testen: testenumeros= new testenumeros()
console.log('Os numeros são:')
testen.exibirmumeros(1,2,3,4,5,6,7,8,9,10)