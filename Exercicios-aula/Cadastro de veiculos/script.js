const buttonAdd = document.querySelector('.button-add')
let count = 0

buttonAdd.addEventListener('click', function(e){
    e.preventDefault()
    count++
    const inputBrand = document.querySelector('.input-brand')
    const inputCar = document.querySelector('.input-car')
    console.log(`${inputBrand.value} ${inputCar.value}`)

    const addCar = document.querySelector('.add-car')

    const newItemDiv = document.createElement('div')
    const newItemUl = document.createElement('ul')
    const newItemLi = document.createElement('li')
    newItemLi.innerText = `${count}. ${inputBrand.value} ${inputCar.value}`
    const newItemButton = document.createElement('button')
    const newItemIcon = document.createElement('i')
    newItemIcon.classList.add('fa-regular', 'fa-trash-can')
    newItemButton.classList.add('remover')

    newItemDiv.classList.add('car')

    newItemUl.appendChild(newItemLi)
    newItemDiv.append(newItemUl, newItemButton)
    newItemButton.appendChild(newItemIcon)
    addCar.appendChild(newItemDiv)


    newItemButton.addEventListener('click', function(){
        addCar.removeChild(newItemDiv);
    })
    
    inputBrand.value = ''
    inputCar.value = ''

    if (count === 10){
        alert('Para adicionar mais veículos adquira a versão PRO')
        buttonAdd.disabled = true;
    }
})

const removeLastLine = document.querySelector('.button-remove-last')
removeLastLine.addEventListener('click', function(f){
    const addCar = document.querySelector('.add-car')
    f.preventDefault()
    addCar.removeChild(addCar.lastChild)

})