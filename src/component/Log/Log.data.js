import {Socketcontext} from "../../setting/context"
import {useContext} from "react"

const anglais = {Logintitle : "welcome Login space"}
const arabe = {Logintitle : "مرحبا بك في فضاء التسجيل"}
const français = {Logintitle : "bienvienu a notre espace d inscri "}
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