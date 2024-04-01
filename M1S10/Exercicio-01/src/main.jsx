import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {CardTrilha} from './components/CardTrilha'
import {Chamada} from './components/Chamada.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  <Chamada textChamada='Explore trilhas incríveis'/>

  <CardTrilha nomeTrilha='Piscinas Naturais - Barra da Lagoa' cidade='Florianópolis' estado='SC' duracao='120mins' trajeto='4km' dificuldade='Iniciante' autorTrillha='Odair Michael Bendotti' linkImagem='https://arrumaessamala.com.br/wp-content/uploads/2021/01/piscinas-naturais-barra-da-lagoa.jpg'/>

  </React.StrictMode>,
)

