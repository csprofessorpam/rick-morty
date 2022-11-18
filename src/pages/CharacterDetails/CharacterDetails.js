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
        }, []
    )

  return (
    <div className="details-container">
        <img src={characterDetails?.image} />
        <div className="char-info">
            <p>{characterDetails?.name}</p>
            <p>{characterDetails?.gender}</p>
            <p>{characterDetails?.species}</p>
            <p>{characterDetails?.status}</p>
        </div>
    </div>
  )
}

export default CharacterDetails