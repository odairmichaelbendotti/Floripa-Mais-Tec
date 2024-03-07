let cadastrar = document.querySelector('.cadastrar-item').addEventListener('click', (() => {
    let inputCodigo = document.querySelector('#codigo-item');
    let qtd = document.querySelector('#quantidade-item').value;
    if (inputCodigo !== ""){
        inputCodigo = document.querySelector('#codigo-item').value;
    } else{
        alert('Insira alguma informação')
    }


    let pedidos = document.querySelector('.pedidos')

    let itemEncontrado = false;
    for (let i = 0; i < listaCompras.length; i++){
        if (inputCodigo == listaCompras[i].id){
            let nomeItem = listaCompras[i].Nome;
            let qtdItem = listaCompras[i].Quantidade;
            let valorItem = listaCompras[i]["Valor Unitário"];
            console.log(nomeItem, qtdItem, valorItem)
            itemEncontrado = true;
            let criarPedido = document.createElement('p');
            criarPedido.innerHTML = `${nomeItem} | Estoque: ${qtdItem} | Demanda: ${qtd} | Valor unitário: ${valorItem} | Total: R$${(qtd * valorItem).toFixed(2)}`
            pedidos.appendChild(criarPedido)
            break;

        }
    }

    if (itemEncontrado !== true){
        alert('Item não encontrado')
    }



}))