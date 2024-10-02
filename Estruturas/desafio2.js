// Cálculo de média escolar com variáveis e Ifs

let nota1, nota2, nota3, media;
nota1 = 1000;
nota2 = 2;
nota3 = 7;
media = (nota1 + nota2 + nota3) / 3;
if(media<=5){
    console.log(`Você foi reprovado, média: ${media.toFixed(2)}`);
}else if(media<=7 && media >5){
    console.log(`Você está em recuperação média: ${media.toFixed(2)}`);
} else {
    console.log(`Parabéns por passar, média: ${media.toFixed(2)}`);
}