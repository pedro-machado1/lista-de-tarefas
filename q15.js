const prompt = require('prompt-sync')();
let soma= 0.0 , qnt = 0, p 
while(true){
    let n = parseFloat(prompt("digite um número : "))
    if (n == 0){
        break
    }
    p = parseInt(prompt("digite o peso desse número: "))
    soma += (n*p) 
    qnt++
}
console.log("a média dos número é "+soma/qnt)