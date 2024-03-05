//Exibir hora atual atualizada direto
function showTime(){
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let txt = `${h}:${m}:${s}`
    let mostrar = document.querySelector('.demo');
    mostrar.innerHTML = txt


/*O primeiro parâmetro consiste na função que desejamos executar o intervalo
e o segundo parâmetro é de quanto em quanto tempo que o valor deve ser atualizado.
O valor será em milisegundos
1 segundo = 1000 milisegundos
1 minuto = 60000 milisegundos
1 hora = 3600000 milisegundos
*/
}

showTime()

//Let somente pode ser usado no escopo da função, por isso timer deve ser criado fora da função.
let timer;
let comecar = document.querySelector('.comecar').addEventListener('click', function(){
    timer = setInterval(showTime, 1000)
})

let parar = document.querySelector('.parar').addEventListener('click', function(){
    clearInterval(timer)
})

/*

A função clearInterval() é uma função integrada do JavaScript usada para parar a execução 
de um intervalo que foi previamente estabelecido usando setInterval(). Quando você chama 
setInterval(), ela retorna um identificador único (um valor numérico) que representa o 
intervalo. Esse identificador pode ser usado posteriormente para referenciar e parar o 
intervalo com clearInterval().
*/

//Esperar um intervalo de tempo X para começar a rodar determinada função:
//Escopo inicial: setTimeout(function(){}, 1000)
//Let somente pode ser usado no escopo da função, por isso tempo deve ser criado fora da função.
let tempo;
document.querySelector('.rodar').addEventListener('click', function(){
    tempo = setTimeout(function(){
        alert('Rodou')
    }, 2000)
})

//Para parar de rodar antes da função ser executada
document.querySelector('.pararderodar').addEventListener('click', function(){
    clearTimeout(tempo);
})


