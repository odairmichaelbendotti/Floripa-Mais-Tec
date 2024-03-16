hamburgeresJson.map(item => {
    let displayFoodBurger = document.querySelector('.display-food').cloneNode(true);
    displayFoodBurger.querySelector('.name-item').innerHTML = item.name;
    displayFoodBurger.querySelector('.desc-item').innerHTML = item.desc;
    displayFoodBurger.querySelector('.food-img img').src = item.img;
    displayFoodBurger.querySelector('.button-individual-price').innerHTML = `R$${item.price.toFixed(2)}`

    document.querySelector('.clone-area-burgers').appendChild(displayFoodBurger);
})

drinksJson.map(item => {
    let displayFoodDrinks = document.querySelector('.display-food').cloneNode(true);
    displayFoodDrinks.querySelector('.name-item').innerHTML = item.name;
    displayFoodDrinks.querySelector('.desc-item').innerHTML = item.desc;
    displayFoodDrinks.querySelector('.food-img img').src = item.img;
    displayFoodDrinks.querySelector('.button-individual-price').innerHTML = `R$${item.price.toFixed(2)}`;

    document.querySelector('.clone-area-drinks').appendChild(displayFoodDrinks);
})

porcoesJson.map(item => {
    let displayFoodPorcoes = document.querySelector('.display-food').cloneNode(true);
    displayFoodPorcoes.querySelector('.name-item').innerHTML = item.name;
    displayFoodPorcoes.querySelector('.desc-item').innerHTML = item.desc;
    displayFoodPorcoes.querySelector('.food-img img').src = item.img;
    displayFoodPorcoes.querySelector('.button-individual-price').innerHTML = `R$${item.price.toFixed(2)}`;

    document.querySelector('.clone-area-porcoes').appendChild(displayFoodPorcoes);
})

const likeBtn = document.querySelectorAll(`.fa-heart`);
likeBtn.forEach(item => {
    item.addEventListener('click', function(){
        item.classList.toggle('fa-solid')
    })
})

const checkItens = document.querySelectorAll('.button-individual-price');
checkItens.forEach(item => {
    item.addEventListener('click', () => {
        alert(`O preço é ${item.textContent}`)
    })
})