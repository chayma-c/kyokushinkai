import styled from "@emotion/styled";
<style>
@import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');
</style>
export const main_container=styled.div`
min-height:150vh;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
position:relative;
`
//* start bio section                        */
export const bio=styled.div`
height:50%;
width:80%;
box-shadow : 0 0px 14px rgba(0,0,0,25),0 10px 10px rgba(0,0,0,0.22);
border-radius:20px;
position:relative;
`
export const image=styled.img`
position:absolute;
height:60%;
width:40%;
top:10%;
left:10%;
border-radius:40%;
`
export const background=styled.img`
height:100%;
width:100%;
opacity:0.2;
`
export const bio_text=styled.div`
font-family: 'Shadows Into Light', cursive;
font-size:2.5rem;
position:absolute;
height:60%;
width:40%;
top:10%;
right:5%;
`
//* ******************************  end  bio section                        */
//* ******************************  start   kyokoshinkai section                        */
export const kyokoshinkai=styled.div`
margin-top : 30% ; 
position : relative ; 

min-width  : 80% ; 
min-height : 30%;
`

export const kyo_text=styled.div`

position:absolute;
left:30%;
font-family: 'Smooch', cursive;
margin-top : 20px ; 
`
export const title=styled.div`
color:white;

font-family: 'Smooch', cursive;
text-align : center ;
font-size : 3rem ;  
`
export const kyo_img=styled.img`
height:200px;
width:100px;
margin-top : 50px ; 
`
//* ******************************  end   kyokoshinkai section                        */
//* ******************************  start    belt section                        */
export const belt_section=styled.div`
margin-top: 20% ;
margin-bottom : 10% ; 
height:50%;
width:80%;
boder : 5px solid black ; 

`
export const belt=styled.div`
display:flex;

flex-direction : column ; 
margin-top:40px;
margin-left:-40px;
margin-left : 4% ; 

`

export const img_belt=styled.img`
hight:100px;
width:150px;
border-radius:50%;
`
export const name_belt=styled.div`
margin-left : 10px ; 
margin-bottom : 50px ; 
color : white ; 
font-size : 3rem ;
text-decoration: none;

`