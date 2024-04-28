const prompt = require('prompt-sync')(); 
for (let i= 0 ; i<5; i++ ){
    let n= prompt("coloque o número: ")
    for (let q= 1 ;  q<=n; q++ ){
        console.log(q + " x " + n + " = " + n*q )
    }
}