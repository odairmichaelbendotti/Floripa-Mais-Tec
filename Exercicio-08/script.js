let number = prompt('Digite um número qualquer:');

function calc(number){

    if (number % 2 > 0){
        console.log(`${number} é um número ímpar.`);
    } else{
        console.log(`${number} é um número par.`)
    }
}

calc(number);
