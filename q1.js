const prompt = require('prompt-sync')(); 
let celsius = prompt("insira a temperatura em celsius")
let fahrenheit = (celsius* 1.8) + 32
console.log(fahrenheit)
