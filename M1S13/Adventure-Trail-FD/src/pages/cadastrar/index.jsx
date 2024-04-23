import { useState } from 'react';
import style from './style.module.css';
import { Link } from 'react-router-dom';

export const Cadastrar = () => {
    const [nomeTrilha, setNomeTrilha] = useState('');
    const [linkTrilha, setLinkTrilha] = useState('');
    const [tempoTrilha, setTempoTrilha] = useState('');
    const [cidadeTrilha, setCidadeTrilha] = useState('');
    const [estadoTrilha, setEstadoTrilha] = useState('');
    const [usuarioTrilha, setUsuarioTrilha] = useState('');
    const [dificuldadeTrilha, setDificuldadeTrilha] = useState('');
    const [erro, setErro] = useState('');

    const validarFormulario = () => {
        if (!nomeTrilha || !linkTrilha || !tempoTrilha || !cidadeTrilha || !estadoTrilha || !usuarioTrilha || !dificuldadeTrilha) {
            setErro('Todos os campos são obrigatórios.');
            return false;
        }
        // Adicione aqui outras validações conforme necessário
        setErro('');
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formularioValido = validarFormulario();
        if (formularioValido) {
            console.log('Formulário enviado!');
            // Aqui você pode adicionar o código para enviar os dados do formulário
            // navigate('/algum-caminho'); // Se você quiser redirecionar o usuário
        }
    };

    return (
        <div className={style.container}>
            <form onSubmit={handleSubmit} className={style.secondContainer}>
                <div className={style.terceiroContainer}>
                    <h2 className={style.titulo}>Cadastro de nova trilha</h2>
                    {erro && <p className={style.erro}>{erro}</p>}
                    <div className={style.divTwo}>
                        <div className={style.div}>
                            <label htmlFor="trailName">Nome da trilha</label>
                            <input type="text" id='trailName' placeholder='Nome da trilha'
                                   onChange={(e) => setNomeTrilha(e.target.value)}
                                   value={nomeTrilha} />
                        </div>
                        <div className={style.div}>
                            <label htmlFor="trailURL">URL da Trilha</label>
                            <input type="text" id='trailURL' placeholder='URL da trilha'
                                   onChange={(e) => setLinkTrilha(e.target.value)}
                                   value={linkTrilha} />
                        </div>
                    </div>
                    <div className={style.divTwo}>
                        <div className={style.div}>
                            <label htmlFor="trailDuration">Duração estimada (min)</label>
                            <input type="number" id='trailDuration' placeholder='Duração em minutos'
                                   onChange={(e) => setTempoTrilha(e.target.value)}
                                   value={tempoTrilha} />
                        </div>
                        <div className={style.div}>
                            <label htmlFor="trailCidade">Cidade</label>
                            <input type="text" id='trailCidade' placeholder='Cidade'
                                   onChange={(e) => setCidadeTrilha(e.target.value)}
                                   value={cidadeTrilha} />
                        </div>
                        <div className={style.div}>
                            <label htmlFor="trailEstado">Estado</label>
                            <input type="text" id='trailEstado' placeholder='Estado'
                                   onChange={(e) => setEstadoTrilha(e.target.value)}
                                   value={estadoTrilha} />
                        </div>
                    </div>
                    <div className={style.divTwo}>
                        <div className={style.div}>
                            <label htmlFor="trailUser">Nome de usuário</label>
                            <input type="text" id='trailUser' placeholder='Nome de usuário'
                                   onChange={(e) => setUsuarioTrilha(e.target.value)}
                                   value={usuarioTrilha} />
                        </div>
                        <div className={style.div}>
                            <label htmlFor="trailDificuldade">Dificuldade</label>
                            <input type="text" id='trailDificuldade' placeholder='Dificuldade'
                                   onChange={(e) => setDificuldadeTrilha(e.target.value)}
                                   value={dificuldadeTrilha} />
                        </div>
                    </div>
                    <div className={style.botoes}>
                        <button type="submit" className={style.cadastrar}>Cadastrar trilha</button>
                        <Link to='/'><button type="button" className={style.voltar}>Voltar</button></Link>
                    </div>
                </div>
            </form>
        </div>
    );
};
