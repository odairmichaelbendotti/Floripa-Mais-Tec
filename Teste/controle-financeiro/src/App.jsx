import { useState } from 'react'
import './App.css'
import { Header } from './components/Header/index'
import { Container } from './layout/Container/index'
import { Resumo } from './components/Resumo/index'
import { Form } from './components/Form'
import { Result } from './components/Result'

function App() {

  const [desc, setDesc] = useState('')
  const [valor, setValor] = useState('')
  const [radio, setRadio] = useState(false)
  const [armazenarValores, setArmazenarValores] = useState([])

  const handleSave = () => {
    if (!desc || !valor) {
      alert('Todos os campos devem ser preenchidos')
      return //return servirá para parar o código se a condição for satisfeita.
    } else if (valor < 1) {
      alert('O valor não pode ser negativo')
      return //return servirá para parar o código se a condição for satisfeita.
    } else {
      setArmazenarValores([...armazenarValores, {
        militar: desc,
        valor: valor
      }])
      console.log(armazenarValores)
    }
  }


  return (
    <div className='container'>
      <Container>
        <Header />
        <Resumo />
        <Form handleSave={handleSave} setDesc={setDesc} setValor={setValor} setRadio={setRadio} valor={valor} desc={desc} />
        <Result handleSave={handleSave} setDesc={setDesc} setValor={setValor} setRadio={setRadio} valor={valor} desc={desc} armazenarValores={armazenarValores} setArmazenarValores={setArmazenarValores} />
      </Container>
    </div>
  )
}

export default App
