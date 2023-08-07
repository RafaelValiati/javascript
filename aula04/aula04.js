// const rafael= { nome: "rafael", idade: "21", descrever: 
// function(){    
//     console.log(`me chamo ${this.nome}`)  }}
// console.log(rafael.nome)
// console.log(rafael.idade) 
// console.log(rafael) 
// rafael.descrever()

class Pessoa {
    nome;
    idade;

    constructor(nome, idade){
        this.nome=nome
        this.idade=idade
    }

    descrever() {
        console.log(`meu nome é ` + this.nome + ` minha idade é: ` + this.idade)
    }
}

const rafa= new Pessoa('rafael',21)
rafa.descrever()
