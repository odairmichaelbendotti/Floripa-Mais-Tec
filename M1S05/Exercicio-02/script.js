document.addEventListener("DOMContentLoaded", function() {
    const consultItemsButton = document.getElementById("consult-items");

    consultItemsButton.addEventListener("click", function() {
        const productList = listaCompras.map(function(item) {
            return `Código: ${item["id"]} ${item["Nome"]} | Estoque: ${item["Quantidade"]} | Valor unitário: R$ ${item["Valor Unitário"].toFixed(2)}`;
        }).join("\n");
        
        const popupWindow = window.open("", "Produtos", "width=600,height=400");
        popupWindow.document.write(`<pre>${productList}</pre>`);
    });
});
