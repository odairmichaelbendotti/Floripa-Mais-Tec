import style from './style.module.css'
import { Container } from '../../components/Layout/index'

export const Filmes = () => {
    return (
        <div className={style.containerFilmes}>
            <Container>
                <div className={style.text}>
                    <p>Filmes</p>
                </div>
            </Container>
        </div>
    )
}