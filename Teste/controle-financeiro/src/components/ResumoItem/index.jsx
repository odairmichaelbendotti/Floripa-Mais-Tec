import style from './style.module.css'
import { FaArrowAltCircleUp, FaArrowCircleDown, FaCalculator  } from "react-icons/fa";

export const Resumoitem = ({ title, icon, valor }) => {
    return(
        <div className={style.card}>
            <div className={style.titleHeader}>
                <h3>{title}</h3>
                {icon}
            </div>
            <div className={style.spanClass}>
                <span>{valor}</span>
            </div>
        </div>
    )
}