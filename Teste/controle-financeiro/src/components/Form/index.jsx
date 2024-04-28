import { useState } from 'react'
import style from './style.module.css'

export const Form = ({ handleSave, setDesc, setValor, setRadio, desc, valor, radio }) => {

    return (
        <div className={style.formcontainer}>
            <div className={style.inputsArea}>
                <div className={style.internLabel}>
                    <label htmlFor="descricao">Militar</label>
                    <input required type="text" id='descricao' value={desc} onChange={((e) => (setDesc(e.target.value)))} />
                </div>
                <div className={style.internLabel}>
                    <label htmlFor="valor">Valor</label>
                    <input required type="number" id='valor' value={valor} onChange={((e) => setValor(e.target.value))} />
                </div>
            </div>
            <div className={style.btnArea}>
                <div className={style.btnRadio}>
                    <div>
                        <input type="radio" id="group1" name="radioGroup" defaultChecked onChange={(() => setRadio(!radio))} />
                        <label htmlFor="group1">Entrada</label>
                    </div>
                    <div>
                        <input type="radio" id="group2" name="radioGroup" />
                        <label htmlFor="group2">Saída</label>
                    </div>
                    <button onClick={handleSave}>Adicionar</button>
                </div>
            </div>
        </div>
    )
}