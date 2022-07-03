import React,{useState} from 'react'
import * as s from "./menu.style"
import * as d from "./menu.data"
import { Link } from 'react-router-dom'
const Menu = () => {
  const [name,setname]=useState(d.menulist[0].title)
  const list=d.menulist.map((element)=>{
    const isselect= element.title===name
    return(
      <div>
        <Link to ={element.adress} style={{textDecoration:"none",color:"black"}}>
        <s.item onClick={()=>changename(element.title)} isselected={isselect}>
          {element.title}
        </s.item>
        </Link>
      </div>
    )
  })
  const changename=(name1)=>{
    setname(name1)
  }
  return (
    <s.page>
      <s.title>
        {d.title}
      </s.title>
      {list}
      </s.page>
  )
}
export default Menu
