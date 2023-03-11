import { Container } from "../../Components/structure/Container/Index"
import { Input } from "../../Components/structure/Input"
import { Form } from "../../Components/structure/Form"
import { Title } from "../../Components/structure/Title"
import { Buttom } from "../../Components/structure/Button"
import { Text } from "../../Components/structure/Text"
import { Connection } from "../../Components/structure/Connection"
import { useState } from "react"
import { toast } from "react-toastify"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { Image } from "../../Components/structure/Image"
import NoteImage from '/note.svg'
import { useContextApp } from "../../Context"




export const LoginPage=()=>{
  const navigate=useNavigate()
  const {Login}=useContextApp()
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
     


const setDataLogin=()=>{

}

    return <Container mqw="100%" h="100%" w="100%" d="flex" mnh='100vh' flexAlign="center" flexJustify="center"  >
 
     
           <Form mqm="0 10px" mqw="90vw" bg="#20224f" action="" method="POST" p="12px 35px" h="450px" w="450px" bdRadius="3px" boxShadow='0 0 15px #092213'>
                <Title fontFamilly="Roboto" m="25px 0" color="#b0bdcf">Entrar</Title>
              <Container d="flex" flexDirection="column"  flexJustify="center" flexAlign="center">
                 <Container m="12px 0" w="100%" >
                    <Input fontSize="15px" bdRadius="5px" bd="none" outlineFocus="2px solid #47ad75"  type="email" w="100%" p="5px" h="45px" name="email" value={email} required={true} placeholder='Digite seu email' onChange={(e)=>e.target.value} />
                 </Container>
                 <Container m="12px 0" w="100%" >
                    <Input fontSize="15px" bdRadius="5px" bd="none" outlineFocus="2px solid #47ad75" type="password" w="100%"  p="5px" h="45px" name="password" value={password} required={true} placeholder='Digite sua senha' onChange={(e)=>e.target.value} />
                 </Container>
             </Container>
             <Container m="30px 0"  w="100%" d="flex" flexJustify="center" >
                    <Input bd="none" textTransform="uppercase"  fontWeight="bold" color="#e3e5e8" w="60%" bg="#245e3e" bgHover="green" h="45px" value="entrar" bdRadius="5px" type="submit"  cursor="pointer" />
                </Container>
                <Container fontFamilly="Arial" d="flex" flexJustify="center">
                  <Text fontFamilly='Roboto'>Não tem uma conta ?<Buttom color="#87c9ca" href={'/register'} bd='none' bg='transparent' onClick={()=>navigate('register')} cursor='pointer' fontFamilly='Roboto' colorHover="#8091d7">clique aqui</Buttom></Text>
                </Container>
           </Form>
     
     
        

    </Container>











}