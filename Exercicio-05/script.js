var number = Number(prompt('Informe um número qualquer: '));

function chooseNumber(){
    if (number > 0) {
        console.log(`${number} é positivo.`)
    } else if (number == 0){
        console.log(`${number} é zero.`)
    } else {
        console.log(`${number} é negativo.`)
    }
}

chooseNumber();