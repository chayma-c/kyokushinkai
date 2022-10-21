import styled from "@emotion/styled";
<style>
@import url('https://fonts.googleapis.com/css2?family=Caveat&family=Parisienne&family=Playball&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Smooch&display=swap');
</style>
export const page=styled.div`
z-index:1000;
backdrop-filter: blur(100px);
height:15%;
position:fixed;
top:0;
left:0;
width:100%;
transition:height 2s;
display: ${p=> p.isLarge ?  "flex" : "block"};
justify-content:space-evenly;
align-items:center;
padding-top:1%;
padding-bottom:1%;
font-size:2rem;
font-family: 'Playball', cursive;
transition: 1s;
&:hover{
    height:20%;
}`
export const item=styled.div`
opacity:${p=>p.isselected ?"1":"0.4"};
cursor:pointer;
transition:opacity 1s;
&:hover{
    opacity:${p=>p.isselected ?"1":"0.6"};
font-size:2.2rem;

}`
export const title=styled.div`
font-family: 'Smooch', cursive;
font-size:2.5rem;
text-align:center ; 
transition  : 2s ; 
`
export const selectlanguage  = styled.select`
font-size : 1.5rem ;
background : none ; 
border : none ;  

`
export const listmenu = styled.div`
min-width : 55% ; 
display:flex;
justify-content:space-evenly;
align-items:center;

`