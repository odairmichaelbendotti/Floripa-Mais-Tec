import { useState } from "react";
import style from './style.module.css'

export const Lista = ({titulo, itens}) => {
    return(
        <div>
            <h1>Renderização de {titulo}</h1>
            {itens.length > 0 ? (
                        itens.map((item, index) => ( //Retorno em JSX usa () e não {}.
                            <div key={index}>{item}</div>
                        ))
                        //Ao usar MAP, cada item precisa de um key único para o React não dar pau.
            ) : ('Lista vazia')
            }
        </div>
    )
}