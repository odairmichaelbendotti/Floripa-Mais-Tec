import style from './style.module.css'
import { Container } from '../../components/Layout/index'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Filmes = () => {

    const { id } = useParams();

    return (
        <div className={style.containerFilmes}>
            <Container>
                <div className={style.text}>
                    <p>Filme {id}</p>
                </div>
            </Container>
        </div>
    )
}