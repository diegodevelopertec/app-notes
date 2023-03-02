import { Container } from "../../../structure/Container/Index"
import { Image } from "../../../structure/Image"
import { Link } from "react-router-dom"
import { Buttom } from "../../../structure/Button"
import { Text } from "../../../structure/Text"
import {Connection } from "../../../structure/Connection"
import MenuIcon from './../../../../assets/icons/menu_mobile.png'
import IconLogin from './../../../../assets/icons/login.png'
import closeMoldal from './../../../../assets/icons/fechar.png'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { PropsComponents } from "../../../../../Types/PropsComponents"
 

export const Header=({...props}:PropsComponents)=>{
    const [openMenuMobile,setOpenMenuMobile]=useState(false)
    const navigate=useNavigate()
    const removeMenu=(e:any)=>{
        e.preventDefault()
        navigate(e.target.value)
        setOpenMenuMobile(false)
    }



    return <Container d={props.d} h={props.h}   flexAlign={props.flexAlign} flexJustify={props.flexJustify}  w={props.w}  bg={props.bg} >
        <Container>
            <Container>
                <Text color={'#409743'} fontSize="35px" fontFamilly="Arial">CandidaTI</Text>
            </Container>
        </Container>
        <Buttom bd="none" trs="all ease 2s" bdRadius="3px" w="50px" h="50px" d="none" mqD={'flex'} flexJustify="center" flexAlign="center"  onClick={()=>openMenuMobile ? setOpenMenuMobile(false): setOpenMenuMobile(true)}>
            <Image src={!openMenuMobile ? MenuIcon : closeMoldal}  />
        </Buttom> 
        <Container h="100%" d="flex"   mqD={openMenuMobile ? 'flex' : 'none'} flexAlign="center"
              mqPosition="absolute"
              mqDirection="column"
              mqTop="90px"  
              mqRight="0"
              bg={'#134353'}
              mqh="auto"
              mqp="90px 0"
              fontSize="1em"
              
                
           >
        {props.children}
        </Container>
    </Container>



}