import { Card } from "../customs/Card"
import { Form } from "../structure/Form"
import { Input } from "../structure/Input"
import { Container } from "../structure/Container/Index"
import { TextArea } from "../structure/TextArea"
import { Buttom } from "../structure/Button"
import { ChangeEvent, useEffect, useState } from "react"
import {toast} from 'react-toastify'
import { useContextApp } from "../../Context"
import { Title } from "../structure/Title"
import {v4 as uuid} from 'uuid'
import { useNavigate } from "react-router-dom"

type FormData={
  title:string,
  content:string,

}

const initialValues: FormData = {
  title:'',
  content:'',

};

export const FormNote=()=>{

    const [titleForm,setTitleForm]=useState<string>(initialValues.title)
    const [contentForm,setContentForm]=useState(initialValues.content)
    const {setStateModal,addNote}=useContextApp()
    const [formData, setFormData] = useState<FormData>(initialValues);
    const navigate=useNavigate()
    /*
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      }


      const handleSubmit = (e: React.FormEvent<HTMLFormElement> | React.ChangeEvent<HTMLTextAreaElement> | any) => {
        e.preventDefault();
       if(formData.title !== '' && formData.content !== '' ){
           let {title,content}=formData
            let newNote={ id:uuid(),title,content}
               addNote(newNote)
               toast.success('Anotação criada')
               setStateModal(false)
              console.log(newNote);
              navigate('/')
       }else{
          toast.error('Preencha todos os campos')
       }
      };

*/

const setData=()=>{
  if(titleForm && contentForm){
               addNote({id:uuid(),title:titleForm,content:contentForm})
               toast.success('Anotação criada')
               setStateModal(false)
               setTitleForm('')
               setContentForm('')
             
  }else{
      toast.error('Preencha os campos')
  }
}

  return <Card boxShadow="0 0 15px #2c2c30" fontFamilly="Roboto" mqp="12px" mqw="90%" bdRadius="6px" bg="#151733 "  flexDirection="column" d="flex" p="18px">  
                <Title m="12px 0" fontFamilly="Roboto" color="#3b5682">Nova Anotação</Title>
                <Container  p="12px" bdRadius="5px" m="15px 0" mqw="100%" w="650px" boxShadow="0 0 15px #334691" 
                   bg='#1e2a59' d="flex" flexDirection="column"
                   method="POST" 
               >
                <Container w="100%">  
                  <Input  name="title-form" type="text"  bdRadius="6px" m="12px 0" w="100%"   value={titleForm} p="12px 5px" onChange={(e:ChangeEvent<HTMLInputElement>)=>setTitleForm(e.target.value)}  placeholder='Digite o titulo' />
                </Container>
                <Container w="100%">
                  <TextArea name="conten-form"   w="100%" overflow="hidden" p="12px 5px" bdRadius="6px" value={contentForm}  m="12px 0" h="200px" onChange={(e:ChangeEvent<HTMLTextAreaElement>)=>setContentForm(e.target.value)}   placeholder='Digite sua anotação...' > </TextArea>
                </Container>
               <Container w="100%" d="flex"  flexJustify="center">
                <Buttom color="#d6c6d5" w="150px" m="5px" p="13px" bdRadius="3px" bd="none" bg="#87372d" bgHover=" #862b14" cursor="pointer" onClick={()=>setStateModal(false)}>Cancelar</Buttom>
                < Buttom   color="#d7c7d6" w="150px" m="5px" p='13px' bdRadius="3px" bd="none" bg="#46872d" bgHover="#286710 " cursor="pointer" onClick={()=>setData() }  >Salvar</Buttom> 
               </Container>
             </Container>

    </Card>
                
}
