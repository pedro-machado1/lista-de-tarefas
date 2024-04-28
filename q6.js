const prompt = require('prompt-sync')(); 
let l1= prompt("coloque o tamanho de um lado lado")
let l2= prompt("coloque o tamanho de um lado lado")
let l3= prompt("coloque o tamanho de um lado lado")
if (l1 < l2 + l3 || l2 < l1 + l3 || l3 < l1 + l2) {
    console.log("esses lados podem formar um triângulo")
    if (l1 == l2 && l2 == l3) {
        console.log("o triângulo é equilátero ")
    }
    
    else if (l1 == l2 || l1 == l3 || l3 == l2 ) {
        console.log("o triângulo é isósceles")
    }
    else {
        console.log("o triângulo é escaleno")
    }
     
}
else
    console.log("esses lados não podem formar um triângulo")
