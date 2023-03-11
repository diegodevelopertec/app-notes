import { ContextApp } from "."
import { ReactNode,useEffect,useState } from "react"
import { UserType } from "./index"
import { NoteType } from "."
import {v4 as uuid} from 'uuid'
import { dataNote } from "../data"
import { toast } from "react-toastify"


type Props={
    children:ReactNode
}


export const ContextProvider=({children}:Props)=>{
    const [user,setUser]=useState<UserType | null>(null!)
    const [notes,setNotes]=useState<NoteType[] | []>([])
    const [token,setToken]=useState<string | null>(null)
    const [stateModal,setStateModal]=useState<boolean>(false)

    useEffect(()=>{
        let userStorage=JSON.parse(localStorage.getItem('u') as string)
        let token=JSON.parse(localStorage.getItem('token') as string)
        setUser(userStorage)
        setToken(token)
    },[])

    const  Login=(data:UserType)=>{
        if(data.email === user!.email && user?.password === data.password){
            return true
        }else{
            toast.error('dados de login incorreto')
        }
    
    
    
    }
   
    const Register=(data:UserType)=>{
        let newUser=data
        const token=uuid()
        setToken(token)
        console.log(user,token);
        
        localStorage.setItem('token',JSON.stringify(token))
        localStorage.setItem('u',JSON.stringify(newUser))
        
    }


    const Logout=()=>{
            setUser(null)
            setToken(null)
            localStorage.clear()
    }

    const addNote=(data:NoteType)=>{
        setNotes([data,...notes])
        toast.success('Anotação criada')
    }

    const deleteNote=(id:string)=>{
       
        setNotes(notes.filter(item=>item.id !== id))
        toast.success('Anotação deletada')
        

    }
    const updateNote=(data:NoteType)=>{
        let dataId=notes.find(item=>item.id === data.id)
        dataId!.content=data.content
        dataId!.title=data.title
        toast.success('Anotação atualizada')
    }



    return <ContextApp.Provider value={{notes,user,addNote,deleteNote,Login,Register,updateNote,stateModal,setStateModal,token,Logout}}>
       {children}
    </ContextApp.Provider>
}