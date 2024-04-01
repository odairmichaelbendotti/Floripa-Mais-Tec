const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')

const newYear =  new Date();

function countDown(){
    const newYearsDate = new Date(newYear)
    const currentDate = new Date()

    
    const totalSeconds = (newYearsDate - currentDate) / 1000 //Converter o tempo faltante de milissegundo para segundos.

    const days = Math.floor((totalSeconds / 3600) / 24)
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
}

function formatTime(time){
    return time < 10 ? `0${time}` : time
}

setInterval(countDown, 1000)
countDown()