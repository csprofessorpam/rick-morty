import React, {useContext} from 'react'
import CharacterCard from '../../components/CharacterCard/CharacterCard'
import Search from '../../components/Search/Search'
import "./Homepage.css"
import {ThemeContext} from '../../contexts/ThemeContext'
import axios from 'axios'

function Homepage() {

    const {darkMode} = useContext(ThemeContext);

    const[characters, setCharacters] = React.useState([]);

  //connect to api here and then send data where needed

  React.useEffect(

    ()=>{
        //console.log("page loaded");
        axios.get("https://rickandmortyapi.com/api/character")
        .then(res=>{
          console.log(res.data.results);
          setCharacters(res.data.results);
        })
        .catch(err=>console.log(err))
    }, []
  )

  return (
    <div className={darkMode?"home-container home-dark":"home-container"}>
        <Search setCharacters={setCharacters} />
        <h1>Main Characters</h1>
        <div className={darkMode?"characters-container character-dark":"characters-container"}>
            {
                characters.map(item => (
                    <CharacterCard key={item.id} character={item}/>
                    // <p key={item.id}>{item.name}</p>
                ))
            }
        </div>
    </div>
  )
}

export default Homepage