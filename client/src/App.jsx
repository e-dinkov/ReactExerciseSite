
import { Route, Router, Routes } from 'react-router'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import Details from './components/Details/Details';
import GameCreate from './components/GameCreate/GameCreate';
import Register from './components/Register/register';


function App() {
  

  return (
    <>
    
      
        <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Catalog />} />
        <Route path="/games/:gameId/details" element={<Details />} />
        <Route path="/games/create" element={<GameCreate />} />
        <Route path='/register' element={<Register />} />
        </Routes>

       
      <Footer/>
      
    </>
  ); 
}

export default App
