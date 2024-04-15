import './style.module.css'

export const Input = (props) => {
    return(
        <>
            <input type="number" id="passwordSize" min={1} placeholder='nº caracteres'value={props.passwordSize} onChange={(ev) => props.setPasswordSize(ev.target.value)}/>
        </>
    )
}