import {useState, createContext} from 'react'  //to create global state

//1.create context as blank
export const UserContext = createContext();  //creates global state and export
//has no value


//2.assign a value
export default function UserContextProvider(props){
    //create state
    const [userName, setUserName] = useState("Pam");

    return(
        <UserContext.Provider value={{userName, setUserName}}>
            {props.children}
        </UserContext.Provider>
    )
}


//3.provide the value to the children
