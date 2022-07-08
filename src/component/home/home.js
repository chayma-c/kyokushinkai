import React from 'react'
import * as s from './home.style'
import { Link } from 'react-router-dom'
import Data from "./home.data"
const Home = () => {
  const localdata=Data()
  const listbelt=localdata.belt.map((belt)=>{
    return(
      <s.belt>
        <Link to = {belt.adress}  style ={{textDecoration : "none"}} >
           <s.name_belt> 
          {belt.beltname}
        </s.name_belt>
        <s.img_belt src={belt.img} />
        </Link>
      </s.belt>
    )
  })
  return (
    <s.main_container>
      <s.bio>
        <s.background src="https://the-martial-way.com/wp-content/uploads/2016/04/Fudo-dachi-Karate-1024x500.jpg"/>
        <s.image src="https://scontent.ftun10-1.fna.fbcdn.net/v/t39.30808-6/284377455_5370615056322408_1815830408197072157_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=M7A3GpuMGUMAX-pcW-U&_nc_ht=scontent.ftun10-1.fna&oh=00_AT8PdekEWDdaHttZY9yePWz6mqStkNeX04FAtOE7cABWtA&oe=62C5DA78"> 
        </s.image>
        <s.bio_text>
          {localdata.biopart.coachname}
        </s.bio_text>
      </s.bio>
      <s.kyokoshinkai>
        
        
            <s.title>
              {localdata.title}
            </s.title>
            <s.kyo_text>
      {localdata.text}
          </s.kyo_text>
            <s.kyo_img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Kyokushinkai.svg"/>
        
      </s.kyokoshinkai>
      <s.belt_section>
        <s.title>
          {localdata.beltitle}
        </s.title>
      {listbelt}
      </s.belt_section>
    </s.main_container>
  )
}

export default Home
