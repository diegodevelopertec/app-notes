import { Container } from "../../Components/structure/Container/Index"
import { Input } from "../../Components/structure/Input"
import { Form } from "../../Components/structure/Form"
import { Title } from "../../Components/structure/Title"
import { Buttom } from "../../Components/structure/Button"
import { ChangeEvent, useState } from "react"
import { toast } from "react-toastify"
import { useNavigate, useParams } from "react-router-dom"
import { useContextApp, UserType } from "../../Context"
import {v4 as uuid} from 'uuid'


export const RegisterPage=()=>{
   let {user,Register}=useContextApp()
   const [name,setName]=useState<string>('')
   const [email,setEmail]=useState<string>('')
   const [password,setPassword]=useState<string>('')
   const navigate=useNavigate()
 


  const setDataForm=()=>{
    if(name !== '' && email !=='' && password!==''){
      let data={name,email,password}
     if(user?.email === email){
        toast.error('Já existe uma conta com esse email')
     }
  

     let newUser={name,email,password}
     navigate('/notes')
     toast.success('conta criada com sucesso')


     
    }else{
      toast.error('Preencha os campos')
    }
  }
  
    

 return <Container  h="100%" w="100vw" d="flex" mnh='100vh'  flexJustify="center" flexAlign="center" mqw="100vw" mqp="10px " >

          <Container mqw="90vw" bg="#20224f" action="" method="POST" p="12px 35px" h="450px" w="450px" bdRadius="3px"  boxShadow='0 0 15px #092213'>
                <Title fontFamilly="Roboto" m="25px 0" color="#b0bdcf">Cadastrar</Title>
                <Container d="flex" flexDirection="column"  flexJustify="center" flexAlign="center">
                            <Container m="12px 0" w="100%">
                                <Input type="text"  w="100%" p="5px" h="45px" placeholder='Digite seu nome' value={name}  onChange={(e:ChangeEvent<HTMLInputElement>)=>e.target.value} required={true} fontSize="15px" bdRadius="5px" bd="none" outlineFocus="3px solid #47ad75"  />
                            </Container>
                            <Container m="12px 0" w="100%" >
                                <Input type="email" w="100%" p="5px" h="45px" placeholder='Digite um email' value={email} onChange={(e:ChangeEvent<HTMLInputElement>)=>e.target.value}  required={true} fontSize="15px" bdRadius="5px" bd="none" outlineFocus="3px solid #47ad75" />
                            </Container>
                            <Container m="12px 0" w="100%" >
                                <Input type="password" w="100%"  p="5px" h="45px" placeholder='Digite uma senha' value={password} onChange={(e:ChangeEvent<HTMLInputElement>)=>e.target.value}  required={true} fontSize="15px" bdRadius="5px" bd="none" outlineFocus="3px solid #47ad75"  />
                           </Container>
                </Container>
             <Container m="30px 0"  w="100%" d="flex" flexJustify="center" >
                    <Buttom bd="none"  textTransform="uppercase" fontWeight="bold"  color="#e3e5e8" w="60%" bg="#245e3e" bgHover="green" onClick={()=>setDataForm} h="45px"  bdRadius="5px" type="submit" cursor="pointer" >Entrar</Buttom>
                </Container>
           </Container>
 

    </Container>











}