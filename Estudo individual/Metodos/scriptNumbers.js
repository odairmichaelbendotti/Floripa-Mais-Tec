/*Transformar número em string (toString). Até no console.log ficará na cor preta, 
pois indicará que não é um número. */
let n = 10;
let res = n.toString();

console.log(res)

//Definir número de casas decimais
let y = 10.5491946484
let yresult = y.toFixed(2)
console.log(yresult)

//Transformar string em número inteiros
let z = '10,13'
let zresult = parseInt(z);
console.log(`z(parseInt) = ${z} | Var z + 5: ${z + 5} | Var zresult + 5: ${zresult + 5}`)

//Transformar string em número com decimais
let k = '10,22'
let kresult = parseFloat(k);
console.log(`k(parseFloat) = ${k} | Var k + 5: ${k + 5} | Var kresult + 5: ${kresult + 5}`)


