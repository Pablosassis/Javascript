class Pessoa {
    nome;
    peso;
    altura;
    
    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    };
    imc(){
        return this.peso / (this.altura * this.altura);
    };
    classificandoImc(){
        let imc = this.imc()
        if(imc < 18){
            return"abaixo do peso";
        }
        else if(imc >= 18 && imc < 20) {
            return "peso normal";
        }
        else {
            return "acima do peso";
        }
    }
}
const jose = new Pessoa("Jose", 65, 1.85);
console.log(`${jose.nome} possui ${jose.peso} Kg e ${jose.altura}m, seu IMC é ${jose.imc().toFixed(2)}. Você esta ${jose.classificandoImc()}`)