import { useState } from 'react'
import buttons from './style.module.css'
import { Input } from '../inputs/input'

export const Buttons = () => {

    const [copiar, setCopiar] = useState('Copiar')
    const [password, setPassword] = useState('')
    const [passwordSize, setPasswordSize] = useState(12)
    const [showInput, setShowInput] = useState(false)
    
    function generate(){
        const characters = '1234567890-=~!@#$%^&*()_+[]{}|\;:,<.>/?abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let newPassword = ''
        
        for (let i = 0; i < passwordSize; i++){
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
                <div className={buttons.containerBtn}>
                    <div>
                        <label htmlFor="showInput">Customizar tamanho:</label>
                        <input type="checkbox" id="showInput" value={showInput} onChange={() => setShowInput(currentState => !currentState)}/>
                    </div>
                    <Input passwordSize={passwordSize} setPasswordSize={setPasswordSize}/>
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