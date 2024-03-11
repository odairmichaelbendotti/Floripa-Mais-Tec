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

