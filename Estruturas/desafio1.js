// Desafio da aula 2

const precoEtanolPorLitro = 3;
const precoCombustivelPorLitro = 6;
const mediaCarroKmGas = 14;
const mediaCarroKmEtanol = 9;
let distanciaViagemKM = 100;
let tipoDeCombustivel = "etanol"

if (tipoDeCombustivel === "gas"){
    let formulaGas = (distanciaViagemKM/mediaCarroKmGas)*precoCombustivelPorLitro;
    console.log(`Meu carro faz ${mediaCarroKmGas} KM/L na gasolina e o custo para andar ${distanciaViagemKM} KM é R$ ${formulaGas.toFixed(2)}`);
} else if (tipoDeCombustivel === "etanol"){
    let formulaEtanol = (distanciaViagemKM/mediaCarroKmEtanol)*precoEtanolPorLitro;
    console.log(`Meu carro faz ${mediaCarroKmEtanol} KM/L no etanol e o custo para andar ${distanciaViagemKM} KM é R$ ${formulaEtanol.toFixed(2)}`);
} else {
    console.log("Tipo de combustível inválido.")
}

