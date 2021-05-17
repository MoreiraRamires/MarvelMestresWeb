import React from "react"
import {Link} from 'react-router-dom'
import avengersImg from "../../assets/avengers.png"
import { Container,Button,SignIn} from "./style"


export function Login (){
  return(
    <Container>
        <section>
          <h1><span>MAR</span>VEL</h1>
          <h3>Bem vindo(a) de volta!</h3>
          <p>Acesse sua conta:</p>
          <Button type="email" name="" id="" placeholder="Usuário"/>
          <Button type="password" name="" id="" placeholder="Senha"/>
          <div className="login">
            <div className="login__save">
                <input type="checkbox" name="" id=""/>
                <label>Salvar Login</label>
            </div>
            <a>Esqueci a senha</a>
          </div>

          <Link to="/personagem" className=''>
            <SignIn type="submit" value="Entrar"/>
          </Link>
        
        
          <div className= "createAccount">
            <span>Ainda não tem conta?</span>
            <a href="http://localhost:3000/personagem">Cadastre-se</a>
          </div>
        </section>
        <div className="image__avengers">
         <img src={avengersImg} alt="Vingadores"/>
        </div>
    </Container>
  )
}