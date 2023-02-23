"use strict";
class pessoa {
    constructor(paremetroNome, parametroSobrenome) {
        this.nome = paremetroNome;
        this.sobrenome = parametroSobrenome;
    }
    metodoNomes() {
        return `${this.nome} , ${this.sobrenome}`;
    }
}
console.log(pessoa);
