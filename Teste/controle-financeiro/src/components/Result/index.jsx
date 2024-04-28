import { useState } from 'react'
import style from './style.module.css'

export const Result = ({ handleSave, setDesc, setValor, setRadio, desc, valor, radio, setArmazenarValores, armazenarValores, item }) => {

    return (
        <div className={style.formcontainer}>
            <div className={style.inputsArea}>
                <p>{desc}</p>
            </div>
            <div className={style.btnArea}>
                <div className={style.btnRadio}>
                    <p>{valor}</p>
                    <div></div>
                </div>
            </div>
        </div>
    )
}