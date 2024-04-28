import { useState } from 'react'
import './App.css'
import { FirstMenu } from './components/FirstMenu/index'
import { Nomes } from './components/SecondMenu'
import { Form } from './components/Formulario'



function App() {
  const [name, setName] = useState([
    {
      id: 1,
      nome: "Odair Michael Bendotti",
      idade: 28
    },
    {
      id: 2,
      nome: "Luan Carlos Bendotti",
      idade: 23
    },
  ])

  function oneClick(){
    {name.map((nomes) => (
      <Nomes key={nomes.id} nomes={nomes}/>
    ))}
  }

  return (
    <div className='odair'>
      <FirstMenu />
      <div className='map'>
        
      </div>
      <Form />
    </div>
  )
}

export default App
