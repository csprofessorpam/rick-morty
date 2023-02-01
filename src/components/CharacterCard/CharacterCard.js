import React from 'react'
import './CharacterCard.css'
import {Link} from 'react-router-dom'

function CharacterCard(props) {
  return (
    <div className="character-card">
        <img src={props.character.image} alt={props.character.name} />
        <p>{props.character.name}</p>
        <Link to={`/details/${props.character.id}`}><button>See Details</button></Link>
    </div>
  )
}

export default CharacterCard