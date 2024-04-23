import { useState } from 'react'
import { Cadastrar } from './pages/cadastrar/cadastrar'
import { Home } from './pages/home/home'
import { Explorar } from './pages/explorar/explorar'
import { Navbar } from './components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {

  return (
    <Router>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/explorar" element={<Explorar />}> </Route>
        <Route path="/cadastrar" element={<Cadastrar />}> </Route>
      </Routes>
    </Router>
  )
}

export default App
