import './App.css';
import { Button } from './components/Button/Button';
import Condicional from './components/Condicional/Condicional';
import { Form } from './components/Form/Form';
import { HelloWorld } from './components/HelloWorld/HelloWorld';
import {Lista} from './components/Lista/Lista'
import { useState } from 'react';
import SeuNome from './components/SeuNome/SeuNome'
import Saudacao from './components/Saudacao/Saudacao'

function App() {
  const meusItens = ['React.Js', 'JavaScript', 'Ruby', 'NodeJS']
  const[nome, setNome] = useState() //State Lift aqui.

  function aviso() {
    alert('evento ativado')
  }

  function primeiroEvento(){
    console.log('Testando primeiro evento')
  }

  return (
    <div>
      <HelloWorld name='Odair'/>
      <Button btnName='Enviar já' evento={primeiroEvento}/>
      <Form evento={aviso}/>
      <Condicional />
      <hr></hr>
      <Lista titulo='Listas' itens={meusItens}/>
      <hr></hr>
      <SeuNome digitarNome={setNome}/>
      <Saudacao seuNome={nome}/>
    </div>
  );
}

export default App;
