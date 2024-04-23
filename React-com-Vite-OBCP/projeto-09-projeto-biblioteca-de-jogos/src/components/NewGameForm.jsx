import { useState } from "react"
import PropTypes from "prop-types"

Form.PropTypes = {
    addGame: PropTypes.func
}

export default function Form({addGame}) {

    const [title, setTitle] = useState('')
    const [cover, setCover] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addGame({title, cover})
        setTitle('')
        setCover('')
    }

    return(
        <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Nome do jogo</label>
                    <input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="cover">Capa</label>
                    <input type="text" name="cover" id="cover" value={cover} onChange={(e) => setCover(e.target.value)}/>
                </div>
                <button type="submit">Adicionar à biblioteca</button>
            </form>
    )
}