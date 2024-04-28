import { useState } from 'react'
import style from './style.module.css'

export const Form = () => {

    const[arrayReceber, setArrayReceber] = useState([])
    const[video, setVideo] = useState('');
    const[categoria, setCategoria] = useState('');
    const[pvalue, setPValue] = useState(video);
    

    function holdSend(e){
        e.preventDefault()
        console.log(video)
        console.log(categoria)
        
        const novoItem = {
            nome: video,
            categoria: categoria
        }
        
        setArrayReceber([...arrayReceber, novoItem])
        console.log(arrayReceber)
        setPValue(video)
    }

    return (
        <section className={style.container}>
            <h2>Cadastro de formulário</h2>
            <form>
                <div>
                    <label htmlFor="url">URL do vídeo</label>
                    <input type="text" 
                    placeholder='Digite a URL do vídeo' 
                    onChange={((e) => setVideo(e.target.value))}
                    />
                </div>
                <div>
                    <label htmlFor="categoria">Categoria</label>
                    <select
                        onChange={((e) => setCategoria(e.target.value))}
                    >
                        <option value="-">Selecione uma categoria</option>
                        <option value="comedia">Comédia</option>
                        <option value="drama">Drama</option>
                    </select>
                </div>
                <div className={style.qualquer}>
                    <button onClick={holdSend}>Enviar</button>
                    <div>
                        <p>{pvalue}</p>
                        <p>{categoria}</p>
                    </div>
                </div>
            </form>
        </section>
    )
}