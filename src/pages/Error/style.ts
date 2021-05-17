import styled from "styled-components"

export const Wrapper = styled.section`
 display:flex; 
 color:white; 

 h1{
    font-size: 30px;
    text-align: center;
    width: 100vw;
    padding:1vw;

    @media (max-width: 400px) {
      font-size: 20px;
      padding:5vw;
  } 
 }
 img{
    width: 20vw;
    height: auto;
    position: absolute;
    bottom: 0;
    left: 50%;
    @media (max-width: 1100px) {
    bottom: 80px;
    left: 27%;
    width: 45vw;
  } 
  @media (max-width: 400px) {
    bottom: 80px;
    left: 27%;
    width: 45vw;
  } 
 }
`;


