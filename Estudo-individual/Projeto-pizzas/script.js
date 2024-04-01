let modalQt = 1;
let cart = [];
let modalKey;
pizzaJson.map((item, index) => { // pegar o item e o Index no Json, por exemplo: Item 1 (id = 1), pizza  de Mussarela.
    //Obs: o map somente reconhece como padrão os seguintes eventos: item, index e array. No caso, somente dois foram usados neste exercício.
    let pizzaItem = document.querySelector('.pizza-item').cloneNode(true)
    /*
    .cloneNode(true): Este método é usado para criar uma cópia do nó sobre o qual é chamado. O método cloneNode pode receber um argumento booleano:
    Se você passar true, ele fará uma clonagem profunda do elemento, o que significa que o elemento e todos os seus atributos, eventos e elementos filhos serão clonados.
    Se você passar false ou não passar nenhum argumento, ele fará uma clonagem rasa do elemento, clonando apenas o próprio elemento sem nenhum dos seus filhos.
    Neste caso, true é passado para cloneNode, indicando que queremos clonar o elemento e todos os seus filhos (uma clonagem profunda).
    */
    document.querySelector('.pizza-area').append(pizzaItem);

    /*
    pizzaItem.querySelector('.pizza-item--name'): Dentro do elemento clonado armazenado em pizzaItem, este código seleciona o primeiro elemento filho que corresponde ao seletor .pizza-item--name. Este seletor é usado para identificar o elemento específico onde o nome da pizza deve ser exibido.

    .innerHTML = item.name: O conteúdo interno (HTML) desse elemento é então atualizado para ser igual ao name do item atual do array JSON. Isso efetivamente substitui qualquer conteúdo anterior no elemento .pizza-item--name pelo nome da pizza atual que está sendo processada pelo loop .map().
    */
    pizzaItem.querySelector('.pizza-item--img img').src = item.img
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;

    pizzaItem.querySelector('.pizza-item a').addEventListener('click', (e) => {
        e.preventDefault();

        document.querySelector('.pizzaWindowArea').style.opacity = 0;
        document.querySelector('.pizzaWindowArea').style.display = 'flex';
        setTimeout(() => {
            document.querySelector('.pizzaWindowArea').style.opacity = 1;
        }, 100);
        document.querySelector('.pizzaInfo--actualPrice').innerHTML = `R$${item.price.toFixed(2)}`;
        document.querySelector('.pizzaInfo h1').innerHTML = item.name;
        document.querySelector('.pizzaInfo--desc').innerHTML = item.description;
        document.querySelector('.pizzaBig img').src = item.img;
        let displayQtd = document.querySelector('.pizzaInfo--qt');
        displayQtd.innerHTML = modalQt; //Variável declarada externamente com a quantidade que deve aparecer.

        /*Selecionar todos os elementos .pizzaInfo--size e aplicar um forEach em cada um deles. Isso fará com que o parâmetro size receba o tamanho e o parâmetro sizeIndex
        receba o index de cada valor*/

        document.querySelectorAll('.pizzaInfo--size').forEach((sizesDesc, sizesIndex) => {
            sizesDesc.querySelector('.pizzaInfo--size span').innerHTML = pizzaJson[index].sizes[sizesIndex];
            modalKey = sizesIndex

            document.querySelectorAll('.pizzaInfo--size').forEach((sizesDesc, sizesIndex) => {
                sizesDesc.querySelector('.pizzaInfo--size span').innerHTML = pizzaJson[index].sizes[sizesIndex];

                if (sizesIndex == 2) {
                    document.querySelector('.pizzaInfo--size').classList.add('selected')
                }

                document.querySelectorAll('.pizzaInfo--size').forEach((sizesDesc, sizesIndex) => {
                    sizesDesc.querySelector('.pizzaInfo--size span').innerHTML = pizzaJson[index].sizes[sizesIndex];

                    if (sizesIndex == 2) {
                        sizesDesc.classList.add('selected')
                    }

                })
            })
        })

        document.querySelector('.pizzaInfo--size.selected').classList.remove('selected')

    })

})

//EVENTOS DO MODAL

document.querySelectorAll('.pizzaInfo--cancelMobileButton, .pizzaInfo--cancelButton').forEach((item) => {
    item.addEventListener('click', closeModal)
})

function closeModal(){
    document.querySelector('.pizzaWindowArea').style.opacity = 0;
    setTimeout(() => {
        document.querySelector('.pizzaWindowArea').style.display = 'none';
    }, 200)
    modalQt = 1;
}

document.querySelector('.pizzaInfo--qtmais').addEventListener('click', () => {
    modalQt++;
    document.querySelector('.pizzaInfo--qt').innerHTML = modalQt;
})

document.querySelector('.pizzaInfo--qtmenos').addEventListener('click', () => {
    if (modalQt == 1){
        modalQt = 1;
        document.querySelector('.pizzaInfo--qt').innerHTML = modalQt;
    } else {
        modalQt--;
        document.querySelector('.pizzaInfo--qt').innerHTML = modalQt;
    }
})

//Modelo padrão para tirar a seleção de um item já selecionado e marcar outro.
document.querySelectorAll('.pizzaInfo--size').forEach((size, sizeIndex) => {
    size.addEventListener('click', (e) => {
        document.querySelector('.pizzaInfo--size.selected').classList.remove('selected')
        size.classList.add('selected') //e.target é o botão em que eu cliquei!
    })
})

//Adicionar ao carrinho
document.querySelector('.pizzaInfo--addButton').addEventListener('click', () => {
    // Qual a pizza?
    console.log(modalKey)
    //Qual o tamanho selecionado?
    //Quantas pizzas?
})