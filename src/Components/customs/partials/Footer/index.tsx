import { Container } from "../../../structure/Container/Index"
import { Text } from "../../../structure/Text"
import { Input } from "../../../structure/Input"
import { Connection } from "../../../structure/Connection"


export const Footer=()=>{
    return <Container p="40px 12px" bg="#000000cc" mqDirection="column"  flexJustify="space-around" w="100%"  d="flex">
       <Container d="flex" flex='1' >
           <Container p="12px" flex="2" >
                  <Text color="#575858" fontWeight="bold">A Empresa</Text>
                  <Text m="12px" color="#6d706f" fontSize="13px">
                        Somos uma plataforma de Divulgação de vagas de emprgo com foco na aréa Tec.Temos o objetivo de facilitar o contato entre o recrutador
                        e o candidato.Se cadastre e faça parte desse Objetivo.
                  </Text>
           </Container>
           <Container  flex="1">
                 <Text color="#595c5b" fontWeight="bold">Mapa</Text>
                        <Container fontSize="15px" m="12px" d="flex" flexDirection="column">
                           <Connection textDecorationHover="underline" m="6px 0" color="#6d706f"  src="" colorHover="green">Cadastro</Connection>
                           <Connection textDecorationHover="underline"  m="6px 0" color="#6d706f"  src="" colorHover="green">Login</Connection>
                           <Connection textDecorationHover="underline" m="6px 0" color="#6d706f" src="" colorHover="green" >Vagas</Connection>

                        </Container>
                 
           </Container>
       </Container>
        <Container mqm='15px 0' mqw="100%" w="30%" d="flex" flexDirection="column"  flexAlign="center">
                 <Text color="#595c5b" fontSize="14px" textAlign="center" >Se inscreva para não perder nenhuma vaga</Text>
                 <Input m="12px 0"  type="email" fontSize="15px" placeholder="Digite seu email..." />
        </Container>
    
    
    
    </Container>
}