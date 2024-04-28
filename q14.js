const prompt = require('prompt-sync')();
let soma= 0.0 , qnt = 0 
while(true){
    let n = parseFloat(prompt("digite um número : "))
    if (n == 0){
        break
    }
    soma += n 
    qnt++
}
console.log("a média dos número é "+soma/qnt)