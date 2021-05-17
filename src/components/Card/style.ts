import styled from "styled-components"
import spiderImg from "../../assets/spider-man.png"

export const Wrapper = styled.div`
  
  width: 289px;
  height: 439px;
  border-radius:30px;
  display:flex;
  flex-direction:column-reverse;
  position: relative;
  margin-right:20px;
  @media (max-width: 1100px) {
    flex-wrap:wrap;
  }
  @media (max-width: 500px) {
   margin-top:20px
  } 
  img{
    height:100%;
    width:100%;
    object-fit:cover;
    border-radius:30px;
  }

`;

export const Container = styled.main`
    position: absolute;
    width:100%;
    height:20vh;
    background: transparent linear-gradient(180deg, var(--red) 0%, #8000004D 100%) 0% 0% no-repeat padding-box;
    padding:1vw;
    border-radius: 30px;
    color: var(--white);
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    strong{
      font: 20px Axiforma;
      padding:1vw;
    }
    p{
      font: 12px Axiforma;
      padding:1vw;
    }
    button{
      font: 20px bold Axiforma;
      color: var(--white);
      background:transparent;
      border: none;
    }
    
  `;