import {Socketcontext} from "../../setting/context"
import {useContext} from "react"

const anglais = {Logintitle : "welcome Login space" , log : "login" , sub: "subscribe"}
const français = {Logintitle : "bienvienu a notre espace d inscri", log : "login" , sub: "subscribe" }
const arabe = {Logintitle : "مرحبا بك في فضاء التسجيل  ", log : "الدحول" , sub: "التسجيل" }
const Data = () => {

    const {language} = useContext(Socketcontext)
    if(language === "anglais"){
        return anglais
    }
    else if (language === "arabe") {
        return arabe
        
    }
    else {
        return français
    }
}

export default Data