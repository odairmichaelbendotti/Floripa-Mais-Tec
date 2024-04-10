import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import { Box } from './components/box/box'

export const App = () => {
  return(
    <div>
      <Box nome='Odair' phone='47996439372'/>
    </div>
  )
}