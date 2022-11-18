import {useState, createContext} from 'react'  //to create global state

//1.create context as blank
export const ThemeContext = createContext();  //creates global state and export
//has no value


//2.assign a value
export default function ThemeContextProvider(props){
    //create state
    const [darkMode, setDarkMode] = useState(true);

    return(
        <ThemeContext.Provider value={ {darkMode, setDarkMode} }>
            {props.children}
        </ThemeContext.Provider>
    )
}


//3.provide the value to the children