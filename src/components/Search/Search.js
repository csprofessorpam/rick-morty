import React from 'react'
import "./Search.css"
import axios from 'axios'

function Search(props) {

    const [searchValue, setSearchValue] = React.useState("");
    //search need access to characters in order to do the filtering

    //api has request for filtering

    const handleChange = (e)=>{
        console.log(e.target.value);
       setSearchValue(e.target.value);
    }

    //function to call api
    const handleSubmit = (event) =>{
        //alert('search');
        event.preventDefault();  //stop page refresh
        console.log("submit", searchValue);
        //call api to get data
        axios.get(`https://rickandmortyapi.com/api/character/?name=${searchValue}`)
        .then(res =>{
            console.log(res.data.results);
            props.setCharacters(res.data.results);

            //clear textbox
            setSearchValue("")

        })
        .catch(err => {
            //console.log(err)
            // if (err.response.status === 404){
            //     alert("no character with this name")
            // }
            // else{
               if (err.response.status === 404) {
                alert("no matching character")
               }
               else{
                console.log(err)
               }
            //}
        })

        //setCharacters to new data
    }

  return (
    <form className="search-container" onSubmit={handleSubmit}>
        <input 
        // onChange={(e)=>setSearchValue(e.target.value)} 
        onChange={handleChange}
        placeholder="Search all characters"
        value={searchValue} />
        {/* <button type="submit">Submit</button> */}
    </form>
  )
}

export default Search