//A partir daqui, [M1S08] Exercício 01
let headerLine = document.querySelector('.header');
let lightMode = document.querySelector('.light-mode');
let darkMode = document.querySelector('.dark-mode')

lightMode.addEventListener('click', (() => {
    if (headerLine.classList.contains('darkmode-class')){
        headerLine.classList.remove('darkmode-class');
        headerLine.classList.add('lightmode-class')
    }
    if(darkMode.classList.contains('bold-class')){
        darkMode.classList.remove('bold-class')
        lightMode.classList.add('bold-class')
    }
}))

darkMode.addEventListener('click', (() => {
    if (headerLine.classList.contains('lightmode-class')){
        headerLine.classList.remove('lightmode-class')
        headerLine.classList.add('darkmode-class')
    }
    if(lightMode.classList.contains('bold-class')){
        lightMode.classList.remove('bold-class')
        darkMode.classList.add('bold-class')
    }
}))
//Fim do [M1S08] Exercício 01

//A partir daqui, [M1S08] Exercício 03
let lista = document.querySelector('.lista-add');
let buttonAdd = document.querySelector('.buttonAdd')

let i = 0;
buttonAdd.addEventListener('click', (() => {
    i++
    let input = document.querySelector('.adicionarItem')
    let addItem = input.value;
    let novoItem = document.createElement('li')
    novoItem.innerText = addItem
    lista.appendChild(novoItem);
    input.value = ''

    if ( i == 5){
        alert('Limite de itens adicionado atingido.')
        buttonAdd.classList.add('display-hidden')
    }

//Fim do [M1S08] Exercício 03

//A partir daqui, [M1S08] Exercício 04
    let removeButton = document.querySelector('.buttonRemove')
    removeButton.addEventListener('click', (() => {
    lista.removeChild(novoItem)
}))

}))
//Fim do [M1S08] Exercício 04
