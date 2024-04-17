import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Home } from './components/pages/Home/Home'
import { Contact } from './components/pages/Contact/Contact'
import { Company } from './components/pages/Company/Company'
import { Newproject } from './components/pages/Newproject/Newproject'
import { Container } from './components/Layout/Container'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass='min-height'>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/company" element={<Company/>}></Route>
          <Route path="/newproject" element={<Newproject/>}></Route>
       </Routes>
      </Container>
      <Footer />
    </Router>

  );
}

export default App;
