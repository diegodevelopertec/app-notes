import { ThemeProvider } from "styled-components"
import { Card } from "../customs/Card"
import { Container } from "../structure/Container/Index"
import { Title } from "../structure/Title"
import { Text } from "../structure/Text"
import { Span } from "../structure/Span"
import { Buttom } from "../structure/Button"
import { NoteType } from "../../Context"
import { Input } from "../structure/Input"
import { TextArea } from "../structure/TextArea"
import { useState } from "react"
import { useContextApp } from "../../Context"


type Props={
   data:NoteType
}


export const CardNote=({data}:Props)=>{
        const [disabled,setDisabled]=useState(true)
        const {deleteNote,updateNote}=useContextApp()
        const {setStateModal}=useContextApp()

        const updateNoteAction=()=>{
         disabled ?  setDisabled(false) :  setDisabled(true)
        }




    return <Card fontSize="Arial"  d="flex" mHover="12px" w="450px" flexDirection="column" mqm="12px 0" mqp="15px 12px"  m="15px 0" p="15px 12px" bg={'#101e33'} bdRadius='5px' > 
        
        <Input bdRadius="3px" bd="none" color={disabled ? '#d6e1e5' : 'auto'} bg={disabled ? '#7297a3' : 'auto'} disabled={disabled} p="15px" m="12px 0" value={data.title} type='text' defaultValue={data.title} />
        <TextArea bdRadius="3px" bd="none" color={disabled ? '#d5e4e9' : 'auto'}  bg={disabled ? '#7297a3' : 'auto'} disabled={disabled} p="5px" m="12px 0" resize="none" h="250px" defaultValue={data.content}>
            {data.content}
        </TextArea>
        <Container d="flex" flexJustify="center" p="15px 0">
            <Buttom color="#d6c6d5" w="120px" m="5px" p="13px" bdRadius="3px" bd="none" bg="#46872d" bgHover=" #2e7213" cursor="pointer" onClick={()=>updateNoteAction()}>Editar</Buttom>
            <Buttom color="#d7c7d6" w="120px" m="5px" p='13px' bdRadius="3px" bd="none" bg="#46872d" bgHover="#286710 " cursor="pointer" onChange={()=>deleteNote(data.id)}>Excluir</Buttom>
        </Container>
    </Card>


}
