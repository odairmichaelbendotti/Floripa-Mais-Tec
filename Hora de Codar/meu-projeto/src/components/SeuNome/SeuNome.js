import { useState } from "react"

function SeuNome(props){
    return (
        <div>   
            <p>Digite seu nome</p>
            <input type="text" placeholder="Qual é o seu nome?" onChange={(e) => props.digitarNome(e.target.value)}></input>
        </div>
    )
}

export default SeuNome