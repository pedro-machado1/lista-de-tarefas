const prompt = require('prompt-sync')(); 
let n= prompt("coloque o código de origem: ")
if (n == 1){
    console.log("Sul")
}
else if (n == 2){
    console.log("Norte")
}
else if (n == 3){
    console.log("Leste")
}
else if (n == 4){
    console.log("Oeste")
}
else if (n == 5 || n == 6){
    console.log("Nordeste")
}
else if (n >= 6 && n <= 10){
    console.log("Sudeste")
}
else if (n >= 10 && n <= 20){
    console.log("Centro-Oeste")
}
else if (n >= 25 && n <= 50){
    console.log("Nordeste")
}
else {
    console.log("Produto importado")
}
