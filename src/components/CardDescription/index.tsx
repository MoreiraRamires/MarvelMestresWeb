import { useState } from "react";
import Modal from 'react-modal';
import spiderImg from "../../assets/spider-man.png"
import {Wrapper,Container} from "./style"


interface CardDescriptionProps{
  character: string;
  description:string;
  image:any;
  onCloseCardModal:()=>void;
}
export function CardDescription ({image,character,description,onCloseCardModal} : CardDescriptionProps){

  return(
    <Wrapper>
      <img src={image} alt="Personagem Marvel"/>
      <Container>
        <strong>{character}</strong>
        <p>{description}</p>
        <strong>Avaliação dos Fãs</strong>
      </Container>
    </Wrapper>
  )
}