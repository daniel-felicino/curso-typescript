"use strict";
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
