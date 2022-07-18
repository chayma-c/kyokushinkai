import React  , {useState} from 'react'
import * as s from './Log.style' 
import Data from "./Log.data"
const Login = () => {
  const localdata = Data()
  const [login, setlogin] = useState(true)

  return (
  <s.Maincontainer> 

    <s.cadre>
      <s.topsection>

     
      <s.Title>
      {localdata.Logintitle}
      </s.Title>
     
      <s.buttonsection>
      <s.seprateligne />
      <s.leftpart isSelected= {login} onClick = {()=> setlogin(!login)} >
          Log in
      </s.leftpart>
      <s.rightpart isSelected= {login} onClick = {()=> setlogin(!login)}>
        Sign in
      </s.rightpart>
      </s.buttonsection>
      </s.topsection>
      <s.bodysection>
        
      </s.bodysection>
    </s.cadre>
    
  </s.Maincontainer>
  )
}

export default Login