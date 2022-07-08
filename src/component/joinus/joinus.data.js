import {Socketcontext} from "../../setting/context"
import {useContext} from "react"

const anglais = {title : "welcome to our community"}
const arabe = {title : "مرحبا بك في مجموعتنا"}
const français = {title : "bienvienu a notre groupes"}
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