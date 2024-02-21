function verificarMaioridade() {
    var idade = prompt("Insira sua idade:");
    idade = +idade;
  
    if (Number.isInteger(idade) && idade >= 0) {
      if (idade >= 18) {
        alert("Você é maior de idade.");
      } else {
        alert("Você é menor de idade.");
      }
    } else {
      alert("Insira um número inteiro válido para a idade.");
    }
  }
  
  verificarMaioridade();
  