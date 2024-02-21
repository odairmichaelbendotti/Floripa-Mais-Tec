function verificarMaioridade() {
  let idade = prompt("Insira sua idade:");

  idade = Number(idade);

  if (!isNaN(idade)) {
    if (idade >= 18) {
      console.log("Você é maior de idade.");
    } else {
      console.log("Você é menor de idade.");
    }
  } else {
    console.log("Insira uma idade válida.");
  }
}

verificarMaioridade();
