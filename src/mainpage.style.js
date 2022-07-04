import styled from "@emotion/styled"
import {  keyframes } from '@emotion/react'
const bounce = keyframes`
   0% {
    color:black;
    left:-10%;
  }

   100%{
    left:40%;
    color:white;
    
  }
`
const transition= keyframes`
0% {
  color:black;
  left:-40%;
}
   30% {
    color:black;
    left:-30%;
  }

   100%{
    left:20%;
    color:white;
    
  }
`
const transition1= keyframes`
0% {
  color:black;
  right:-40%;
}
   30% {
    color:black;
    right:-30%;
  }

   100%{
    right:20%;
    color:white;
    
  }
`
const background = keyframes`
   0% {
    background:black;
  }

   100%{
    background:white;
  }
`

export const main_container=styled.div`
min-height:300vh;
background-color: #ff6b6b;
background-image: linear-gradient(315deg, #ff6b6b 0%, #d3d3d3 74%);
`
export const body=styled.div`
min-height:200vh;
padding-top:30vh;
`
export const animation=styled.img`
height:450px;
width:250px;
position:absolute;
top:20%;
left:40%;
animation: ${bounce} 4s;
box-shadow : 0 0px 40px rgba(255,255,255,25),0 10px 10px rgba(0,0,0,0.22);
`
export const animation_section=styled.div`
height:100vh;
width:100%;
animation: ${background} 4.5s;
`
export const imgloadleft     = styled.img`
width : 20%; 
height :50% ; 
animation: ${transition} 4s;
position:absolute;
top:20%;
left:20%;
`
export const   imgloadright  = styled.img`

width : 20%; 
height :50% ; 
animation: ${transition1} 4s;
position:absolute;
top:20%;
right:20%;
`