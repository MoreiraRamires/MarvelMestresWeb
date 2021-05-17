import styled from "styled-components"

export const Wrapper = styled.section`
 display:flex;
 height:calc(100vh - 15vh);  
 align-items:center;
 justify-content:center;
 margin:0 auto;
 padding:2vw;
 overflow:auto;
 
  @media (max-width: 500px) {
    flex-direction:column;
    height:100%;
    margin-bottom:100px;  
  } 
 
`;


