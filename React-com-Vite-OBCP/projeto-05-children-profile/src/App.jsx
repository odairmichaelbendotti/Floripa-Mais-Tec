import { useState } from 'react'
import { Title } from './assets/components/Title/index'

export const App = () => {
  return (
    <div>
      <Title> 
        <span>Odair</span>
        <span>Michael</span>
        <button>Entrar</button>
      </Title>
    </div>
  )
}