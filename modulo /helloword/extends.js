"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class animais {
    mover(distancia = 0) {
        console.log(`O animal moveu por ${distancia}metros`);
    }
}
class cao extends animais {
    latir() {
        console.log(`au au `);
    }
}
const cachorro = new cao();
cachorro.latir();
cachorro.mover(10);
cachorro.latir();
class pessoa {
    constructor(parametroNome, paremetroIdade) {
        this.parametroNome = parametroNome;
        this.paremetroIdade = paremetroIdade;
        this.parametroNome = parametroNome;
        this.paremetroIdade = paremetroIdade;
    }
    retornarNomeIdade() {
        return (`Meu nome é : ${this.parametroNome} e minha idade é: ${this.paremetroIdade}`);
    }
}
class dadosPessoais extends pessoa {
    constructor(paremetroNome, parametroIdade, parametroFuncao) {
        super(paremetroNome, parametroIdade);
        this.parametroFuncao = parametroFuncao;
        this.parametroFuncao = parametroFuncao;
    }
    chamarFuncao() {
        return super.retornarNomeIdade() + `E minha função é : ${this.parametroFuncao}`;
    }
}
const dados = new dadosPessoais('Daniel', 33, 'desevolvdor');
console.log(dados.chamarFuncao());
//static
class funcionario {
    constructor(nome, sobrenome, funcao) {
        funcionario.contratacao++;
    }
}
funcionario.contratacao = 0;
const funcionario1 = new funcionario('daniel', 'silva', 'dev');
const funcionario2 = new funcionario('daniel', 'silva', 'dev');
console.log(funcionario.contratacao);
class racasdecao {
    constructor(parametroNome, parametroIdade, paramentroRaca) {
        this.nome = parametroNome;
        this.idade = parametroIdade;
        this.racas = paramentroRaca;
        racasdecao.vendas++;
        console.log(racasdecao.vendas);
    }
    dadosdoanimal() {
        console.log(`Dados do Animial Nome: ${this.nome} Idade: ${this.idade}`);
    }
}
racasdecao.vendas = 0;
const caovendido = new racasdecao('Duda', 4, [' budog']);
const caovendido2 = new racasdecao('Raf', 5, ['vira lata']);
console.log(caovendido.dadosdoanimal());
