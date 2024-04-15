function Saudacao(props){
    
    function gerarSaudacao(algumNome) {
        return `Olá brasileiro ${algumNome}`
    }

    return (
        <div>
            <p>{gerarSaudacao(props.seuNome)}</p>
        </div>
    )
}

export default Saudacao