//Em JS, o mês começa em 0. Portanto, dezembro será mês 11.
//Em JS, o dia começa em 1. Normalmente.

//Padrão JS (ano, mês, dia, hora, minutos, segundos, milésimos)
//O mínimo necessário para gerar uma data é informar o ano e o mês.

//A data no JS é contada em milisegundos, começada em 01/01/1970.
let y = new Date(86400000)
console.log(`Data inicial é ${y}`)

//Pegar data atual do próprio computador que está acessando.
let d = new Date();
console.log(d)

//Data resumida
console.log(d.toDateString())

//Padrão JS (ano, mês, dia, hora, minutos, segundos, milésimos)
let x = new Date(2020, 0, 20, 20, 13, 32)
console.log(x)

//Date string em JS
x = new Date('2020-01-01 15:13:17')
console.log(x)

//Retornar somente o ano
let dateD = d.getFullYear();
console.log(dateD)

//Retornar somente o mês
dateD = d.getMonth();
console.log(dateD)

//Retornar somente o dia da semana (vai de 0 até 6), a semana começa no domingo.
dateD = d.getDay();
console.log(dateD)

//Retornar a hora, minuto ou segundo
console.log(`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`)

//Trocar o ano
let v = new Date();
v.setFullYear(2022);
console.log(v)

//Trocar o dia (ATENÇÃO)
v.setDate(15);
console.log(v)

//Somar datas (o mesmo se aplica para horas, minutos e etc.)
v.setDate(v.getDate() + 5);
console.log(v)


