// Primeiro desafio javascript

let precoCombustivelPorLitro = 6;
const mediaCarroKM = 14;
let distanciaViagemKM = 14932;

let formulaGas = (distanciaViagemKM/mediaCarroKM)*precoCombustivelPorLitro;
console.log(`Meu carro faz ${mediaCarroKM} KM/L e o custo para andar ${distanciaViagemKM} KM é R$ ${formulaGas.toFixed(2)}`);