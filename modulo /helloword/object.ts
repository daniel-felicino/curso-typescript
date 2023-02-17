const pessoaList = {

    nome: 'daniel',
    sobrenome: 'Silva',
    idade: 33,
    funcao: 'programador'
}
console.log(pessoaList)
//-------------------------------------------------------
function onboarding01(patametro: { nome: string }) {

    return 'Seja bem vindo ' + patametro.nome

}
console.log(onboarding01({ nome: 'Daniel silva' }))
//--------------------------------------------------------
interface pessoateste {
    nome: string,
    funcao: string
}
function onboarding02(patametro: pessoateste) {

    return (
        'Seja bem vindo ' +
        patametro.nome +
        '!' +
        patametro.funcao
    )


}
console.log(onboarding02({ nome: 'Daniel', funcao: 'Frontend' }))

//-------------------------------------------------------------
type pessoateste2 = {
    nome: string,
    funcao: string
    linguagem: string
}
function onboarding03(patametro: pessoateste2) {

    return (
        'Seja bem vindo ' +
        patametro.nome +
        '!' +
        patametro.funcao + ' ' + patametro.linguagem
    )


}

console.log(onboarding03({ nome: 'Daniel', funcao: 'Frontend', linguagem: 'typescritp' }))

//-----------------------------------------------------------------------

interface listadeanimais {
    nome: string,
    idade: number,
    raca: string
}

function cadastro(patametro: listadeanimais) {

    return (
        patametro.nome + 
        patametro.idade +
        patametro.raca 
//dentro do retorno é usado ponto e não dois pontos
    )

}
console.log(cadastro({ nome: 'duda', idade: 33, raca: 'cao' }))

//------------------------------------------------------------------
interface cadastrosEmpresa {
    nome:string,
    idade:number,
    funcao:string,
    email ?: string //não é obrigatorio ter 
}
function empresa(patametro:cadastrosEmpresa){
    return 'Nome' + ':' + 
    patametro.nome + 
    'Idade' + ':' + patametro.idade + 
    'Função' + ':' + + patametro.funcao + 
    'Email' + ':' + patametro.email
}
console.log(empresa({nome:'Daniel',idade:33,funcao:'Desenvolvedor',email:'daniel@hotmail.com'}))
//------------------------------------------

//extends---

interface mae {
    nome:string
}
interface pai {
    sobrenome:string
}
interface filha extends mae,pai {
   idade:number
}
const parametro:filha = {
nome:'daniel',
sobrenome:'Silva',
idade:33
}
console.log(parametro)