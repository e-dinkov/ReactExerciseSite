import { useState } from 'react'
import { Route, Router, Routes } from 'react-router'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      
        <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Catalog />} />
        </Routes>

       
      <Footer/>
      
    </>
  ); 
}

export default App
