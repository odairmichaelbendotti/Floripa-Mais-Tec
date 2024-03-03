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

    pizzaItem.setAttribute('data-key', index);
    /*
    O método setAttribute é utilizado para adicionar um novo atributo a um elemento HTML ou modificar o valor de um atributo existente. Este método é muito útil para definir atributos que afetam o comportamento ou a aparência do elemento, ou para armazenar dados customizados específicos para aquele elemento, que podem ser utilizados posteriormente por JavaScript.

    element.setAttribute(nomeDoAtributo, valorDoAtributo);
    nomeDoAtributo: Uma string que representa o nome do atributo que você deseja adicionar ou modificar. Por exemplo, class, id, src, href, e data-* (para atributos de dados).
    valorDoAtributo: Uma string que representa o valor que você deseja definir para o atributo. Este valor pode ser qualquer coisa que faça sentido para o tipo de atributo que você está modificando.
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
    }, 100)

    document.querySelector('.pizzaInfo--pricearea').innerHTML = `R$${item.price.toFixed(2)}`;
    document.querySelector('.pizzaInfo h1').innerHTML = item.name;
    document.querySelector('.pizzaInfo--desc').innerHTML = item.description;
    document.querySelector('.pizzaBig img').src = item.img;
    })
    
})