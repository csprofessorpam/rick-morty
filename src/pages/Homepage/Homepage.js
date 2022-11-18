import React, {useContext} from 'react'
import CharacterCard from '../../components/CharacterCard/CharacterCard'
import Search from '../../components/Search/Search'
import "./Homepage.css"
import {ThemeContext} from '../../contexts/ThemeContext'

function Homepage(props) {

    const {darkMode, setDarkMode} = useContext(ThemeContext);

  return (
    <div className={darkMode?"home-container home-dark":"home-container"}>
        <Search setCharacters={props.setCharacters} />
        <h1>Main Characters</h1>
        <div className={darkMode?"characters-container character-dark":"characters-container"}>
            {
                props.characters.map(item => (
                    <CharacterCard key={item.id} character={item}/>
                    // <p key={item.id}>{item.name}</p>
                ))
            }
        </div>
    </div>
  )
}

export default Homepage