import style from './style.module.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div className={style.containerMenu}>
            <div>
                <p className={style.logoContainer}>Adventure Trail FD</p>
            </div>
            <div>
                <ul className={style.listContainer}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/explorar">Explorar Trilha</Link></li>
                    <li><Link to="/cadastrar">Cadastrar Trilha</Link></li>
                </ul>
            </div>
        </div>
    )
}