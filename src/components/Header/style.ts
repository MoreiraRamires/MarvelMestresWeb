import styled from "styled-components"

export const Container = styled.main`
background-color: var(--background);
border-bottom: 2px var(--red) solid;
height:15vh;
width:100vw;
  @media (max-width: 1100px) {
    height:10vh;
  }
  @media (max-width: 500px) {
    position: fixed;
    bottom:0;
    border-bottom: none;
    z-index: 2;
    background-color: var(--background);

  }

`;

export const Content = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  max-width:1120px;
  margin:0 auto;
  color:white;
  padding: 3vw;

  font: normal normal bold 30px/36px Axiforma;

  >div{
    padding: 0 1vw 0 0 ;
    background-color: var(--red);
    @media (max-width: 500px) {
      display:none;
    } 
  }
 
  
  nav{
    display:flex;
    align-items:center;
   
    @media (max-width: 500px) {
      justify-content:center;
    } 
    .menu__character,a{
      color:var(--white);
      text-decoration: none;
      opacity:25%;
      transition:.2s;
      &:hover{
        opacity:100%
      }

      img{
        opacity:1;
      }


      &+a{
        margin-left:1vw;
      
      @media (max-width: 500px) {
        margin-left:0;
      } 
      }
    }
    .menu__character,.menu__movies, .menu__hq{
      @media (max-width: 500px) {
        padding: 2.5vw;
      } 
      @media (max-width: 350px) {
        font-size:25px
      } 
    }

    .menu__exit,.menu__profile{
      @media (max-width: 500px) {
        display:none;
      }

    }
  }
`;


