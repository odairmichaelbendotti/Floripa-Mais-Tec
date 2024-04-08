import './index.css'
import { Card } from './assets/components/Card'

export const App = () => {
  return (
    <div>
      <Card nomeTrilha='Praia' cidade='Florianópolis' estado='SC' autor='Odair Michael' tempo='120' distancia='4' nivel='Iniciante'/>
    </div>
  )
}