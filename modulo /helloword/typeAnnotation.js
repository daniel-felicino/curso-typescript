"use strict";
var nome = "daniel silva";
console.log(nome);
var animais = ['leao', 'elegante', 'tartaruga'];
console.log(animais);
var numeros = [1, 2, 3, 4, 5];
console.log(numeros);
var carros;
carros = {
    nome: 'ferrare',
    ano: 1989,
    preco: 123.00
};
console.log(carros);
function multiplicar(number1, number2) {
    return number1 * number2;
}
console.log(multiplicar(10, 50));
let tarefaConcluida = false;
let tarefaPendente = false;
if (tarefaConcluida) {
    console.log('tarefa deu certo');
}
else {
    console.log('deu ruim');
}
var idade = 25;
if (idade >= 25) {
    console.log("menor");
}
else {
    console.log('maior ');
}
var frutas1 = ['manga', 'maça', 'laranja', 'pera'];
frutas1.push('mamão');
console.log(frutas1.length);
var lista = [1, 2, 3, 5];
lista = [...lista, 23, 56, 547, 66];
console.log(lista);
var frutas = ['manga', 'maça', 'laranja', 'pera'];
console.log(frutas[3]);
function listafrutas(frutaslista) {
    for (var i = 0; i < frutaslista.length; i++) {
        console.log(frutas[i]);
    }
}
listafrutas(frutas);
function animaislista(numerodeanimais) {
    for (let i = 0; i < numerodeanimais.length; i++) {
        console.log(animais[i]);
    }
}
animaislista(animais);
//-------------------------------
//tuple
let pessoas;
pessoas = ['joão', 'Maria', 'Sara', 'fernando', 'Duda', 33];
console.log(...pessoas);
console.log(pessoas);
let pessoas2;
pessoas2 = ['daniel', 'rafael', 'amanda', 'augusto', 'cida', 'roberto', 'silva'];
let pessoas3 = [3, ...pessoas2];
console.log(...pessoas3);
function pessoaslista(nome, idade) {
    return [...nome, ...idade];
}
let resultado = pessoaslista(['daniel'], [33]);
console.log(resultado);
function listarnome(...nome) {
    return [...nome];
}
console.log(listarnome('daniel', 'feliciano', 'silva'));
console.log(listarnome('daniel', 'daniel'));
var Idioma;
(function (Idioma) {
    Idioma[Idioma["Portugues"] = 0] = "Portugues";
    Idioma[Idioma["ingles"] = 1] = "ingles";
    Idioma[Idioma["japones"] = 2] = "japones";
})(Idioma || (Idioma = {}));
console.log(Idioma);
var dias;
(function (dias) {
    dias["segunda"] = "seg";
    dias["terca"] = "ter";
    dias["quarta"] = "quar";
    dias["quinta"] = "quin";
    dias["sexta"] = "sex";
    dias["sabado"] = "sabado";
    dias["domingo"] = "dom";
})(dias || (dias = {}));
console.log(dias.segunda);
//VOID-------------------------------
function loginError(erroMensagem) {
    console.log(erroMensagem);
}
loginError('erro');
const loginErro2 = (errorMesagem) => {
    console.log(errorMesagem);
};
loginErro2("erro login 2");
//NULL----------------
var testeNull = null;
console.log(testeNull);
console.log(typeof (testeNull), 'exemplo null');
//Undefind--------
var testeundefined;
console.log(testeundefined);
console.log(typeof (testeundefined), 'exemplo undefind');
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
};
const atualizarVeiculo = {
    tipo: 'carro',
    ano: 2021,
    cor: 'yellow'
};
const atualização = Object.assign(Object.assign({}, meuVeiculo), atualizarVeiculo);
console.log(atualização);
