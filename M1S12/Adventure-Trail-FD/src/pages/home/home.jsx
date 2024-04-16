import style from './style.module.css'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div className={style.container}>
            <div class={style.content}>
                <div className={style.principalBanner}>
                    <h2 className={style.titulo}>Que tal aproveitar um tempo com a natureza?</h2>
                    <p>Junte-se à comunidade de entusiastas ao ar livre, compartilhe suas aventuras e inspire-se com as experiências de outros aventureiros. Prepare-se para explorar novos horizontes e se conectar com a natureza através do Adventure Trails!</p>
                    <div className={style.explorarTrilhas}>
                        <Link to="/explorar">Explorar trilhas </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}