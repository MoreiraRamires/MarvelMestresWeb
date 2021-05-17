import React, {useState} from "react"
import Modal from "react-modal"
import {Link} from 'react-router-dom'
import { Card } from "../../components/Card"
import { Header } from "../../components/Header"
import { ModalCardDescription } from "../../components/ModalCardDescription"

import {Wrapper} from "./style"
import ironManImg from "../../assets/movieIronMan.png"
import ironMan2Img from "../../assets/movieIronMan2.png"
import thorImg from "../../assets/movieThor.png"


Modal.setAppElement("#root")

export function Movie (){

  const [isCardDescriptionModalOpen, setIsCardDescriptionModalOpen] = useState(false);

  function handleOpenCardDescriptionModal(){
    setIsCardDescriptionModalOpen(true)
  }

  function handleCloseCardDescriptionModal(){
    setIsCardDescriptionModalOpen(false)
  }

  return(
    <>
    <Header/>
    <Wrapper>
        <Card character="Homem de Ferro" description="Tony Stark (Robert Downey Jr.) é um industrial bilionário, que também é um brilhante inventor, ao ser sequestrado, ele é obrigado a construir uma arma devastadora, mas ao invés disso, cria uma armadura capaz de mudar a história." image={ironManImg} onOpenCardModal={handleOpenCardDescriptionModal}/>
        <Card character="Homem de Ferro 2" description="O mundo já sabe que o inventor bilionário Tony Stark (Robert Downey Jr.) é o super-herói blindado Homem de Ferro. Sofrendo pressão do governo, da mídia e do público para compartilhar sua tecnologia com as forças armadas" image={ironMan2Img} onOpenCardModal={handleOpenCardDescriptionModal}/>
        <Card character="Thor" description="Quando é banido do reino de Asgard e exilado na Terra, o arrogante guerreiro Thor (Chris Hemsworth) é obrigado a lutar para reaver seus poderes perdidos." image={thorImg} onOpenCardModal={handleOpenCardDescriptionModal}/>

    </Wrapper>
    <ModalCardDescription
      isOpen={isCardDescriptionModalOpen}
      onRequestClose={handleCloseCardDescriptionModal}
    />
  </>
  )
}
