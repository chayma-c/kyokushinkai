import React ,{createContext,useState} from "react";
const Socketcontext = createContext() ; 
const Mycontext = ({children}) => {
const [language,setlanguage] = useState("englais")




return(
    <Socketcontext.Provider value={{
        language , setlanguage
    }}>
{children}
    </Socketcontext.Provider>
  
)

}
export {Mycontext , Socketcontext}