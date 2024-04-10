import { useState } from 'react'
import buttons from './style.module.css'

export const Buttons = () => {

    const [copiar, setCopiar] = useState('Copiar')
    const [password, setPassword] = useState('')
    
    function generate(){
        const characters = '1234567890-=~!@#$%^&*()_+[]{}|\;:,<.>/?abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lenght = 12;
        let newPassword = ''
        
        for (let i = 0; i < lenght; i++){
            const position = Math.floor(Math.random() * characters.length);
            newPassword += characters[position]
        }
        setPassword(newPassword)
        setCopiar('Copiar')
    }

    function copy(){
        setCopiar('Copiado')
        window.navigator.clipboard.writeText(password)
    }

    return (
        <div className={buttons.containerBtn}>
            <div className={buttons.btnGeral}>
                <div className={buttons.containerBtns}>
                    <div className={buttons.btnGerar} onClick={generate}>Gerar</div>
                    <div className={buttons.btnCopiar} onClick={copy}>{copiar}</div>
                </div>
                <div className={buttons.containerPassword}>
                    <p>{password}</p>
                </div>
            </div>
        </div>
    )
}