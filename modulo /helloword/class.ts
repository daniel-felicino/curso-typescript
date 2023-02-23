class pessoa {
    nome: string;
    sobrenome: string;

    constructor(paremetroNome: string, parametroSobrenome: string) {

        this.nome = paremetroNome;
        this.sobrenome = parametroSobrenome;
    }
    metodoNomes() {
        return `Nome:${this.nome} ,Sobrenome: ${this.sobrenome}`
    }
}
var passarNomes = new pessoa("daniel", 'feliciano')
console.log(passarNomes.metodoNomes())


class estudante {
    codigoEstudante?: number;
    nomeEstudante?: string;
}
const objteroEstudante = new estudante();
objteroEstudante.codigoEstudante = 1234;
objteroEstudante.nomeEstudante = 'Daniel';

console.log(objteroEstudante.codigoEstudante + objteroEstudante.nomeEstudante)

class estudanteFacudade {
    nome: string;
    sobrenome: string;
    private numeroId: number;

    constructor(parametroNome: string, parametroSobrenome: string, parametroNumeroId: number) {
        this.nome = parametroNome;
        this.sobrenome = parametroSobrenome;
        this.numeroId = parametroNumeroId
    }
    metodoId() {

        return `Nome: ${this.nome}, Sobrenome: ${this.sobrenome},Numero Identificador: ${this.numeroId}`
    }

}

const passarVolores = new estudanteFacudade('Daniel',
    'Silva',
    159357826458)

console.log(passarVolores.metodoId())

//Modificadores de acesso private,public,protected 

class estudanteCurso {
    nome: string;
    sobrenome: string;
    protected numeroId: number;

    constructor(parametroNome: string, parametroSobrenome: string, parametroNumeroId: number) {
        this.nome = parametroNome;
        this.sobrenome = parametroSobrenome;
        this.numeroId = parametroNumeroId
    }
}

class estudanteCursoAdd extends estudanteCurso {

    private nomeCurso: string;

    constructor(parametroNome: string, parametroSobrenome: string, parametroNumeroId: number, parametroCurso: string) {

        super(//parametros que estão fora dessa class devem ser chamado no super
            parametroNome,
            parametroSobrenome,
            parametroNumeroId)

        this.nomeCurso = parametroCurso
    }
    metodoCurso() {

        return `Nome: ${this.nome}, Sobrenome: ${this.sobrenome},Numero Identificador: ${this.numeroId} 'Curso: ${this.nomeCurso}`
    }
}

const passarValoresCurso = new estudanteCursoAdd('Daniel',
    'Silva',
    159357826458, 'FrontEnd')

console.log(passarValoresCurso.metodoCurso())



//Modificadores de acesso Readonly

class dataNacimento {
    readonly data:Date;

    constructor(parametroData:Date){

        this.data = parametroData
    }
}
const minhaData = new dataNacimento(new Date(1989,8,7))
console.log(minhaData)

//segundo jeito de chamar readonly
class dataNacimento2 {

    constructor( readonly parametroData:Date){

        this.parametroData = parametroData
    }
}
const minhaData2 = new dataNacimento(new Date(2000,8,7))
console.log(minhaData2)