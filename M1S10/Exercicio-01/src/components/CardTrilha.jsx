import PropTypes from 'prop-types';

export const CardTrilha = ({nomeTrilha, cidade, estado, duracao, trajeto, dificuldade, autorTrillha, linkImagem}) => {

  return (
    <div className="container-trilha">
        <div className="container-img">
            <img src={linkImagem} alt="imagm da trilha" />
        </div>
        <div className="container-text">
            <div className='trilha-name-box'>
                <h3>{nomeTrilha} / {cidade}-{estado}</h3>
                <i class="fa-regular fa-heart"></i>
            </div>
            <div className='risco'></div>
            <div className='autor'> 
                <p>Por: {autorTrillha}</p>
            </div>
            <div className='about-trilha'>
                <p>Duração: {duracao}</p>
                <p>Trajeto: {trajeto}</p>
            </div>
            <div className='dificuldade'>
                {dificuldade}
            </div>
            <div className='avaliacoes'>
                <i class="fa-solid fa-heart"></i>
                <i class="fa-solid fa-heart"></i>
                <i class="fa-solid fa-heart"></i>
                <i class="fa-solid fa-heart"></i>
                <i class="fa-regular fa-heart"></i>
            </div>
        </div>

    </div>
  )
}

CardTrilha.propTypes = {
    nomeTrilha: PropTypes.string,
    cidade: PropTypes.string
  };