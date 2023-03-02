import { Container } from "../../Components/structure/Container/Index"
import { Input } from "../../Components/structure/Input"
import { Form } from "../../Components/structure/Form"
import { Title } from "../../Components/structure/Title"
import { Buttom } from "../../Components/structure/Button"
import { useState } from "react"
import { toast } from "react-toastify"
import { useParams } from "react-router-dom"

type DataForm={
    name:string,
    email:string,
   password:string
}

export const RegisterPage=()=>{

  const params=useParams()
    const [formValues, setFormValues] = useState<DataForm>({
        name: "",
        email: "",
        password: "",
      });

      const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormValues((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };

      const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        if(formValues.email !== ' ' && formValues.name !== ' ' && formValues.password !==' '){
            event.preventDefault();
            console.log("Form submitted:", formValues);
        }else{
            toast.error('Preencha todos os campos')
        }
      };


    return <Container h="100%" w="100%" d="flex" mnh='100vh'  flexJustify="center" flexAlign="center" mqw="100vw" mqp="10px " >

            <Form bg="#20224f" action="" method="POST" p="12px 35px" h="450px" w="450px" bdRadius="3px" onClick={()=>handleSubmit} boxShadow='0 0 15px #092213'>
                <Title fontFamilly="Roboto" m="25px 0" color="#b0bdcf">Cadastrar</Title>
                <Container d="flex" flexDirection="column"  flexJustify="center" flexAlign="center">
                            <Container m="12px 0" w="100%">
                                <Input type="text"  w="100%" p="5px" h="45px" placeholder='Digite seu nome'  required={true} fontSize="15px" bdRadius="5px" bd="none" outlineFocus="2px solid #47ad75"  />
                            </Container>
                            <Container m="12px 0" w="100%" >
                                <Input type="email" w="100%" p="5px" h="45px" placeholder='Digite um email'  required={true} fontSize="15px" bdRadius="5px" bd="none" outlineFocus="2px solid #47ad75" />
                            </Container>
                            <Container m="12px 0" w="100%" >
                                <Input type="password" w="100%"  p="5px" h="45px" placeholder='Digite uma senha' required={true} fontSize="15px" bdRadius="5px" bd="none" outlineFocus="2px solid #47ad75"  />
                           </Container>
                </Container>
             <Container m="30px 0"  w="100%" d="flex" flexJustify="center" >
                    <Input bd="none"  textTransform="uppercase" fontWeight="bold"  color="#e3e5e8" w="60%" bg="#245e3e" bgHover="green" h="45px" value="entrar" bdRadius="5px" type="submit" cursor="pointer" />
                </Container>
           </Form>
 

    </Container>











}