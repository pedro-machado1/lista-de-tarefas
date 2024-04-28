const prompt = require('prompt-sync')(); 
let n1
while (true) {
    n1 = parseInt(prompt("escreva um número: "))
    if ( n1 <= 0 ){
        break    
    }
    if (n1% 2 == 0){
        console.log("par")
    }
    else{
        console.log("ímpar")
    }
}
