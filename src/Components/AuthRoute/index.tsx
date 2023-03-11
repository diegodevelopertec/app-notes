import {  useContextApp } from "../../Context"
import { useNavigate } from "react-router-dom"
import { ReactNode } from "react"


type Props={
    children:ReactNode
}
export const AutRoute=({children}:Props)=>{
    const {user}=useContextApp()
    const navigate=useNavigate()

    if(user){
        return children
    }
    navigate('')
   

   
}