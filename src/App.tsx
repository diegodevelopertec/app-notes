import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Container } from './Components/structure/Container/Index'
import { Title } from './Components/structure/Title'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { NotesPage } from './Pages/Notes/notes'
import { LoginRegisterPage } from './Pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import { Modal } from './Components/Modal'
import 'react-toastify/dist/ReactToastify.css'

const App=()=>{
  return < Container >
      <Container p='30px 30px' bg='#07223d' nameComponent='header'>
        <Title fontFamilly='Roboto' color='#78527d'>AppNotes</Title>
      </Container>

      <Container nameComponent='main'  bg='#b196b5'>
          <BrowserRouter>
            <Routes>
              <Route path='' element={<NotesPage />} />
              <Route path='/login' element={<LoginRegisterPage />} />
              <Route path='/register' element={<NotesPage />} />
            </Routes>
          </BrowserRouter>
      </Container>
      
      <Container bg='#322d33' nameComponent='footer' h='120px'  d='flex' flexJustify='center' flexAlign='center'>
        <Title fontFamilly='Roboto'>Desenvolvido por Diego Morais</Title>
      </Container>

      <ToastContainer theme='colored' />
  </Container>
}
export default App
