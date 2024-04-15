const jogos = [
  {
    id: 1,
    imagem: "https://source.unsplash.com/random",
    nome: "Street Fighter V",
    anoLancamento: 2016,
    tipo: "luta"
  },
  {
    id: 2,
    imagem: "https://source.unsplash.com/random",
    nome: "Gran Turismo Sport",
    anoLancamento: 2017,
    tipo: "corrida"
  },
  {
    id: 3,
    imagem: "https://source.unsplash.com/random",
    nome: "Mortal Kombat 11",
    anoLancamento: 2019,
    tipo: "luta"
  },
  {
    id: 4,
    imagem: "https://source.unsplash.com/random",
    nome: "Forza Horizon 4",
    anoLancamento: 2018,
    tipo: "corrida"
  },
  {
    id: 5,
    imagem: "https://source.unsplash.com/random",
    nome: "Super Smash Bros. Ultimate",
    anoLancamento: 2018,
    tipo: "luta"
  }
];


//---Forma não muito usual de renderizar listas
// let jogosComponents = [];

// // jogos.forEach(game => {
// //   jogosComponents.push(<h2>{game.nome}</h2>)
// // })

export const App = () => {
  return(
    <div id="app" style={{padding: "5px" , display:"flex", gap:"20px" }} >
      <h1>Meus jogos</h1>
        {jogos.map((index) => {
          return (
            <div key={index.id} >
              <img src={index.imagem} alt="" style={{width: "500px"}}/>
              <h2>{index.nome}</h2>
              <p>{index.tipo}</p>
            </div>
          )
        })}
    </div>
  )
}