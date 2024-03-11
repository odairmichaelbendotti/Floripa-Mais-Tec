document.addEventListener('DOMContentLoaded', function() {
    const botaoAdicionar = document.querySelector('.botao-adicionar');
    const botaoRemoverUltimo = document.querySelector('.botao-remover-ultimo');
    let contador = 0;

    botaoAdicionar.addEventListener('click', function(e) {
        e.preventDefault();
        contador++;
        const entradaData = document.querySelector('.entrada-data');
        const entradaTarefa = document.querySelector('.entrada-tarefa');
        const secaoTarefa = document.querySelector('.adicionar-tarefa');

        if (contador <= 10) {
            const novaTarefaDiv = document.createElement('div');
            novaTarefaDiv.classList.add('tarefa');
            novaTarefaDiv.innerHTML = `
                <span>${entradaData.value} - ${entradaTarefa.value}</span>
                <button class="botao-remover">
                    <i class="fa-regular fa-trash-can"></i>
                </button>
            `;

            secaoTarefa.appendChild(novaTarefaDiv);

            const botaoRemover = novaTarefaDiv.querySelector('.botao-remover');
            botaoRemover.addEventListener('click', function() {
                secaoTarefa.removeChild(novaTarefaDiv);
            });

            entradaData.value = '';
            entradaTarefa.value = '';
        } else {
            alert('Para adicionar mais tarefas adquira a versão PRO');
            botaoAdicionar.disabled = true;
        }
    });

    botaoRemoverUltimo.addEventListener('click', function() {
        const secaoTarefa = document.querySelector('.adicionar-tarefa');
        if (secaoTarefa.lastChild) {
            secaoTarefa.removeChild(secaoTarefa.lastChild);
        }
    });
});
