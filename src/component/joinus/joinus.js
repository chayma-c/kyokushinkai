import React from 'react'
import * as s from "./joinus.style"
import Data from "./joinus.data"
const Joinus = () => {
  const localvariable = Data()
  return (
    <s.Maincontainer>
      
   <s.Title>
     {localvariable.title}
      </s.Title>


    </s.Maincontainer>
  )
}

export default Joinus