import style from './style.module.css'
import { useState } from 'react'

export const Nomes = ({ nomes }) => {   

    return(
        <div>
            <div className={style.names}>
                <p>{nomes.nome}</p>
                <p>{nomes.idade} anos</p>
            </div>
        </div>
    )
}