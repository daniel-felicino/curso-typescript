export {};
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
  constructor(private parametroNome: string, private paremetroIdade: number) {
    this.parametroNome = parametroNome;
    this.paremetroIdade = paremetroIdade;
  }

  retornarNomeIdade(){
   return (`Meu nome é : ${this.parametroNome} e minha idade é: ${this.paremetroIdade}`)
  }
}
class dadosPessoais extends pessoa{

  constructor(paremetroNome:string,parametroIdade:number,private parametroFuncao:string){
   super(paremetroNome,parametroIdade)
   this.parametroFuncao = parametroFuncao
  }
  chamarFuncao(){
   return super.retornarNomeIdade() + `E minha função é : ${this.parametroFuncao}`
}}
const dados = new dadosPessoais('Daniel',33,'desevolvdor')
console.log(dados.chamarFuncao())

//static

class funcionario{
   static contratacao = 0

   constructor(nome:string,sobrenome:string,funcao:string){
     funcionario.contratacao++;
   }
}

const funcionario1 = new funcionario('daniel','silva','dev')
const funcionario2 = new funcionario('daniel','silva','dev')
 
console.log(funcionario.contratacao)

//STATIC
type raca = 'pastor alemão' |' budog' | 'vira lata'|'pudow'
class racasdecao {
   nome:string;
   idade:number;
   racas:raca[];
   public static vendas = 0
constructor(parametroNome:string,parametroIdade:number,paramentroRaca:raca[]){

   this.nome = parametroNome;
   this.idade = parametroIdade;
   this.racas = paramentroRaca

   racasdecao.vendas++;
   console.log(racasdecao.vendas)
}
public dadosdoanimal(){
   console.log(`Dados do Animial Nome: ${this.nome} Idade: ${this.idade}`)
}
}
const caovendido = new racasdecao('Duda',4,[' budog'])
const caovendido2 = new racasdecao('Raf',5,['vira lata'])
console.log(caovendido.dadosdoanimal())

//----------------------------------------

interface caox{
  nome:string
  idade:number
}
interface animalx {
  peso:number
  valor:number
}

interface dadosdoanimaalx extends caox,animalx  {

raca:string

}

const resutado: dadosdoanimaalx = {
  nome:'duda',
  idade:2,
  peso:5,
  valor:25,
  raca:'vira'
}

console.log(resutado)



//OMIT----------------------------------------

interface funcionario3 {
  id:number
  nome:string,
  idade:number
}
 interface x extends Omit<funcionario3,'id'| 'idade'>{

id:string
nome:string
idade:string
 }

 const resuldadodoomit : x = {

  id:"1",
  nome:'daniel',
  idade:'33'
 }
 console.log(resuldadodoomit)


 interface carros3{
  ano:number,
  modelo:string,

 }
 interface comprador {
  nome:string,
  idade:number
 }

 interface compradorCarro extends carros3,comprador 
{
  valor:number
}

const recebeOsValores: compradorCarro ={
  ano:2022,
  modelo:'Prisma',
  nome:'Daniel',
  idade:33,
  valor:52000

}

console.log(recebeOsValores)