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

type DataForm={
   email:string,
   password:string
}

export const LoginPage=()=>{
  const navigate=useNavigate()
  const params=useParams()


    const [formValues, setFormValues] = useState<DataForm>({ email: "", password: ""});

      const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormValues((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };

      const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        if(formValues.email !== ' ' && formValues.password !==' '){
            event.preventDefault();
            console.log("Form submitted:", formValues);
          
        }else{
            toast.error('Preencha todos os campos')
        }
      };


    return <Container h="100%" w="100%" d="flex" mnh='100vh' flexAlign="center" flexJustify="center"  >
 
      <Container >
           <Form bg="#20224f" action="" method="POST" p="12px 35px" h="450px" w="450px" bdRadius="3px" onClick={()=>handleSubmit} boxShadow='0 0 15px #092213'>
                <Title fontFamilly="Roboto" m="25px 0" color="#b0bdcf">Entrar</Title>
              <Container d="flex" flexDirection="column"  flexJustify="center" flexAlign="center">
                 <Container m="12px 0" w="100%" >
                    <Input fontSize="15px" bdRadius="5px" bd="none" outlineFocus="2px solid #47ad75"  type="email" w="100%" p="5px" h="45px" name="email" required={true} placeholder='Digite seu email' onChange={handleChange} />
                 </Container>
                 <Container m="12px 0" w="100%" >
                    <Input fontSize="15px" bdRadius="5px" bd="none" outlineFocus="2px solid #47ad75" type="password" w="100%"  p="5px" h="45px" name="password" required={true} placeholder='Digite sua senha' onChange={handleChange} />
                 </Container>
             </Container>
             <Container m="30px 0"  w="100%" d="flex" flexJustify="center" >
                    <Input bd="none" textTransform="uppercase"  fontWeight="bold" color="#e3e5e8" w="60%" bg="#245e3e" bgHover="green" h="45px" value="entrar" bdRadius="5px" type="submit" cursor="pointer" />
                </Container>
                <Container fontFamilly="Arial" d="flex" flexJustify="center">
                  <Text fontFamilly='Roboto'>Não tem uma conta ?<Buttom color="#87c9ca" href={'/register'} bd='none' bg='transparent' onClick={()=>navigate('/register')} cursor='pointer' fontFamilly='Roboto' colorHover="#8091d7">clique aqui</Buttom></Text>
                </Container>
           </Form>
      </Container>
     
        

    </Container>











}