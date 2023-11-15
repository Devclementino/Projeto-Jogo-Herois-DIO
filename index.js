class Heroi {

  constructor(nome, idade, tipo) {
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
  }

  atacar() {
    let ataque;
    switch (this.tipo) {
      case "mago":
        ataque = "magia"
        break;
      case "guerreiro":
        ataque = "espada"
        break;
      case "monge":
        ataque = "artes marciais"
        break;
      case "ninja":
        ataque = "senbon"
        break;
      default:
        ataque = "um ataque genérico"
    }

    console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`)
  }
}

const heroiMago = new Heroi("Merlin", 104, "mago")
const heroiGuerreiro = new Heroi("Aragorn", 50, "guerreiro")
const heroiMonge = new Heroi("Bruce Lee", 40, "monge")
const heroiNinja = new Heroi("Hanzo", 38, "ninja")

heroiMago.atacar()
heroiGuerreiro.atacar()
heroiMonge.atacar()
heroiNinja.atacar()

