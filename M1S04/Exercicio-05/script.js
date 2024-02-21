function verificarNumero(numero) {
    if (numero > 0) {
        console.log(numero + " é positivo.");
    } else if (numero < 0) {
        console.log(numero + " é negativo.");
    } else {
        console.log("O número é zero.");
    }
}

verificarNumero(3); 
verificarNumero(-1);
verificarNumero(0); 
