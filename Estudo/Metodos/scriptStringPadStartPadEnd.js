/*padStart e padEnd funciona da seguinte forma: Precisamos inserir uma informação
que carece de 9 dígitos. Contudo, somente foi inserido 1. Com padStart e padEnd, podemos
preencher os dígitos que faltaram com algum símbolo*/

//Usando padEnd
let telefone = '5';
/*Exemplo do que está na descrição do exercício.
padEnd(quantidade de dígitos, 'O que será usado para preencher os valores faltantes'))*/
console.log(telefone.padEnd(9, '*'))

//Usando padStart
/*A diferença entre padEnd e padStart é que o padEnd fará isso aqui: 5******** e o 
padStart fará isso aqui: ********5*/
console.log(telefone.padStart(9, '*'))

//Aplicação prática: Mostrar número cartão
let cartao = '123456789'
console.log(cartao.slice(-3).padStart(9, '*'))
//Mostrará somene *******789
