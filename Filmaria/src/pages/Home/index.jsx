import { useEffect, useState } from 'react'
import style from './style.module.css'
import { Container } from '../../components/Layout/index'
import api from '../../services/api'

//URL: movie/now_playing?api_key=bb8968a5b4783e69dc794148fdb5545c&language=pt-br

export const Home = () => {
    const [filmes, setFilmes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "bb8968a5b4783e69dc794148fdb5545c",
                    language: "pt-BR",
                    page: 1,
                }
            })

            console.log(response.data.results.slice(10))
            setFilmes(response.data.results.slice(10))
            setLoading(false)
        }
        loadFilmes();
    }, [])


    if (loading){
        return(
            <div className={style.loading}>
                <h2>Carregando filmes</h2>
            </div>
        )
    } else {
        return (
            <div className={style.containerHome}>
                <Container>
                    <div className={style.movieList}>
                    <div className={style.gridArea}>
                        {filmes.map((filme) => {
                            return(
                                    <div key={filme.id} className={style.items}>
                                        <img src={`https://image.tmdb.org/t/p/original${filme.poster_path}`} alt={filme.title} />
                                        <div className={style.movieTitle}>{`${filme.title}`}</div>
                                        <div className={style.movieButton}>Acessar</div>
                                    </div>
                            )
                        })}
                    </div>
                    </div>
                </Container>
            </div>
        )
    }


}