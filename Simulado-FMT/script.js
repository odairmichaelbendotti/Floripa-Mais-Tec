let veiculos = [];
let estoque = 0;
let vendas = 0;
let faturamento = 0;
let custoTotal = 0;

function atualizarListaVeiculos() {
    const secao = document.getElementById('listaVeiculos');
    secao.innerHTML = '';

    veiculos.forEach((veiculo, indice) => {
        const divVeiculo = document.createElement('div');
        divVeiculo.className = 'veiculo';
        divVeiculo.innerHTML = `
            <h3>${veiculo.marca} ${veiculo.modelo}</h3>
            <p>Ano: ${veiculo.ano}</p>
            <p>Preço de Custo: R$${veiculo.preco}</p>
            <p>Filial: ${veiculo.filial}</p>
            <button class="botaoRemover" onclick="removerVeiculo(${indice})">Vender</button>
        `;
        secao.appendChild(divVeiculo);
    });
}

function adicionarVeiculo(evento) {
    evento.preventDefault();

    const novoVeiculo = {
        marca: document.getElementById('marca').value,
        modelo: document.getElementById('modelo').value,
        ano: document.getElementById('ano').valueAsNumber,
        preco: document.getElementById('preco').valueAsNumber,
        filial: document.getElementById('filial').value
    };

    veiculos.push(novoVeiculo);
    estoque++;
    atualizarPainel();
    atualizarListaVeiculos();
    evento.target.reset();
}

function removerVeiculo(indice) {
    const precoVenda = prompt('Informe o preço de venda:');
    if (!precoVenda) return;

    const veiculo = veiculos.splice(indice, 1)[0];
    vendas++;
    faturamento += parseFloat(precoVenda);
    custoTotal += veiculo.preco;
    estoque--;

    atualizarPainel();
    atualizarListaVeiculos();
}

function atualizarPainel() {
    const lucro = faturamento - custoTotal;
    const percentualLucro = custoTotal > 0 ? (lucro / custoTotal * 100).toFixed(2) : 0;

    document.getElementById('totalEstoque').textContent = estoque;
    document.getElementById('totalVendas').textContent = vendas;
    document.getElementById('faturamento').textContent = faturamento.toFixed(2);
    document.getElementById('lucro').textContent = lucro.toFixed(2);
    document.getElementById('percentualLucro').textContent = percentualLucro;
}

document.getElementById('formularioAdicionarVeiculo').addEventListener('submit', adicionarVeiculo);
atualizarPainel();
atualizarListaVeiculos();
