import React from "react"
import {Link} from 'react-router-dom'
import profileImg from "../../assets/profile-picture.png"
import { Container , Content} from "./style"

export function Header (){
  return(
    <Container>
      <Content>
        <div >
          MA
        </div>

        <nav>
          <Link to="personagem" className="menu__character" >Personagens</Link>
          <Link to="filmes"className="menu__movies">Filmes</Link>
          <Link to="hq"className="menu__hq">HQ</Link>
          <a className="menu__profile"><img src={profileImg} alt="Sua foto de perfil"/></a>
         
          <Link to="/"className="menu__exit">Sair</Link>
          
        </nav>
      </Content>
    </Container>
  )
}