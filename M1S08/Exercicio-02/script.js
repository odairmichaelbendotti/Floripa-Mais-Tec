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

//A partir daqui, [M1S08] Exercício 02
let telas = document.querySelectorAll('.environments');
telas.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('card-2')
    })
})
//Fim do [M1S08] Exercício 02
