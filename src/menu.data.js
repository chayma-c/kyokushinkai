import React,{useState,useContext} from 'react'
import {Socketcontext} from "./setting/context"
const anglais = {title : "Kyokoshinkai", menulist :[{title:"Home",adress:"/"},{title:"Wanna join us?",adress:"/joinus"},{title:"Login",adress:"/login"}]}
const arabe = {title : "كيوكشنكاي", menulist :[{title:"المنزل",adress:"/"},{title:"تريد الانضمام",adress:"/joinus"},{title:"تسجيل",adress:"/login"}]}

const Data = () =>{
const {language} = useContext(Socketcontext)
if(language === "englais"){
    return anglais
}
else if (language === "arabe") {
    return arabe
    
}
else {
    return "no data"
}
}
export default Data ;
