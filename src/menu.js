import React,{useState,useContext} from 'react'
import * as s from "./menu.style"
import  Data from "./menu.data"
import { Link } from 'react-router-dom'
import {Socketcontext} from "./setting/context"
const Menu = () => {
 const localdata = Data()
  const {  language , setlanguage,screenwidthLarge,screenwidtMedium, screenwidthSmall} = useContext(Socketcontext)
  console.log("test",screenwidthSmall)
  const [name,setname]=useState(localdata.menulist[0].title)
  const list=localdata.menulist.map((element)=>{
    const isselect= element.title===name
    return(
      <s.listmenu>
        <Link to ={element.adress} style={{textDecoration:"none",color:"black"}}>
        <s.item onClick={()=>changename(element.title)} isselected={isselect}>
          {element.title}
        </s.item>
        </Link>
      </s.listmenu>
    )
  })
  console.log(language)
  const changename=(name1)=>{
    setname(name1)
  }
  const changeLanguage = () =>{
const languagelocal = document.getElementById("language").value
setlanguage(languagelocal)


  }
  return (
   
<s.page isLarge = {screenwidthLarge}>
<s.title>
        {localdata.title}
       
      </s.title>
      <div>

    
      {screenwidthLarge ? <s.listmenu> {list}</s.listmenu> : <div></div>}
      </div>
      { screenwidthLarge ? <s.selectlanguage onChange={()=> changeLanguage()} id = "language" >
          <option>
          anglais
          </option>
          <option>
            francais
          </option>
          <option>
            arabe
          </option>
        </s.selectlanguage> : <div> </div> }
      
     
      
      </s.page>
  )
}
export default Menu
