// Factory function (Função fábrica)
function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,

    // GETTER
    // nomeCompleto passa a fingir que é um atributo, deixando de ser function
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`
    },

    // SETTER
    set nomeCompleto(valor) {
      valor = valor.split(' ')
      this.nome = valor.shift()
      this.sobrenome = valor.join(' ')
    },

    fala(assunto = 'falando sobre NADA') {
      return `${this.nome} está ${assunto}.`
    },

    altura: altura,
    peso: peso,

    //GETTER
    //  imc passa a fingir que é um atributo, deixando de ser function
    get imc() {
      const indice = this.peso / this.altura ** 2
      return indice.toFixed(2)
    }
  }
}

const p1 = criaPessoa('Eduarda', 'Calderan', 1.52, 53)
const p2 = criaPessoa('João', 'Otávio', 1.9, 75)
const p3 = criaPessoa('Junior', 'Calderan', 1.8, 110)

console.log(p1.imc)
console.log(p2.imc)
console.log(p3.imc)
