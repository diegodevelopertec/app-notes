import { Card } from "../customs/Card"
import { Form } from "react-router-dom"
import { Input } from "../structure/Input"
import { Container } from "../structure/Container/Index"
import { TextArea } from "../structure/TextArea"
import { Buttom } from "../structure/Button"
import { ChangeEvent, useState } from "react"
import {toast} from 'react-toastify'
import { useContextApp } from "../../Context"
import { Title } from "../structure/Title"


export const FormNote=()=>{

    const [title,setTitle]=useState()
    const [content,setContent]=useState()
    const {setStateModal}=useContextApp()


    const setData=()=>{
        if(title  && content ){
                alert('aca algo')
        }else{
         
            toast.error('Preencha todos os campos')
        }
    }

  return <Card boxShadow="0 0 15px #2c2c30" fontFamilly="Roboto" mqp="12px" mqw="90%" bdRadius="6px" bg="#151733 " w="650px" flexDirection="column" d="flex" p="18px">  
                <Title m="12px 0">Nova Anotação</Title>
                <Container w="100%">  <Input bdRadius="6px" m="12px 0" w="100%"   value={title} p="12px 5px" onChange={(e:ChangeEvent<HTMLFormElement> )=>setTitle(e.target.value)}  placeholder='Digite o titulo' /></Container>
                <Container w="100%">
                <TextArea  w="100%"  p="12px 5px" bdRadius="6px"  value={content}  m="12px 0" h="200px"  onChange={(e:ChangeEvent<HTMLFormElement> )=>setContent(e.target.value)} placeholder='Digite sua anotação...' > </TextArea>
                </Container>
            <Container w="100%" d="flex"  flexJustify="center">
              <Buttom color="#d6c6d5" w="150px" m="5px" p="13px" bdRadius="3px" bd="none" bg="#87372d" bgHover=" #862b14" cursor="pointer" onClick={()=>setStateModal(false)}>Cancelar</Buttom>
              <Buttom color="#d7c7d6" w="150px" m="5px" p='13px' bdRadius="3px" bd="none" bg="#46872d" bgHover="#286710 " cursor="pointer" onClick={()=>setData()}>Salvar</Buttom>
            </Container>

    </Card>
}