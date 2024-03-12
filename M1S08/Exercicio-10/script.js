document.addEventListener('DOMContentLoaded', function() {
    const buttonAdd = document.querySelector('.button-add');
    let count = 0;

    buttonAdd.addEventListener('click', function(e) {
        e.preventDefault();
        count++;
        const inputBrand = document.querySelector('.input-brand');
        const inputCar = document.querySelector('.input-car');
        const addCar = document.querySelector('.add-car');

        if (count <= 10) {
            const newItemDiv = document.createElement('div');
            newItemDiv.classList.add('car');
            newItemDiv.innerText = `${inputBrand.value}. ${inputCar.value}`;

            const newItemButton = document.createElement('button');
            newItemButton.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
            newItemButton.addEventListener('click', function() {
                addCar.removeChild(newItemDiv);
            });

            newItemDiv.appendChild(newItemButton);
            addCar.appendChild(newItemDiv);

            // Marcar como concluída
            newItemDiv.addEventListener('click', function() {
                newItemDiv.classList.toggle('concluida');
            });

            inputBrand.value = '';
            inputCar.value = '';
        } else {
            alert('Limite de itens adicionado atingido.');
            buttonAdd.disabled = true;
        }
    });

    const removeLastLine = document.querySelector('.button-remove-last');
    removeLastLine.addEventListener('click', function(e) {
        e.preventDefault();
        if (addCar.lastChild) {
            addCar.removeChild(addCar.lastChild);
        }
    });
});
