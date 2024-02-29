let lista = ['Ovo', 'Farinha', 'Corante', 'Maçã'];
let res = lista;
console.log(res)

//Converter array para uma string.
let resToString = lista.toString();
console.log(resToString);

/*Pega o Array e transforma em uma string, separando pelo emento definido no
parâmetro do join*/
let resJoin = lista.join(' ');
console.log(resJoin)

/*Procurar um item específico no array e dizer a posição em que o item 
se encontra*/
let resIndexOf = lista.indexOf('Farinha')
let listaString = lista.toString().toLowerCase();
let listaArrayLowerCase = listaString.split(',')
console.log(listaArrayLowerCase)
//let listaIndexOf = prompt(`Digite um valor de 0 até ${listaArrayLowerCase.length}`)
//console.log(`Item ${listaIndexOf}: ${listaArrayLowerCase[listaIndexOf]}`)

/*Remover o último item do Array*/
lista.pop()
console.log(lista)

/*Remover o primeiroo item do Array*/
lista.shift()
console.log(lista)

/*Adicionar item no fim do Array*/
lista.push('Odair')
console.log(lista)

/*Adicionar item no começo do Array*/
lista.unshift('Macho')
console.log(lista)

/*Uma forma de alterar um item qualquer do array é pegando o item e jogando um valor
diretamente sobre ele*/
lista[0] = 'Mercúrio'
console.log(lista)

/*Importante: se o array tiver 4 itens (0 até 3), e for feito o seguinte:
lista[4] = 'Odair;
será adicionado um novo item ao final do Array, sem usar o push.*/

//----------------------------------------------------------------------------------

let nova_lista = ['Ovo', 'Farinha', 'Corante', 'Maçã'];
let nova_lista2 = ['Forno', 'Isqueiro', 'Uvas'];

/*Remover item do Array usando a função splice. Número inicial é o slot do array que se deseja
remover e o segundo número é o número final, seria um intervalo*/
nova_lista.splice(2, 1) //Remover um item a contar de Corante (remover somente Corante).
console.log(nova_lista)

/*Concatenar arrays*/
let listaConcat = nova_lista.concat(nova_lista2)
console.log(listaConcat)

/*Ordenar o Array em ordem alfabética*/
let listaOrdenada = nova_lista.sort()
console.log(listaOrdenada)

/*Depois de ordem alfabética começando do a, pode-se usar um Reverse para começar do z*/
let listaReversa = listaOrdenada.reverse()
console.log(listaReversa)

/*Filtrar itens do Array*/
let lista3 = [45, 4, 20, 87, 31, 52]
let lista4 = [];

lista4 = lista3.filter(function(item){
    if (item <= 20){
        return true;
    } else{
        return false;
    }
})

console.log(lista4)

/*Verificar individualmente se cada item satisfaz a condição (todos devem satisfazer para ser true)*/
let lista5 = [];
lista5 = lista3.every(function(item){
    if (item >= 20){
        return true;
    } else{
        return false;
    }
})

console.log(lista5)

/*Verificar individualmente se cada item satisfaz a condição (algum deve satisfazer para ser true)*/
let lista6 = [];
lista6 = lista3.some(function(item){
    if (item >= 20){
        return true;
    } else{
        return false;
    }
})

console.log(lista6)

