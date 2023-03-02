import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Container } from './Components/structure/Container/Index'
import { Title } from './Components/structure/Title'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { NotesPage } from './Pages/Notes/notes'
import { LoginRegisterPage } from './Pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import { Modal } from './Components/Modal'
import { Image } from './Components/structure/Image'
import 'react-toastify/dist/ReactToastify.css'
import GitIcon from './../public/git.png'
import LinkeIcon from './../public/linkedin.png'
import { Link } from 'react-router-dom'
import { Text } from './Components/structure/Text'

const App=()=>{
  return < Container >
      <Container p='30px 30px' bg='#07223d' nameComponent='header'>
        <Title fontFamilly='Roboto' color='#46872d'>AppNotes</Title>
      </Container>

      <Container nameComponent='main'  bg='#77ea49a3'>
          <BrowserRouter>
            <Routes>
              <Route path='' element={<NotesPage />} />
              <Route path='/login' element={<LoginRegisterPage />} />
              <Route path='/register' element={<NotesPage />} />
            </Routes>
          </BrowserRouter>
      </Container>
      
      <Container color='#68cf5b'   p='50px 0' bg='#01041f' nameComponent='footer'   d='flex' flexJustify='center' flexDirection='column' flexAlign='center'>
          <Title  >Desenvolvido por Diego Morais</Title>
          <Container d='flex' flexJustify='center' flexAlign='center' m='25px 0' >
            <Text color='#68cf5b' >Me siga nas minhas redes :</Text>
              <Container d='flex' >
                <Container cursor='pointer' bgHover='#0f0f0f' p='11px' m='0 5px ' bdRadius='5px'>
                   <a href="https://github.com/diegodevelopertec" target='_blank'>  <Image src={GitIcon} h='50px' /> </a>
                </Container>
                <Container cursor='pointer' bgHover='#101889' p='11px' m='0 5px' bdRadius='5px'>
                   <a href="https://www.linkedin.com/in/diegodmorais/" target='_blank'> <Image src={LinkeIcon}  h='50px' /> </a>
                </Container>
              </Container>
          
        </Container>
      </Container>

      <ToastContainer theme='colored' />
  </Container>
}
export default App
