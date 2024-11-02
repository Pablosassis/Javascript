class carros {
    marca;
    cor;
    mediaDoCarro;
    constructor(marca, cor, mediaDoCarro){
        this.marca = marca;
        this.cor = cor;
        this.mediaDoCarro = mediaDoCarro;
    };

    gastoPorKm(distanciaEmKm, preçoDoLitro) {
        let formula = (distanciaEmKm/this.mediaDoCarro)*preçoDoLitro; 
        return formula;
    };
    
}
const carro = new carros("Mercedes","azul", 50);
const distanciaEmKm = 100
const precoDoLitro = 6

console.log(`Minha ${carro.marca} de cor ${carro.cor} faz ${distanciaEmKm} Km por R$ ${carro.gastoPorKm(distanciaEmKm,precoDoLitro)}`)