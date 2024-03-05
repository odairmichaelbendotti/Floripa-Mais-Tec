//Includes e Repeat
//Includes serve para string e para Array
//Includes retornará true ou false, somente.

let nome = 'Odair Michael Bendotti'
console.log(nome.toLocaleLowerCase().includes('odair'))

let lista = ['ovo', 'café', 'arroz', 'feijão', 'macarrão'];
console.log(lista.includes('arroz'))

let nomeItem = 'feijão';
if (lista.includes(nomeItem) == true){
    console.log(`Item ${lista.indexOf(nomeItem)}. ${lista[lista.indexOf(nomeItem)]}`)
} else {
    alert('O item não existe na lista')
}

//Repeat repetirá o que foi solicitado por x vezes.
console.log('Odair \n'.repeat(5))


