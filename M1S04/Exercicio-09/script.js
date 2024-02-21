var item = prompt("Digite o item da lista de compras que você deseja dicas sobre:");

function dicaDeCompra(item) {
    switch(item.toLowerCase()) {
        case 'frutas':
            console.log("Frutas frescas estão na seção de hortifrúti. Escolha as que têm aparência firme e cor viva.");
            break;
        case 'leite':
            console.log("O leite pode ser encontrado na seção de laticínios. Verifique a data de validade ao escolher.");
            break;
        case 'carne':
            console.log("Carnes estão disponíveis no açougue. Prefira cortes com menos gordura visível.");
            break;
        case 'pão':
            console.log("Pães frescos estão na padaria. Chegue cedo para encontrar mais opções.");
            break;
        case 'legumes':
            console.log("Legumes estão na seção de hortifrúti. Escolha os que estão firmes ao toque.");
            break;
        default:
            alert("Item não encontrado na lista. Por favor, verifique a ortografia e tente novamente.");
    }
}

dicaDeCompra(item);
