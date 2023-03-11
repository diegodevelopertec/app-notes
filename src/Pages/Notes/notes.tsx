import React from "react";
import { Container } from "../../Components/structure/Container/Index";
import { Title } from "../../Components/structure/Title";
import { useContextApp } from "../../Context";
import { CardNote } from "../../Components/CardNote";
import { Modal } from "../../Components/Modal";
import { FormNote } from "../../Components/FormNote";
import { Buttom } from "../../Components/structure/Button";
import {Loading} from "./../../Components/Loading/index";

export const NotesPage=()=>{
    const {setStateModal}=useContextApp()
    const {notes}=useContextApp()

    return <Container mnh="100vh" h="100%" w="100%"  mqp="130px 0"  p="130px 20px" >
            <Title fontSize="1.45em" >Suas Anotações</Title>
            <Container  p="10px" d="flex" flexWrap="wrap" mqp="5px"  mqw="100vw" mqDirection="column" flexAlign="center">
                { notes!.length > 0 ? 
                       notes?.map((item,index)=>(
                        <CardNote data={item} key={index} />
               ))
                    :<Container d="flex" flexAlign="center" w="100%" mnh="500px" flexJustify="center">
                        <Title  fontSize="24px">Nenhuma Anotação ainda</Title>
                    </Container>

                }
                  <Buttom   bgHover="#0f4a89" onClick={()=>setStateModal(true)} ps="fixed" h="60px" w="60px" psTop="70vh"  fontSize="45px" cursor="pointer" color="#31b845" bg="#07223d" bd="none" bdRadius="100%" psRight="12px"> + </Buttom>
                  <Modal bg="rgba(220, 210, 215, 0.26)" h="100%" >< FormNote /></Modal>
            </Container>
          
    </Container>
}