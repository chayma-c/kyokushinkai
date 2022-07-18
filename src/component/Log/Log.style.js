import styled from "@emotion/styled";
export const Maincontainer  = styled.div`

`
export const cadre  = styled.div`
width : 80% ; 
margin-left : 10% ; 
margin-right : 10% ; 
min-height : 70vh ; 
postion : relative ; 
padding-bottom : 40px ; 
text-align : center ; 
`
export const topsection  = styled.div`
width : 100% ; 
height : 20% ; 
display : flex ; 
justify-content : space-around ; 
align-items : center ; 


`
export const Title = styled.div`
text-align : center ; 
font-size : 3.4rem ; 
font-family: 'Italianno', cursive;
letter-spacing: 0.3em;
`
export const buttonsection  = styled.div `

width : 250px  ; 
height : 70px ;  
border-radius  : 20px ; 
box-shadow : 0 0px 14px rgba(0,0,0,25),0 10px 10px rgba(0,0,0,0.22);
position : relative ; 
cursor : pointer ; 
`
export const seprateligne = styled.div`
position : absolute ; 
left : 47% ; 
border-left: 6px solid black;
height: 100% ;
`
export const leftpart = styled.div`
background : ${p => p.isSelected ?  'black' : 'white'} ; 
opacity : ${p => p.isSelected ?  '1' : '0.3'}; 
position : absolute ; 
left : 0; 
height : 100% ; 
width : ${p => p.isSelected ?  '47%' : '50%'};  ;  
border-radius : 20px 0 0 20px  ; 
color : ${p => p.isSelected ?  'white' : 'black'}  ; 
display : flex; 
justify-content : center ; 
align-items : center ; 
transition : background 1s ; 
`
export const rightpart = styled.div`
background : ${p => p.isSelected ?  'white' : 'black'}  ; 
opacity : ${p => p.isSelected ?  '0.3' : '1'}; 
position : absolute ; 
right : 0; 
height : 100% ; 
width : ${p => p.isSelected ?  '50%' : '53%'};  ;  
border-radius : 0 20px 20px 0  ; 
color : ${p => p.isSelected ?  'black' : 'white'}  ; 
display : flex; 
justify-content : center ; 
align-items : center ; 
transition : background 1s ; 
`

export const bodysection = styled.div`


`