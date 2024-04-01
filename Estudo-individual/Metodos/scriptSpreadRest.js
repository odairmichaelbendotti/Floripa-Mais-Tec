//Spread funciona tanto para Arrays quanto para Objetos

//Aproveitar dois arrays
let numeros = [1, 2, 3, 4, 5, 6];
let outrosNumeros = [...numeros, 7, 8, 9, 10];

console.log(outrosNumeros)

//Basta utilizar o "...nome_da_variável," 


//Para fazer isso com objetos é tão simples quanto com Arrays
let info = {
    nome: 'Odair',
    sobrenome: 'Bendotti',
    idade: 27
};

//Basta utilizar o "...nome_da_variável," 
let novaInfo = {
    ...info,
    cidade: 'Florianópolis',
    bairro: 'Carianos'
}

console.log(novaInfo)

//Operador Rest
//Considera-se para o presente caso, que o usuário pretende inserir vários parâmetros

function adicionar(n1, n2, n3, n4, n5, n6){
    console.log(n1, n2, n3, n4, n5, n6)
}

adicionar(1, 2, 3, 4, 5, 6)

/*O operador rest servirá justamente para automatizar esse processo e evitar o trabalho
de ter que digitar tudo. Os itens serão enviados como parâmetro em forma de array.
Operador rest consiste nos "... antes do parâmetro"*/

function adicionarNovo(...numeroNovo){
    console.log(numeroNovo)
}

adicionarNovo(1, 2, 3, 4, 5, 6)

//outra forma de usar o operador Rest
let arrayNomes = ['Odair', 'Michael', 'Bendotti']

function adicionarMais(arrayNomes, ...novosNomes){
    let novoConjunto = [
        ...arrayNomes, //Operador Spread
        ...novosNomes //Operador Rest
    ];

    console.log(novoConjunto)
}

adicionarMais(arrayNomes, 'Luan', 'Carlos', 'Bendotti')


