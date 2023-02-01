import React, {useContext} from 'react'
import "./Header.css"
import {Link} from 'react-router-dom'

//using global state
import {UserContext} from '../../contexts/UserContext'
import {ThemeContext} from '../../contexts/ThemeContext'

function Header() {

  //extract values of global state
  const {userName, setUserName} = useContext(UserContext);

  const {darkMode, setDarkMode} = useContext(ThemeContext);
  //state is OBJEC, that is why 2 curly braces later

  const handleTheme = () =>{
    //toggle
    setDarkMode(!darkMode)
    //send to local storage
    localStorage.setItem("darkMode", !darkMode)
  }

  return (
    <div className=  {darkMode ? "header-container header-dark":"header-container"}>
      <div className="header-links">
        {/* <a href='/about'>About</a>
        <a href="/">Home</a> */}
        {/* <Link to="/" >Home</Link> */}
        <a href="/" >Home</a>
        <a href='/about' >About</a>
        
      </div>
      {/* <div style={{display:"Flex"}}>
        <p style={{marginRight:"10px"}}>Welcome {userName}! </p>
        <button onClick={handleTheme}>{darkMode?"Light Mode":"Dark Mode"}</button>
      </div> */}
    </div>
  )
}

export default Header