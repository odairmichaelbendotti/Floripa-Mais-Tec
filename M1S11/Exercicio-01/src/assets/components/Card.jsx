import CardStyle from '../components/styleComponents/CardStyle.module.css'

export const Card = ({nomeTrilha, cidade, estado, autor, tempo, nivel, distancia}) => {
    return (
        <div className={CardStyle.bg}>
            <div className={CardStyle.containerImg}>
                <img src="https://meumapamundi.com.br/wp-content/uploads/2021/05/Piscinas-Naturais-Barra-da-Lagoa-Floriano%CC%81polis.jpg" alt="Piscinas naturais" />
            </div>
            <div className={CardStyle.containerText}>
                <h1>{nomeTrilha} - {cidade}/{estado}</h1>
                <div className={CardStyle.line}></div>
                <h2 className={CardStyle.leftH2}>Por: {autor}</h2>
                <div className={CardStyle.divSeparator}>
                    <h3>Duração: {tempo}min</h3>
                    <h3>Trajeto: {distancia}km</h3>
                    <h3 className={CardStyle.dificuldade}>{nivel}</h3>
                    <div className={CardStyle.avaliacoes}>
                        <i class="fa-solid fa-heart"></i>
                        <i class="fa-solid fa-heart"></i>
                        <i class="fa-solid fa-heart"></i>
                        <i class="fa-solid fa-heart"></i>
                        <i class="fa-regular fa-heart"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}