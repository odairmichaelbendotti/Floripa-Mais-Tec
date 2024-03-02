/*Funciona para Objetos e Arrays. O conceito do que foi dito anteriormente
é facilmente comprovado fazendo o seguinte: */

let testeArray = ['Odair', 'Michael', 'Feijão'];
let testeObject = {
    nome: 'Odair',
    sobrenome: 'Bendotti',
    idade: 28
}

console.log(`Array: ${typeof testeArray} | Objeto: ${typeof testeObject}`)
/*Os dois casos serão Object. Por isso, diz-se que o Array é um objeto e,
consequentemente, Key, Value e Entries funciona somente com objetos. */

let lista = ['ovo', 'macarrão', 'feijão', 'pipoca']
console.log(Object.keys)

//Somente mostrará os valores em Array
console.log(Object.values(testeArray))

//Entries cria um array e coloca o Index e o item dentro dele
console.log(Object.entries(testeArray))

//Mostrará as chaves do objeto (nome, sobrenome e idade)
console.log(Object.keys(testeObject))

//Mostrará os valores das chaves do objeto (Odair, Bendotti, 28)
console.log(Object.values(testeObject))

//Entries cria um array e coloca a chave do objeto e o valor dela num Array. Cria vários.
console.log(Object.entries(testeObject))


