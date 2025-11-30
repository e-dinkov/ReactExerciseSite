
import { Route, Router, Routes } from 'react-router'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import Details from './components/Details/Details';


function App() {
  

  return (
    <>
    
      
        <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Catalog />} />
        <Route path="/games/:gameId/details" element={<Details />} />
        </Routes>

       
      <Footer/>
      
    </>
  ); 
}

export default App
