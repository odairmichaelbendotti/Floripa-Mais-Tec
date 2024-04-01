import PropTypes from 'prop-types';

export const Chamada = ({textChamada}) => {
    return(
        <div className="textChamada">
            <h3>{textChamada}</h3>
        </div>
    )
}

Chamada.propTypes = {
    textChamada: PropTypes.string
  };