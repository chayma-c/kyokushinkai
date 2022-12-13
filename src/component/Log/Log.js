import React  , {useState} from 'react'
import * as s from './Log.style' 
import Data from "./Log.data"
const Login = () => {
  const localdata = Data()
  const [login, setlogin] = useState(true); 
  return (
  <s.Maincontainer> 

    <s.cadre>
      <s.topsection>

     
     
     
      <s.buttonsection>
      <s.seprateligne />
      <s.leftpart isSelected= {login} onClick = {()=> setlogin(!login)} >
      {localdata.log}
      </s.leftpart>
      <s.rightpart isSelected= {login} onClick = {()=> setlogin(!login)}>
      {localdata.sub}
      </s.rightpart>
      </s.buttonsection>
      
     
      </s.topsection>
      <s.bodysection>
      {
        login ?   <s.Title>  {localdata.Logintitle}</s.Title>  : <s.Title> {localdata.subtitle} </s.Title> 
      }
      </s.bodysection>
    </s.cadre>
    
  </s.Maincontainer>
  )
}

export default Login