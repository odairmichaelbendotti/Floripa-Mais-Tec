document.addEventListener("DOMContentLoaded", function() {
    const addItemButton = document.getElementById("add-item");
    const clearListButton = document.getElementById("clear-list");
    const consultItemsButton = document.getElementById("consult-items");
    const orderList = document.getElementById("order-list");
    const totalAmountDisplay = document.getElementById("total-amount");
    const totalProductsDisplay = document.getElementById("total-products");
    const codigoItemInput = document.getElementById("codigo-item");
    const quantidadeItemInput = document.getElementById("quantidade-item");

    // Função para abrir um popup com os produtos da lista
    consultItemsButton.addEventListener("click", function() {
        const productList = listaCompras.map(function(item) {
            return `Código: ${item["id"]} ${item["Nome"]} | Estoque: ${item["Quantidade"]} | Valor unitário: R$ ${item["Valor Unitário"].toFixed(2)}`;
        }).join("\n");
        
        const popupWindow = window.open("", "Produtos", "width=600,height=400");
        popupWindow.document.write(`<pre>${productList}</pre>`);
    });

    // Função para atualizar total da venda e quantidade de produtos
    function updateSaleDetails() {
        const totalAmount = Array.from(orderList.children).reduce(function(acc, curr) {
            const totalPrice = parseFloat(curr.textContent.match(/Total: R\$\s(\d+\.\d+)/)[1]);
            return acc + totalPrice;
        }, 0);
        totalAmountDisplay.textContent = `R$ ${totalAmount.toFixed(2)}`;

        const totalProducts = Array.from(orderList.children).reduce(function(acc, curr) {
            const quantity = parseInt(curr.textContent.match(/Quantidade:\s(\d+)/)[1]);
            return acc + quantity;
        }, 0);
        totalProductsDisplay.textContent = totalProducts;
    }

    // Função para limpar a lista de produtos
    clearListButton.addEventListener("click", function() {
        orderList.innerHTML = "";
        totalAmountDisplay.textContent = "R$ 0,00";
        totalProductsDisplay.textContent = 0;
        codigoItemInput.value = "";
        quantidadeItemInput.value = "";
    });

    // Função para adicionar itens ao carrinho
    addItemButton.addEventListener("click", function() {
        const codigoItem = codigoItemInput.value;
        const quantidadeItem = parseInt(quantidadeItemInput.value);

        const item = listaCompras.find(function(item) {
            return item.id == codigoItem;
        });

        if (item) {
            const totalItem = quantidadeItem * item["Valor Unitário"];
            const listItem = document.createElement("p");
            listItem.textContent = `${item["Nome"]} | Quantidade: ${quantidadeItem} | Total: R$ ${totalItem.toFixed(2)}`;
            orderList.appendChild(listItem);

            // Atualizar total da venda e quantidade de produtos
            updateSaleDetails();
        } else {
            alert("Item não encontrado na lista.");
        }
    });
});
