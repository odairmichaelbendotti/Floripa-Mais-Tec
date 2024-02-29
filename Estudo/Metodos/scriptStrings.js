let stringExemple = 'Odair Michael Bendotti'
let stringComEspaco = '         odair                  '

//Contar número de caracteres da string (lenght)
console.log(stringExemple.length)

/*Buscar algo específico na string (stringOf) - Mostra a posição em que o texto se encontra
Caso nada seja encontrado, retornará -1. M de Michael começa na posição 6 O(é o zero)dair */
let resultado = stringExemple.indexOf('Michael')
console.log(resultado)

if (resultado !== -1){
    console.log(`O nome inicia na posição ${resultado}`)
} else{
    console.log('Nome não encontrado')
}

/*----------------------------------------------------------------------------------------------

Cortar uma string:
Solicitará dois parâmetros, contudo, somente o primeiro é obrigatório. Deve-se inserir a posição em que
se deseja cortar a string. Caso o número colocado seja negativo, o slice começará a contagem do final
da string, sendo assim, de trás para frente.*/
let resultado2 = stringExemple.slice(0, 10);
console.log(resultado2)

/*Substituir textos específicos na string*/
let resultado3 = stringExemple.replace('Odair', 'Macho')
console.log(resultado3)

/*Deixar o texto em maiúsculo*/
let resultado4 = stringExemple.toUpperCase();
console.log(resultado4)

/*Deixar o texto em minúsculo*/
let resultado5 = stringExemple.toLowerCase();
console.log(resultado5)

/*Remover espaços de uma string*/
let resultado6 = stringComEspaco.trim()
console.log(stringComEspaco.length)
console.log(resultado6)

/*Descobrir caractere de determinada posição da string*/
let resultado7 = stringExemple.charAt(3);
console.log(resultado7)

/*Dividir e transformar em Array*/
let resultado8 = stringExemple.split('Odair')
console.log(resultado8)


