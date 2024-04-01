let productArea = document.querySelector('.product-area');

ProductsJson.map(item => {
    let products = document.querySelector('.product').cloneNode(true)

    let productTitle = products.querySelector('.text-title-product')
    productTitle.innerHTML = item.name

    products.querySelector('.text-description-product').innerHTML = item.desc;

    let imgProduct = products.querySelector('.img-product');
    imgProduct.src = item.img;

    let productPrice = products.querySelector('.product-price');
    productPrice.innerHTML = `R$${item.price.toFixed(2)}`

    productArea.append(products)

    let btnChart = products.querySelectorAll('.fa-cart-shopping')
    btnChart.forEach(element => {
        element.addEventListener('click', () =>{
            document.querySelector('.modal-chart').style.display = 'flex'
        })
    })

    let closeBtn = document.querySelector('.fa-xmark')
    closeBtn.addEventListener('click', () => {
    document.querySelector('.modal-chart').style.display = 'none'
})

})
