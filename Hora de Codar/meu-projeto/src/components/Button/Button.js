import style from './style.module.css'
import PropTypes from 'prop-types'

function meuEvento(){
    alert('Opa, deu boa.')
}

export const Button = ({btnName, evento}) => {
    return (
        <div className={style.containerDiv}>
            <button onClick={() => {
                {meuEvento()}
                {evento()}
            }
            }>{btnName}</button>
            <p>Visor aqui</p>
        </div>
    )
}

Button.propTypes = {
    btnName: PropTypes.string.isRequired
}

Button.defaultProps = {
    btnName: 'Enviar'
}