import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/index';
import { Filmes } from './pages/Filmes/index';
import Header from './components/Header';
import { Error } from './pages/Error';

function RoutesApp(){
    return (
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/" element={ <Home />}/>
                <Route path="/filme/:id" element={ <Filmes /> }/>

                <Route path="*" element={ < Error />}/> {/* path="*" quando a página contiver "*" vai renderizar <Error /> */}
            </Routes>
        </BrowserRouter>
    )
}
export default RoutesApp;