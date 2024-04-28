const prompt = require('prompt-sync')(); 
let n1= prompt("coloque um número: ")
let n2= prompt("coloque um número: ")
if( n1 > n2){
    console.log( n2, n1)
}
else {
    console.log( n1, n2)
}