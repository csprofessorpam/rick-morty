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

  return (
    <div className=  {darkMode ? "header-container header-dark":"header-container"}>
      <div>
        {/* <a href='/about'>About</a>
        <a href="/">Home</a> */}
        <Link to='/about'>About</Link>
        <Link to="/">Home</Link>
      </div>
      <div style={{display:"Flex"}}>
        <p style={{marginRight:"10px"}}>Welcome {userName}! </p>
        <button onClick={()=>setDarkMode(!darkMode)}>{darkMode?"Light Mode":"Dark Mode"}</button>
      </div>
    </div>
  )
}

export default Header