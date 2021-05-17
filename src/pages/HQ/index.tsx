import React, {useState} from "react"
import Modal from "react-modal"
import {Link} from 'react-router-dom'
import { Card } from "../../components/Card"
import { Header } from "../../components/Header"
import { ModalCardDescription } from "../../components/ModalCardDescription"

import {Wrapper} from "./style"
import spiderImg from "../../assets/spider-man.png"
import wandaImg from "../../assets/wanda.png"
import thanosImg from "../../assets/thanos.png"


Modal.setAppElement("#root")

export function HQ (){

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
        <Card character="Homem-Aranha" description="Após ser mordido por uma aranha radioativa, Peter Parker se torna o amigo da vizinhança, o Homem-Aranha." image={spiderImg} onOpenCardModal={handleOpenCardDescriptionModal}/>
        <Card character="Wanda Maximoff" description="Wanda Maximoff foi sequestrada da Sérvia e trazida para a Montanha Wundagore, base do Alto Evolucionário. Durante anos, ela e seu irmão gêmeo, Pietro, acreditavam que eram filhos de um casal de ciganos." image={wandaImg} onOpenCardModal={handleOpenCardDescriptionModal}/>
        <Card character="Thanos" description="A lua Titã era governada por Mentor (A'Lars), quando então reinava paz e tecnologia. Mentor tinha dois filhos: Eros e Thanos. Ao contrário do irmão, Thanos, era bem mais poderoso e almejava ainda mais." image={thanosImg} onOpenCardModal={handleOpenCardDescriptionModal}/>

    </Wrapper>
    <ModalCardDescription
      isOpen={isCardDescriptionModalOpen}
      onRequestClose={handleCloseCardDescriptionModal}
    />
  </>
  )
}
