"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function somarNumeros(a, b) {
    return a + b;
}
var resul = somarNumeros(5, 10);
console.log(resul);
const saudacao = function (mens) {
    return mens;
};
console.log(saudacao('Olá devs'));
const saudar = (menssagem) => {
    return menssagem;
};
var resutdado = saudar("Olá FronEnd");
console.log(resutdado);
function informDdos(idpessoa, name, email) {
    console.log('Id', idpessoa, 'Nome', name);
    if (email != undefined) {
        console.log('EMIAL', email);
    }
}
informDdos(1, 'daniel');
informDdos(1, 'daniel', 'daniel@gmail');
function conectd(mensagemlog, nome) {
    var horalog = new Date().toLocaleDateString();
    console.log(horalog, ' ', mensagemlog, ' ', nome);
}
conectd('Olá', 'Daniel');
function mostrarDdos(parametro) {
    console.log(parametro);
}
mostrarDdos({ idNome: 1, nome: 'daniel', email: 'daniel@' });
mostrarDdos({ idNome: 1, nome: 'daniel', email: 'daniel@', idade: 5, celular: 88653698 });
//defalt paramets aula 47 - 49
//o segundo parametro não é obrigatorio 
function desconto(preco, decontoPecro = 0.05) {
    return preco * (1 - decontoPecro);
}
var res = desconto(50);
console.log(res);
function mensagemSaudar(nome, saudar = 'Olá!') {
    return nome + ' ' + saudar;
}
console.log(mensagemSaudar('daniel'));
//rest parameter
//só aceita um tipo de argumento string ou number ou boolean
function meusNUmeros(...numeros) {
    var contador = 0;
    numeros.forEach((numero) => (contador += numero));
    return contador;
}
console.log(meusNUmeros(20, 65, 65, 248, 99, 3, 64, 2, 658, 8, 6)); //soma total = 1238
function comprarFrutas(frase, ...frutas) {
    return frase + frutas.join(', ');
}
console.log(comprarFrutas('Daniel vai no varejão comprar...', 'coco', 'laranja', 'morango', 'mamão'));
function listadepessoas(frase, ...pessoal) {
    return frase + ' ' + pessoal.join(', ');
}
console.log(listadepessoas('Olá develepers', 'Daniel', 'Amanda', 'Maria', 'Carlos'));
class vendasProdutos {
    exibirprodutos(...produtos) {
        for (const produto of produtos) {
            console.log(produto);
        }
    }
}
const departamentoProdutos = new vendasProdutos();
console.log('Pordutos disponiveis para venda são :');
departamentoProdutos.exibirprodutos('Mouse', 'Notebook', 'Cabo USB', 'Teclado');
class testenumeros {
    exibirmumeros(...numerosdestaques) {
        for (const contador of numerosdestaques) {
            console.log(contador);
        }
    }
}
var testen = new testenumeros();
console.log('Os numeros são:');
testen.exibirmumeros(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
