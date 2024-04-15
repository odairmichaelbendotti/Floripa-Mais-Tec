import style from './style.module.css'
import PropTypes from 'prop-types'

export const HelloWorld = ({name, age }) => {
    return (
        <div>
            <h1 className={style.colorBg}>Meu primeiro componente {name} - {age}</h1>
        </div>
    )
}

HelloWorld.defaultProps = {
    name: 'Faltou a marca',
    age: 0
}

HelloWorld.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
}