import style from './style.module.css'
import { Trail } from '../../components/Trilhas'
import { useState } from 'react'
import { Cadastrar } from '../cadastrar/index'

export const Explorar = () => {

    const [trails, setTrails] = useState([
        {
            id: 1,
            nomeDaTrilha: "Trilha do Pico da Bandeira",
            cidade: "Alto Caparaó",
            estado: "Minas Gerais",
            fotografo: "Carlos Silva",
            duracao: "6",
            trajeto: "12",
            dificuldade: "intermediário",
            img: "https://images.unsplash.com/photo-1600284536251-8bb98db53468?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 2,
            nomeDaTrilha: "Trilha do Pico da Bandeira",
            cidade: "Alto Caparaó",
            estado: "Minas Gerais",
            fotografo: "Carlos Silva",
            duracao: "6",
            trajeto: "12",
            dificuldade: "intermediário",
            img: "https://plus.unsplash.com/premium_photo-1669839774560-f4524492b1d7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 3,
            nomeDaTrilha: "Trilha do Pico da Bandeira",
            cidade: "Alto Caparaó",
            estado: "Minas Gerais",
            fotografo: "Carlos Silva",
            duracao: "6",
            trajeto: "12",
            dificuldade: "intermediário",
            img: "https://plus.unsplash.com/premium_photo-1669839774560-f4524492b1d7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 4,
            nomeDaTrilha: "Trilha do Pico da Bandeira",
            cidade: "Alto Caparaó",
            estado: "Minas Gerais",
            fotografo: "Carlos Silva",
            duracao: "6",
            trajeto: "12",
            dificuldade: "intermediário",
            img: "https://plus.unsplash.com/premium_photo-1669839774560-f4524492b1d7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 5,
            nomeDaTrilha: "Trilha do Pico da Bandeira",
            cidade: "Alto Caparaó",
            estado: "Minas Gerais",
            fotografo: "Carlos Silva",
            duracao: "6",
            trajeto: "12",
            dificuldade: "intermediário",
            img: "https://plus.unsplash.com/premium_photo-1669839774560-f4524492b1d7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    ])

    return (
        <div className={style.container}>
            <div className={style.containerExplorar}></div>
            <h2 className={style.firstTitle}>Explore trilhas incríveis</h2>
            <div className={style.trails}>
                {trails.map((trail) => (
                    <Trail key={trail.id} trail={trail} />
                ))}
            </div>
        </div>
    )
}