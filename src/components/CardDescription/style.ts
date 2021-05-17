import styled from "styled-components"
import spiderImg from "../../assets/spider-man.png"

export const Wrapper = styled.div`
  
  max-width: 659px;
  max-height: 439px;
  display:flex;
  margin-right:20px;

  img{
    max-width: 659px;
    max-height: 439px;
    object-fit:cover;
    border-radius:30px 0px 0px 30px;
    background-color:var(--red);
  }

`;

export const Container = styled.main`
    width:500px;
    background: transparent linear-gradient(90deg, #FF0000 0%, #400E0E 100%) 0% 0% no-repeat padding-box;
    padding:3vw;
    border-radius:0px 30px 30px 0px;    color: var(--white);
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
      font: 12px Axiforma;
      color: var(--white);
      background:transparent;
      border: 1px solid white;
      border-radius:50%;
    }
    
  `;