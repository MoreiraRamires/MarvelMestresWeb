import React from "react"
import { Header } from "../../components/Header"
import {Wrapper} from "./style"
import manoplaImg from "../../assets/manopla.png"



export function PageError (){
  return(
    <>
    <Header/>
      <Wrapper>
      <h1>
      Desculpe, mas acreditamos que Thanos destruiu essa página. <br/>
      Estamos atrás da Jóia do Tempo para reverter esse estrago.<br/>
      Por favor, tente novamente mais tarde.
      </h1>
      <img src={manoplaImg} alt="Manopla do Infinito"/>
    </Wrapper>
  </>
  )
}
