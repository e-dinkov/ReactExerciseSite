
import { Route, Router, Routes } from 'react-router'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import Details from './components/Details/Details';
import GameCreate from './components/GameCreate/GameCreate';
import Register from './components/Register/register';
import Login from './components/Login/Login';
import { useState } from 'react';
import Logout from './components/Logout/logout';
import Edit from './components/Edit/Edit';


function App() {
  const [user, setUser] = useState(null);

  
  const registerHandler = async(email, password) => {
    const response = await fetch('http://localhost:3030/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    const result = await response.json();
    console.log(result);
    
 

    setUser({ email, password })
    
   
    

  }
  const loginHandler = (email, password) => {
    
  }

  const logoutHandler = () => {
    console.log("mahame go");
    
    setUser(null);
    console.log(user);
  }

  
  

  return (
    <>
      <Header user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Catalog />} />
        <Route path="/games/:gameId/details" element={<Details user={user}/>} />
        <Route path="/games/create" element={<GameCreate />} />
        <Route path="/games/:gameId/edit" element={<Edit />} />
        <Route
          path="/register"
          element={<Register user={user} registerHandler={registerHandler} />}
        />
        <Route
          path="/login"
          element={<Login user={user} loginHandler={loginHandler} />}
        />
        <Route path='/logout' element={<Logout logoutHandler={logoutHandler} />} />
      </Routes>

      <Footer />
    </>
  ); 
}

export default App
