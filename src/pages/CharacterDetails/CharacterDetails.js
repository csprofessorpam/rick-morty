import React from 'react'
import {useParams} from 'react-router-dom'
//allows you to grab the param
import axios from 'axios'

import "./CharacterDetails.css"

function CharacterDetails() {

    //grab the id from params
    const params = useParams();
    console.log(params.id);

    //create state for character data
    const [characterDetails, setCharacterDetails] = React.useState();

    //get the data for this id when the page loads
    React.useEffect(
        ()=>{
            //call api to get details for this id
            axios.get(`https://rickandmortyapi.com/api/character/${params.id}`)
            .then(res => {
                console.log(res.data);
                setCharacterDetails(res.data)
            })
            .catch(err => console.log(err))
            //eslint-disable-next-line
        }, []
    )

  return (
    <div className="details-container">
        <img src={characterDetails?.image} alt={characterDetails?.name}/>
        <div className="char-info">
            <h3>{characterDetails?.name}</h3>
            <ul>
            <li>{characterDetails?.gender}</li>
            <li>{characterDetails?.species}</li>
            <li>{characterDetails?.status}</li>

            </ul>
            
        </div>
    </div>
  )
}

export default CharacterDetails