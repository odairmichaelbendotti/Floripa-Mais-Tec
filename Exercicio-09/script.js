let itemDeCompra = prompt(`
Insira uma das opções: 
| frutas | vegetais | carnes | laticínios |
`).toLowerCase();

switch (itemDeCompra) {
  case "frutas":
    console.log("Frutas adicionadas à lista! Não esqueça de comprar maçãs e bananas.");
    break;
  case "vegetais":
    console.log("Vegetais na lista! Lembre-se de pegar cenouras e alface.");
    break;
  case "carnes":
    console.log("Carnes selecionadas! Frango e carne moída estão na oferta.");
    break;
  case "laticínios":
    console.log("Laticínios adicionados! Iogurte e queijo não podem faltar.");
    break;
  default:
    console.log("Item não reconhecido. Por favor, verifique a lista novamente.");
}

