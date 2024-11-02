class Pessoa{
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        console.log(`nome: ${this.nome} e idade: ${this.idade}`);

    }
}


const pablo = new Pessoa();
pablo.nome = "pablo";
pablo.idade = 22;

const pablo2 = new Pessoa("pablo", 45);

pablo2.descrever();