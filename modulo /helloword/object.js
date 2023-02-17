"use strict";
const pessoaList = {
    nome: 'daniel',
    sobrenome: 'Silva',
    idade: 33,
    funcao: 'programador'
};
console.log(pessoaList);
//-------------------------------------------------------
function onboarding01(patametro) {
    return 'Seja bem vindo ' + patametro.nome;
}
console.log(onboarding01({ nome: 'Daniel silva' }));
function onboarding02(patametro) {
    return ('Seja bem vindo ' +
        patametro.nome +
        '!' +
        patametro.funcao);
}
console.log(onboarding02({ nome: 'Daniel', funcao: 'Frontend' }));
function onboarding03(patametro) {
    return ('Seja bem vindo ' +
        patametro.nome +
        '!' +
        patametro.funcao + ' ' + patametro.linguagem);
}
console.log(onboarding03({ nome: 'Daniel', funcao: 'Frontend', linguagem: 'typescritp' }));
function cadastro(patametro) {
    return (patametro.nome +
        patametro.idade +
        patametro.raca
    //dentro do retorno é usado ponto e não dois pontos
    );
}
console.log(cadastro({ nome: 'duda', idade: 33, raca: 'cao' }));
function empresa(patametro) {
    return 'Nome' + ':' +
        patametro.nome +
        'Idade' + ':' + patametro.idade +
        'Função' + ':' + +patametro.funcao +
        'Email' + ':' + patametro.email;
}
console.log(empresa({ nome: 'Daniel', idade: 33, funcao: 'Desenvolvedor', email: 'daniel@hotmail.com' }));
const parametro = {
    nome: 'daniel',
    sobrenome: 'Silva',
    idade: 33
};
console.log(parametro);
