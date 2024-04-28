const prompt = require('prompt-sync')(); 
let qnt= prompt("coloque quantas maças foram compradas: ")
if (qnt < 12 ) {
    let custo = qnt * 0.30
    console.log("o preço total é ", custo)    
}
if (qnt >= 12 ) {
    let custo = qnt * 0.25
    console.log("o preço total é ", custo)    
}