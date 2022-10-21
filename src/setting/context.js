import React ,{createContext,useState} from "react";
const Socketcontext = createContext() ; 
const Mycontext = ({children}) => {
const [language,setlanguage] = useState("anglais")
const [screenwidthLarge,setscreenwidthLarge] = useState(true)
const [screenwidtMedium,setscreenwidthMedium] = useState(false)
const [screenwidthSmall,setscreenwidthSmall] = useState(false)

return(
    <Socketcontext.Provider value={{
        language , setlanguage , screenwidthLarge,setscreenwidthLarge ,
        screenwidtMedium,setscreenwidthMedium , 
        screenwidthSmall,setscreenwidthSmall

    }}>
{children}
    </Socketcontext.Provider>
  
)

}
export {Mycontext , Socketcontext}