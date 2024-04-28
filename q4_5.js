const prompt = require('prompt-sync')(); 
let n1= prompt("coloque a primeira nota")
let n2= prompt("coloque a segunda nota")
let media = (n1+ n2 ) / 2
if (media >= 6) {
    console.log("PARABÉNS! Você foi aprovado")
}
else {
    console.log("Você foi REPROVADO! Estude mais")
}