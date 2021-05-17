import styled from "styled-components"

export const Container = styled.main`
  height:100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
  "content avengers " ;
  color: var(--gray);
  overflow: hidden;
  @media (max-width: 1100px) {
    display:flex;
    flex-direction:column;
  }
    
}
  section{
    width:100%;
    height:100%;
    grid-area: content;
    display:flex;
    flex-direction:column;
    margin:0 auto;
    text-align:center;
    justify-content:center;
    align-items:center;
    h1{
      font: 100px Marvel;
      opacity:100%;
      color:var(--white);
      padding:3vw;
      @media (max-width: 1100px) {
        font: 80px Marvel;
      } 
     span{
       padding: 0 0.5vw;
       background:var(--red);
     }
    }
    h3{
      font: 30px Axiforma;
      color: var(--red);
    }
    p{
      font: 20px Axiforma;
      color: var(--gray);
      flex-direction:column;
      padding:1vw;
    }
    .login{
      display:flex;
      align-items:center;
      justify-content:space-between;
      width: 40%;
      padding: 1vw;
      @media (max-width: 1100px) {
      align-items: center;
      width: 80%;
      margin: 3vw;
      justify-content: space-between;
    }
      .login__save{
      display:flex;
      justify-content:left;
      align-items: center;
      }
      input{
        @media (max-width: 1100px) {
          height:3vh;
          width:3vw;
          margin-right:5px;
        }
      }
      a{
        &:hover{
          border-bottom: 2px solid var(--red);
        }
      }
    }
    .createAccount{
      a{
        color:var(--red);
      }
    }
  
  }
  .image__avengers{
    grid-area:avengers;
    @media (max-width: 1100px) {
      display:none;
    }
  
    img{
      width:100%;
      height:100%;
      object-fit:cover;
      @media (max-width: 1100px) {
        display:none;
      }
   
    }
  }

`;

export const Button = styled.input`
padding:1vw;
box-shadow: 0px 3px 6px #00000029;
border-radius: 100px;
width: 383px;
height: 73px;
  @media (max-width: 1100px) {
    width: 85vw;
    height: 7vh;
  } 

&+input{
  margin-top:20px;
}

`;

export const SignIn = styled.input`
padding:1vw;
box-shadow: 0px 3px 6px #00000029;
border-radius: 100px;
width: 383px;
height: 65px;
background-color:var(--red);
font: 28px Axiforma;
color: var(--white);
padding:1vw;
margin-bottom:20px;
@media (max-width: 1100px) {
    width: 85vw;
    height: 7vh;
  } 
`;