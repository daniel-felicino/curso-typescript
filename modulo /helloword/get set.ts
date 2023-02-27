export { }
class somarNUmeros {
   private largura1 = 10;
   private largura2 = 150

   get somando() {

      return this.largura1 * this.largura2

   }
}
console.log(new somarNUmeros().somando)

class estudante {
   nome: string
   sobrenome: string
   curso: string

   constructor(parametroNome: string, parametroSobrenome: string, parametroCurso: string) {

      this.nome = parametroNome,
         this.sobrenome = parametroSobrenome,
         this.curso = parametroCurso
   }

   get acessar() {

      return this.nome
   }
    set modificar(setNome: string) {
      this.nome = setNome
   }

}
const acesso = new estudante('daniel Feliciano', 'silva', 'front')
acesso.modificar = 'RAFAEL'
console.log(acesso)