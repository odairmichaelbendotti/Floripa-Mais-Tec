import style from './style.module.css'
import { Link } from 'react-router-dom'
import { Container } from '../Layout/Container'
import logo from '../../img/costs_logo.png'

export const Navbar = () => {
    return (
    <nav>
        <Container>
            <div className={style.containerGeral}>
                <div className={style.containerLogo}>
                    <Link to="/"><img src={logo} alt="costs"></img></Link>
                </div>
                <div className={style.containerMenu}>
                    <ul>
                        <li><Link to="/">Início</Link></li>
                        <li><Link to="/contact">Contato</Link></li>
                        <li><Link to="/company">Sobre</Link></li>
                        <li><Link to="/newproject">Novo projeto</Link></li>
                    </ul>
                </div>
            </div>
        </Container>
    </nav>
    )
}