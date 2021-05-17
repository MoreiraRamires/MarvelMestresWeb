import React,{useState}from "react"
import Modal from "react-modal"
import { CardDescription } from "../CardDescription"

import { Container } from "./style"
import spiderImg from "../../assets/spider-man.png"
import wandaImg from "../../assets/wanda.png"

interface ModalCardDescriptionProps {
  isOpen:boolean;
  onRequestClose: ()=>void;
}

export function ModalCardDescription ({isOpen,onRequestClose}:ModalCardDescriptionProps){
  const [isCardDescriptionModalOpen, setIsCardDescriptionModalOpen] = useState(false);

  function handleOpenCardDescriptionModal(){
    setIsCardDescriptionModalOpen(true)
  }

  function handleCloseCardDescriptionModal(){
    setIsCardDescriptionModalOpen(false)
  }

  return(

    <>
    
       <Modal  
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        >
        <Container>
          <CardDescription character="Rafael" description="frontend" image={spiderImg} onCloseCardModal={handleCloseCardDescriptionModal}/>
        </Container>


      </Modal>
   
  </>
  )
}