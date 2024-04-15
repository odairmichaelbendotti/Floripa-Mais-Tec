import {useState} from 'react'
import './style.module.css'

export const Form = ({evento}) => {

    const[name, setName] = useState('')
    const[password, setPassword] = useState('')

    return (
        <>
            <form onSubmit={cadastrar}>
                <label htmlFor="username">Username</label>
                <input placeholder="Nome completo" id="username" value={name} onChange={(e) => setName(e.target.value)}></input>
                <label htmlFor="password">Password</label>
                <input placeholder="Senha" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button onClick={() => {
                    console.log(`usuário ${name} cadastrado com a senha ${password}`)
                    {evento()}
                }
                }>Enviar</button>
            </form>
        </>
    )
}

function cadastrar(e) {
    e.preventDefault(); 
}