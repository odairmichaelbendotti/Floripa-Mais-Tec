import boxCss from './box.module.css'
import { Buttons } from '../buttons/Buttons'

export const Box = (props) => {
    return (
        <div className={boxCss.containerArea}>
            <h1>Gerdor de senhas</h1>
            <Buttons />
        </div>
    )
}