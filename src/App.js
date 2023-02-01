
import './App.css';
import Header from './components/Header/Header';
import About from './pages/About/About';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ContactUs from './pages/ContactUS/ContactUs';
import Homepage from './pages/Homepage/Homepage';

import axios from 'axios'
import React from 'react'
import CharacterDetails from './pages/CharacterDetails/CharacterDetails';
import UserContextProvider from './contexts/UserContext'
import ThemeContextProvider from './contexts/ThemeContext'

function App() {

  // const[characters, setCharacters] = React.useState([]);

  // //connect to api here and then send data where needed

  // React.useEffect(

  //   ()=>{
  //       //console.log("page loaded");
  //       axios.get("https://rickandmortyapi.com/api/character")
  //       .then(res=>{
  //         console.log(res.data.results);
  //         setCharacters(res.data.results);
  //       })
  //       .catch(err=>console.log(err))
  //   }, []
  // )


  return (
    
      <BrowserRouter>
      <UserContextProvider>
      <ThemeContextProvider>
        
        <Header />

          <Routes>
          <Route path="/"  element={<Homepage />}    />
          {/* <Route path="/"  element={<Homepage 
                                   characters={characters}setCharacters={setCharacters} />}    /> */}
            <Route path="/about"  element={<About />}    />
            <Route path="/contact"  element={<ContactUs />}    />
            <Route path="/details/:id"  element={<CharacterDetails />}    />
          </Routes>
          </ThemeContextProvider>
          </UserContextProvider>
      </BrowserRouter>
    
  );
}

export default App;
