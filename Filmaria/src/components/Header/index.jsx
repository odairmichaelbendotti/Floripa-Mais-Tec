import style from './style.module.css'
import { Link } from 'react-router-dom'
import { Container } from '../Layout/index'

function Header() {
    return (
        <header>
            <Container>
                <div className={style.menuArea}>
                    <div className={style.logoArea}>
                        <Link className={`${style.logo} ${style.menuText}`} to='/'>Prime Flix</Link>
                    </div>
                    <div className={style.menuText}>
                        <Link className={`${style.menu} ${style.favorite}`} to='/filmes/:id'>Filmes</Link>
                        <Link className={`${style.menu} ${style.favorite}`} to='/favoritos'>Favoritos</Link>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header;