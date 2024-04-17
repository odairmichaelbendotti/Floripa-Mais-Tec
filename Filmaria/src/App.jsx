import { useState } from 'react'
import { Home } from './pages/Home/index'
import { Filmes } from './pages/Filmes/index'
import { Container } from './components/Layout'
import Header from './components/Header/index'
import RoutesApp from './routes.jsx'

function App() {
  return (
    <div className='App'>
      <RoutesApp />
    </div>
  )
}

export default App