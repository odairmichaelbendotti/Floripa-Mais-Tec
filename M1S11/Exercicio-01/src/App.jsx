// App.jsx
import React from 'react';
import { Card } from './assets/components/Card'; // Certifique-se de que o caminho está correto
import trilhas from './assets/trilhas'; // Importa o array de trilhas diretamente
import './index.css'
import { Header } from './assets/components/Header'

const App = () => {
  return (
    <div>
    <Header />
      {trilhas.map(trilha => (
        <Card
          key={trilha.nomeTrilha}
          nomeTrilha={trilha.nomeTrilha}
          cidade={trilha.cidade}
          estado={trilha.estado}
          autor={trilha.autor}
          tempo={trilha.tempo}
          distancia={trilha.distancia}
          nivel={trilha.nivel}
          url={trilha.url}
        />
      ))}
    </div>
  );
}

export default App;
