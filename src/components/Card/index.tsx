import { useState } from "react";
import Modal from 'react-modal';
import spiderImg from "../../assets/spider-man.png"
import {Wrapper,Container} from "./style"


interface CardProps{
  character: string;
  description:string;
  image:any;
  onOpenCardModal:()=>void;
}
export function Card ({image,character,description,onOpenCardModal} : CardProps){

  return(
    <Wrapper>
      <img src={image} alt="Marvel"/>
      <Container>
        <strong>{character}</strong>
        <p>{description}</p>
        <button type="button" onClick={onOpenCardModal}>Ver detalhes</button>
    
      </Container>
    </Wrapper>
  )
}