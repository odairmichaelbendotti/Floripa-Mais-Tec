import style from './style.module.css'
import { Resumoitem } from '../ResumoItem'
import { FaArrowAltCircleUp, FaArrowCircleDown, FaCalculator  } from "react-icons/fa";

export const Resumo = () => {
    return(
        <div className={style.resumo}>
            <Resumoitem title='Entrada' icon={<FaArrowAltCircleUp />} valor='R$1.000,00'/>
            <Resumoitem title='Saída' icon={<FaArrowCircleDown />} valor='R$500,00'/>
            <Resumoitem title='Balanço' icon={<FaCalculator />} valor='R$500,00'/>
        </div>
    )
}