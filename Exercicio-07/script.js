var horario = prompt('Informe um número inteiro para representar um horário (0-23):');

function saudacao(horario){
    horario = Number(horario);
    if (horario >= 6 && horario < 12) {
        console.log("Bom dia!");
    } else if (horario >= 12 && horario < 18) {
        console.log("Boa tarde!");
    } else {
        console.log("Boa noite!");
    }
}

saudacao(horario);
