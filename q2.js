const prompt = require('prompt-sync')(); 
let eleitores = prompt ("quantidade de eleitores")
let brancos = prompt ("quantidade de votos brancos")
let nulos = prompt ("quantidade de votos nulos")
let validos = prompt ("quantidade de votos válidos")
console.log("a porcentagem de votos núlos é",(brancos *100)/ eleitores )
console.log("a porcentagem de votos brancos é",(nulos *100)/ eleitores )
console.log("a porcentagem de votos válidos é",(validos *100)/ eleitores )
