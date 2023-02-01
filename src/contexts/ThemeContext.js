import {useState, useEffect, createContext} from 'react'  //to create global state

//1.create context as blank
export const ThemeContext = createContext();  //creates global state and export
//has no value


//2.assign a value
export default function ThemeContextProvider(props){
    //create state
    const [darkMode, setDarkMode] = useState(true);

    //get value from localstorage when page loads
    useEffect(
        ()=>{
            const theme = localStorage.getItem("darkMode")
            //make sure not null the first time
            if (theme != null){
                //all values in local storage are stored as string, must convert to boolean
                //use JSON.parse if not a string
                setDarkMode(JSON.parse(theme))

            }

        }, []
    )

    return(
        <ThemeContext.Provider value={ {darkMode, setDarkMode} }>
            {props.children}
        </ThemeContext.Provider>
    )
}


//3.provide the value to the children