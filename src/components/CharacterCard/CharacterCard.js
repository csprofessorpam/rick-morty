import React from 'react'
import './CharacterCard.css'

function CharacterCard(props) {
  return (
    <div className="char-card">
        <img src={props.character.image} alt={props.character.name} />
        <p>{props.character.name}</p>
        <a href={`/details/${props.character.id}`}><button>See Details</button></a>
    </div>
  )
}

export default CharacterCard