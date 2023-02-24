"use strict";
class pessoa {
    constructor(paremetroNome, parametroSobrenome) {
        this.nome = paremetroNome;
        this.sobrenome = parametroSobrenome;
    }
    metodoNomes() {
        return `Nome:${this.nome} ,Sobrenome: ${this.sobrenome}`;
    }
}
var passarNomes = new pessoa("daniel", 'feliciano');
console.log(passarNomes.metodoNomes());
class estudante {
}
const objteroEstudante = new estudante();
objteroEstudante.codigoEstudante = 1234;
objteroEstudante.nomeEstudante = 'Daniel';
console.log(objteroEstudante.codigoEstudante + objteroEstudante.nomeEstudante);
class estudanteFacudade {
    constructor(parametroNome, parametroSobrenome, parametroNumeroId) {
        this.nome = parametroNome;
        this.sobrenome = parametroSobrenome;
        this.numeroId = parametroNumeroId;
    }
    metodoId() {
        return `Nome: ${this.nome}, Sobrenome: ${this.sobrenome},Numero Identificador: ${this.numeroId}`;
    }
}
const passarVolores = new estudanteFacudade('Daniel', 'Silva', 159357826458);
console.log(passarVolores.metodoId());
//Modificadores de acesso private,public,protected 
class estudanteCurso {
    constructor(parametroNome, parametroSobrenome, parametroNumeroId) {
        this.nome = parametroNome;
        this.sobrenome = parametroSobrenome;
        this.numeroId = parametroNumeroId;
    }
}
class estudanteCursoAdd extends estudanteCurso {
    constructor(parametroNome, parametroSobrenome, parametroNumeroId, parametroCurso) {
        super(//parametros que estão fora dessa class devem ser chamado no super
        parametroNome, parametroSobrenome, parametroNumeroId);
        this.nomeCurso = parametroCurso;
    }
    metodoCurso() {
        return `Nome: ${this.nome}, Sobrenome: ${this.sobrenome},Numero Identificador: ${this.numeroId} 'Curso: ${this.nomeCurso}`;
    }
}
const passarValoresCurso = new estudanteCursoAdd('Daniel', 'Silva', 159357826458, 'FrontEnd');
console.log(passarValoresCurso.metodoCurso());
//Modificadores de acesso Readonly
class dataNacimento {
    constructor(parametroData) {
        this.data = parametroData;
    }
}
const minhaData = new dataNacimento(new Date(1989, 8, 7));
console.log(minhaData);
//segundo jeito de chamar readonly
class dataNacimento2 {
    constructor(parametroData) {
        this.parametroData = parametroData;
        this.parametroData = parametroData;
    }
}
const minhaData2 = new dataNacimento(new Date(2000, 8, 7));
console.log(minhaData2);
