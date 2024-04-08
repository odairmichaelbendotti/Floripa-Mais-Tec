import {Card} from './components/Card-01/Card'
export const App = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }}>
      <Card title="Digimon"/>
      <Card title="Pokemon"/>
      <Card title="Três espiãs"/>
    </div>
  )
}