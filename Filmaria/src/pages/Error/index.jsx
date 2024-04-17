import style from './style.module.css'
import { Link } from 'react-router-dom'
import { Container } from '../../components/Layout/index'

export const Error = () => {
    return (
        <div className={style.containerError}>
            <Container>
                <div className={style.areaError}>
                    <h1>Erro 404 - Página não encontrada</h1>
                    <Link to="/" className={style.areaButton}>
                        <div>
                            Ver catálogo de filmes
                        </div>
                    </Link>
                </div>
            </Container>
        </div>
    )
}