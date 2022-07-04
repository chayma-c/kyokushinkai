import React,{useEffect,useState} from "react";

import * as s from "./mainpage.style"
import Menu from "./menu";
import {Routes,
    Route,
  } from "react-router-dom";
import Home from "./component/home/home";
import Contact from "./component/contact";
import Joinus from "./component/joinus/joinus";
const Mainpage=()=>{
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
        <Route path="/contact" element={ <Contact/> } />
      </Routes>
      </s.body>
        </s.main_container>
    )
}
export default Mainpage