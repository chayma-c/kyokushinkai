import {useContext} from 'react'
import {Socketcontext} from "./setting/context"
const anglais = {title : "Kyokushinkai", menulist :[{title:"Home",adress:"/"},{title:"Wanna join us?",adress:"/joinus"},{title:"Login",adress:"/login"}]}
const arabe = {title : "كيوكوشينكاي", menulist :[{title:"الصفحة الرئيسية",adress:"/"},{title: "هل تريد الانضمام",adress:"/joinus"},{title:"تسجيل",adress:"/login"}]}
const français = {title : "Kyokushinkai", menulist :[{title:"Accueil",adress:"/"},{title:"Voulez-vous rejoindre?",adress:"/joinus"},{title:"s'inscrir",adress:"/login"}]}
const Data = () =>{
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
export default Data ;
