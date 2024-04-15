import { useState } from "react"

function Condicional(){

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }

    function limparEmail(e){
        e.preventDefault()
        setUserEmail('')
    }

    return (
        <div>
            <h2>Casdastre o seu e-mail.</h2>
            <form>
                <input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}/>
                <button type="submit" onClick={enviarEmail}>Enviar</button> 
                <button onClick={limparEmail}>Limpar e-mail</button>
                {userEmail && ( //Verifica se o e-mail é true, ou seja se foi difitado algo. Ou seja, ele cria a div quando o userEmail estiver preenchido.
                    <div>
                        <p>O e-mail do usuário é: {userEmail}</p>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Condicional