import React,{useEffect,useState} from "react";

import * as s from "./mainpage.style"
import Menu from "./menu";
import {Routes,
    Route,
  } from "react-router-dom";
import Home from "./component/home/home";
import Login from "./component/Log/Log";
import Joinus from "./component/joinus/joinus";
import { useContext } from 'react';
import { Socketcontext } from "./setting/context";
const Mainpage=()=>{
  const {setscreenwidthSmall ,setscreenwidthMedium, setscreenwidthLarge } = useContext(Socketcontext)
  useEffect(()=>{

    const UpadtescreensizeH = () => {
     
      if(window.innerWidth < 650){
          setscreenwidthSmall(true);
          setscreenwidthLarge(false) 
          setscreenwidthMedium(false)
      }
      else if ((window.innerWidth < 1000) && (window.innerWidth > 650) ){
        setscreenwidthMedium(true)
        setscreenwidthLarge(false) 
        setscreenwidthSmall(false)

      }
      else if (window.innerWidth > 1000) {
        setscreenwidthLarge(true)
        setscreenwidthMedium(false) 
        setscreenwidthSmall(false)

      }
      
  }

      window.addEventListener('resize',UpadtescreensizeH);
    
      return () => window.removeEventListener('resize', UpadtescreensizeH());
  } 
  
  
  
  )
  const [loding,is_loding]=useState(true)
  useEffect(()=>{
setTimeout(() => {
  is_loding(false)
}, 4000);
  },[])

    return(
      loding ?
      <s.animation_section>
        <s.imgloadleft  src = "./leftimg.png" />

        <s.imgloadright src="./right1.png"/>
      <s.animation src="https://upload.wikimedia.org/wikipedia/commons/4/46/Kyokushinkai.svg"/>
      </s.animation_section>
      :
        <s.main_container>
            <Menu/>
            <s.body>
            <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/joinus" element={ <Joinus/> } />
        <Route path="/login" element={ <Login/> } />
      </Routes>
      </s.body>
        </s.main_container>
    )
}
export default Mainpage