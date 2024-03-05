testeJson.map(() => {
    let nomes = document.querySelector('.grid-container').cloneNode(true)
    document.querySelector('.area-insercao').append(nomes);
})

/*
document.querySelector('.grid-container').cloneNode(true): Esta linha de código seleciona o 
primeiro elemento que corresponde ao seletor CSS .grid-container no documento. O método cloneNode 
é chamado nesse elemento, com o argumento true, indicando que você deseja clonar o elemento e 
todos os seus descendentes (ou seja, fazer uma clonagem profunda). Se false fosse passado, 
apenas o próprio elemento (sem seus filhos) seria clonado.

document.querySelector('.area-insercao').append(nomes): Esta linha seleciona o primeiro elemento
que corresponde ao seletor .area-insercao e, em seguida, usa o método append() para adicionar o 
elemento clonado (nomes) como último filho desse elemento. O método append() pode inserir elementos 
DOM que já existem ou foram criados (ou clonados, no seu caso) diretamente no documento HTML, sem a 
necessidade de createElement para gerar novos elementos do zero.

Clonagem: Como você está clonando um elemento já existente, não há necessidade de criar um novo elemento. 
O elemento clonado já possui todas as propriedades, atributos e filhos do original. Isso é útil quando 
você deseja reproduzir elementos complexos sem ter que reconstruí-los manualmente com createElement e appendChild.

Inserção com append(): O método append() aceita vários tipos de argumentos, incluindo strings de texto e nós 
do DOM (elementos). Ele é projetado para inserir elementos diretamente no DOM. Quando você clona um elemento, ,
o clone é um nó do DOM que pode ser diretamente inserido usando append().
*/