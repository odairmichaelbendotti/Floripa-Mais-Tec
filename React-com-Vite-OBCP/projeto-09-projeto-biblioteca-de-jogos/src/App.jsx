import { useState } from "react"
import Game from './components/Game'
import Form from "./components/NewGameForm"

export default function App(){

    const [games, setGames] = useState(() => {
        const storedGames = localStorage.getItem('obc-game-lib')
        if (!storedGames) return []
        const gameArray = JSON.parse(storedGames)
        return gameArray
    })

    const addGame = ({title, cover}) => {
        const id = Math.floor(Math.random() * 1000000)
        const game = {id, title, cover} //Objeto game
        setGames(state => {
            const newState = [...state, game] //state = valor anterior | ...state = separa os elementos atuais do array | game = insere o jogo que acabamos de salvar.
            localStorage.setItem('obc-game-lib', JSON.stringify(newState))
            return newState
        }) 
    }

    const removeGame = (id) => {
        setGames(state => {
            const newState = state.filter(game => game.id !== id)})
            localStorage.setItem('obc-game-lib', JSON.stringify())
            return newState
    }

    return(
        <div id='app'>
            <h1>Biblioteca de jogos</h1>
            <Form addGame={addGame}/>
            <div class='games'>
                {games.map((game) => (
                    <Game 
                        key={game.id} 
                        title={game.title} 
                        cover={game.cover}
                        onRemove={() => removeGame(game.id)}
                    />
                    ))}
            </div>
        </div>
    )
}