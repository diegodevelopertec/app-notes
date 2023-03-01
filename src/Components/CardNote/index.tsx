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
import { useEffect, useState } from "react"
import { useContextApp } from "../../Context"
import { toast } from "react-toastify"
import { Form } from "../structure/Form"


type Props={
   data:NoteType
}

interface FormValues {
    id: string;
    title: string;
    content: string;
  }

  const InitiaValues={
    id:'',
    title: '',
    content: ''
  }
  
export const CardNote=({data}:Props)=>{
        const [disabled,setDisabled]=useState(true)
        const {deleteNote,updateNote}=useContextApp()
        const {setStateModal}=useContextApp()
        const [titleNote,setTitleNote]=useState(data.title)
        const [contentNote,setContentNote]=useState(data.content)
      
       

        const UpdateNoteAction=()=>{
              if(titleNote !== data.title || contentNote !== data.content){
                setStateModal(false)
                setDisabled(true)
              
              }
          
        }



    return <Card fontFamilly="Roboto"  d="flex" mHover="12px" w="450px" flexDirection="column" mqm="12px 0" mqp="15px 12px"  m="15px 0" p="15px 12px" bg={'#101e33'} bdRadius='5px' > 
        
      
      <Input bdRadius="3px" name='title' onChange={(e)=>setContentNote(e.target.value)}  fontSize="15px" defaultValue={titleNote} fontFamilly="Roboto" bd="none" color={disabled ? '#d6e1e5' : 'auto'} bg={disabled ? '#7297a3' : 'auto'} disabled={disabled} p="15px" m="12px 0"  type='text' />
        <TextArea bdRadius="3px" onChange={(e)=>setContentNote(e.target.value)} defaultValue={titleNote} value={contentNote} name="content" fontSize="15px"  fontFamilly="Roboto" bd="none" color={disabled ? '#d5e4e9' : 'auto'}  bg={disabled ? '#7297a3' : 'auto'} disabled={disabled} p="5px" m="12px 0" resize="none" h="250px" >
            {contentNote}
        </TextArea>
        <Container d="flex" flexJustify="center" p="15px 0">
           {
             disabled ?
             <Buttom  color="#d6c6d5" w="120px" m="5px" p="13px" bdRadius="3px" bd="none" bg="#46872d" bgHover=" #2e7213" cursor="pointer" onClick={()=> disabled ?  setDisabled(false) :  setDisabled(true)}>Editar</Buttom>
             :
            <Buttom  color="#d6c6d5" w="120px" m="5px" p="13px" bdRadius="3px" bd="none" bg="#46872d" bgHover=" #2e7213" cursor="pointer" onClick={()=>UpdateNoteAction()}>Salvar</Buttom>
           }
            <Buttom  color="#d7c7d6" w="120px" m="5px" p='13px' bdRadius="3px" bd="none" bg="#46872d" bgHover="#286710 " cursor="pointer" onChange={()=>deleteNote(data)}>Excluir</Buttom>
        </Container>
     
    </Card>


}
