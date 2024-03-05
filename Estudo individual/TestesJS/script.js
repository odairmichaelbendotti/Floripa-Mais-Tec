let windodArea = document.querySelector('.window-item-area')
lista.map((item, index) => {
    let divOne = document.createElement('div');
    divOne.classList.add('itens');
    
    let divImg = document.createElement('div');
    divImg.classList.add('userimg');
    
    let h2 = document.createElement('h2')
    h2.innerHTML = item.nome

    let pOne = document.createElement('p')
    if (item.idade < 30){
        pOne.innerHTML = `${item.idade} anos`
    } else {
        pOne.innerHTML = "< 30 anos"
    }

    let pTwo = document.createElement('p')
    pTwo.innerHTML = `${item.graduação}`

    windodArea.appendChild(divOne)
    divOne.appendChild(divImg)
    divOne.append(h2, pOne, pTwo)
})