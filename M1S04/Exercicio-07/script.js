function saudacaoPorHora(hora) {
    if (hora >= 6 && hora < 12) {
        console.log("Bom dia!");
    } else if (hora >= 12 && hora < 18) {
        console.log("Boa tarde!");
    } else if (hora >= 18 || hora < 6) {
        console.log("Boa noite!");
    } else {
        console.log("Hora inválida!");
    }
}

saudacaoPorHora(8);  
saudacaoPorHora(13);
saudacaoPorHora(20);
saudacaoPorHora(3);
