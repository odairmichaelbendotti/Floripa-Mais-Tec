let contar = document.querySelector('.contador');
let tempo = 5; //em segundos


function timer(){
let minutes = Math.floor(tempo / 60)
let seconds = (tempo % 60);
if (seconds < 10){
    seconds = `0${seconds}`
}
console.log()
contar.innerHTML = `${minutes}:${seconds}`

if (tempo <= 0){
    clearInterval(interval)
} else {
    tempo--;
}
}

let interval = setInterval(timer, 1000)