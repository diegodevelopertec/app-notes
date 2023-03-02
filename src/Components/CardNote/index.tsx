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
import { Image } from "../structure/Image"
import { Form } from "../structure/Form"
import LapisIcon from '/lapis.png'
import LixeiraIcon from '/lixeira.png'
import SaveIcon from '/save.png'

type Props={
   data:NoteType
}


export const CardNote=({data}:Props)=>{
        const [disabled,setDisabled]=useState(true)
        const {deleteNote,updateNote}=useContextApp()
        const {setStateModal}=useContextApp()
        const [title,setTitleNote]=useState(data.title)
        const [content,setContentNote]=useState(data.content)
      
       useEffect(()=>{
            setTitleNote(data.title)
            setContentNote(data.content)
       },[data])

        const UpdateNoteAction=()=>{
            let {id}=data
            let dataActuality={id,title,content}
           
            if(data.content !== content || data.title !== title){
                updateNote(dataActuality)
                setDisabled(true)
            }
            setDisabled(true)
          
        }



    return <Card fontFamilly="Roboto"  d="flex" mHover="12px" w="450px" flexDirection="column" mqm="12px 0" mqp="15px 12px"  m="15px 0" p="15px 12px" bg={'#01041f'} bdRadius='5px' > 
        
      
      <Input bdRadius="3px" name='title' onChange={(e)=>setTitleNote(e.target.value)}  fontSize="15px" value={title} fontFamilly="Roboto" bd="none" color={disabled ? '#d6e1e5' : 'auto'} bg={disabled ? '#7297a3' : 'auto'} disabled={disabled} p="15px" m="12px 0"  type='text' />
        <TextArea bdRadius="3px" onChange={(e)=>setContentNote(e.target.value)}  value={content} name="content" fontSize="15px"  fontFamilly="Roboto" bd="none" color={disabled ? '#d5e4e9' : 'auto'}  bg={disabled ? '#7297a3' : 'auto'} disabled={disabled} p="5px" m="12px 0" resize="none" h="250px" >
            {content}
        </TextArea>
        <Container d="flex" flexJustify="center" p="15px 0">
           {
             disabled ?
             <Buttom d="flex" flexAlign="center" flexJustify="center" color="#d6c6d5" w="120px" m="5px" p="13px" bdRadius="3px" bd="none" bg="#46872d" bgHover=" #2e7213" cursor="pointer" 
                onClick={()=> disabled ?  setDisabled(false) :  setDisabled(true)}>
                       <Image h="25px" src={LapisIcon} /> Editar
            </Buttom>
             :
            <Buttom d="flex" flexAlign="center" flexJustify="center"  color="#d6c6d5" w="120px" m="5px" p="13px" bdRadius="3px" bd="none"  bg="#46872d" bgHover=" #2e7213" cursor="pointer" 
               onClick={()=>UpdateNoteAction()}>
                <Image h="25px" src={SaveIcon} /> Salvar
            </Buttom>
           }
            <Buttom d="flex" flexAlign="center" flexJustify="center" color="#d7c7d6" w="120px" m="5px" p='13px' bdRadius="3px" bd="none" bg="#873a2d" bgHover="#de4b41 " cursor="pointer" 
               onClick={()=>deleteNote(data.id)}>
                <Image h="25px" src={LixeiraIcon} />Excluir
            </Buttom>
        </Container>
     
    </Card>


}
