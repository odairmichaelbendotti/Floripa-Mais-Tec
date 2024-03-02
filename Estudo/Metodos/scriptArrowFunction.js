//Com funcção normal
function somar(x, y){
    return x + y
}

console.log(somar(3, 2))

//Com funcção Arrow Function
let somarArrow = (x, y) => {
    return x + y
}

console.log(somarArrow(5, 8))

/*e for uma função simples, não precisa dos {}. Ao tirar os {}, assume-se que
o que tiver após o => será o que será retornado. */
let somarDois = (x, y) => x + y

console.log(somarDois(3, 22))

//Outro exemplo de Arrow Function reduzido:
let letrasNoNome = (nome) => nome.length
console.log(letrasNoNome('Michael'))

//Na Arrow Function não existe o nome "this".
