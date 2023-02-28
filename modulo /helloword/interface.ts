// interface dadosPessoais1 {
//     idNome: number,
//     nome: string,
//     idade?: number
//     email: string
//     celular?: number
// }
// export { dadosPessoais1 }
export { dadosPessoais1 }
interface dadosPessoais1 {
    nome: string,
    sobrenome:string
}
function exibir (dadosPessoais: dadosPessoais1){

    return `Nome...${dadosPessoais.nome} Sobrenome: ${dadosPessoais.sobrenome}`
}

const nomes =  {
    nome:'daniel',
    sobrenome:'silva'
}

console.log(exibir(nomes))

interface carros{

    readonly modelo:string,
    ano:number,

}

const carro: carros = {
    modelo : 'ferrari',
    ano :1979
}

// carro.modelo = "fusca "
console.log(carro)

// interface com funções implementação

interface Animal {

    nome:string;
    idade:number;
    estavivo:boolean;
    comer(tipocomida:string):void;
}



class gato implements Animal{
    nome:string;
    idade:number;
    estavivo:boolean;

constructor(parametroNome:string,parametroIdade:number,parametroEstavivo:boolean){
    this.nome = parametroNome;
    this.idade = parametroIdade;
    this.estavivo = parametroEstavivo;
}
comer(tipodecomida: string):void {
console.log(`O gato ${this.nome} está comendo ${tipodecomida}`);
}

}

const montar = new gato('toto',10,true)
console.log(montar)
montar.comer('ração')


