import React, {useContext} from 'react'
import "./Header.css"
//import {Link} from 'react-router-dom'

//using global state
import {UserContext} from '../../contexts/UserContext'
import {ThemeContext} from '../../contexts/ThemeContext'

function Header() {

  //extract values from global state
  const {userName} = useContext(UserContext);

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
        <a href='/about'>About</a>
        <a href="/">Home</a> 
        {/* <Link to="/" >Home</Link>
        <Link to="/about" >About</Link> */}
            
      </div>
      <div className="message">
        <p >Welcome {userName}! </p>
        <button onClick={handleTheme}>{darkMode?"Light Mode":"Dark Mode"}</button>
      </div>
    </div>
  )
}

export default Header