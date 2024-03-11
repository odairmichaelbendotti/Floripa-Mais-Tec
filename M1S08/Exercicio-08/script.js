document.addEventListener('DOMContentLoaded', function() {
    let lista = document.querySelector('.lista-add');
    let buttonAdd = document.querySelector('.buttonAdd');
    let buttonRemove = document.querySelector('.buttonRemove');
    let lightModeButton = document.querySelector('.light-mode');
    let darkModeButton = document.querySelector('.dark-mode');
    let header = document.querySelector('.header');

    buttonAdd.addEventListener('click', function() {
        let input = document.querySelector('.adicionarItem');
        let value = input.value.trim();
        if (value) {
            let item = document.createElement('li');
            item.textContent = value;
            lista.appendChild(item);
            input.value = '';
        }
    });

    buttonRemove.addEventListener('click', function() {
        let items = lista.querySelectorAll('li');
        if (items.length > 0) {
            lista.removeChild(items[items.length - 1]);
        }
    });

    lightModeButton.addEventListener('click', function() {
        header.classList.remove('darkmode-class');
        header.classList.add('lightmode-class');
    });

    darkModeButton.addEventListener('click', function() {
        header.classList.remove('lightmode-class');
        header.classList.add('darkmode-class');
    });
});
