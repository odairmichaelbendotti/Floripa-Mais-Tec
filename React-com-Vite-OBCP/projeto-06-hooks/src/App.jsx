import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useCounter } from './assets/hooks/useCounter'

function App() {
  const counter = useCounter();

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={counter.increment}>
          count is {counter.count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
