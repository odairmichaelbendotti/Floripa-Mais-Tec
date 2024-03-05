let pessoa = {
    nome: 'Odair',
    sobrenome: 'Bendotti',
    idade: 28,
    rede:{
        facebook: 'facebook.com/odair',
        instagram: 'instagram.com/odair',
        twitter: 'twitter.com/odair',
        tiktok: 'tiktok.com/odair',
        linkedin: 'linkedin.com/odair'
    },
    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome}`
    }
};

//Para pegar cada informação sem a desestruturação, deve-se fazer o seguinte:
let idade = pessoa.idade;
console.log(idade);

let facebook = pessoa.rede.facebook;
console.log(facebook)

/*Ao invés de criar uma variável e colocar cada item específico na variável, pode-se
desconstruir o objeto, conforme mostrado abaixo: */
// let {colocar tudo que se quer desconstruir aqui dentro} = pessoa;

let {nome: nomePessoa, sobrenome, rede} = pessoa
//cada nome dentro do let vira uma variável, por isso, basta dar um console.log(variavel)
/*Para mudar o nome que será igual ao nome do objeto (nome, por exemplo), basta faze o seguinte:
nome: nomePessoa \ idade: idadePessoa e assim por diante, o novo nome da variável será idadePessoa. */
console.log(nomePessoa, ' | ',sobrenome,' | ', rede.instagram)

//outra forma de selecionar objetos que estão dentro de objetos:
let {twitter, tiktok} = pessoa.rede
console.log(twitter,' | ', tiktok)

//Desconstruindo um array (O array não tem um nome como index, ele tem um número).
let testeArray = ['Odair', 'Bendotti', '@omichael.b'];

let [nome, ultimoNome, instagram] = testeArray;
console.log(nome, ultimoNome, instagram)

/*A desconstrução deve ser feita na ordem em que o Array está sendo criado. 
A única identificação do array é o index*/

//Para pular um item do array basta deixar ele em branco, neste caso, o primeiro:
let infos = [182, 90, 25.8];
let [ , peso, imc] = infos;
console.log(peso, imc)

/*/Uma forma interresante de declarar várias variáveis, no começo do código, por exemplo
é fazendo o seguinte:*/
let [pi, quadrado, retangulo, sexo = 'masculino'] = [3.14, 'subir', 'inválido']
console.log(pi, quadrado, retangulo);

//mesmo tipo de aplicação:
function criar(){
    return [1, 2, 3];
}

let [a, b, c] = criar();
console.log(a, b, c)