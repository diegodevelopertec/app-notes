import { ContextApp } from "."
import { ReactNode,useState } from "react"
import { UserType } from "./index"
import { NoteType } from "."
import {v4 as uuid} from 'uuid'
import { dataNote } from "../data"

type Props={
    children:ReactNode
}


export const ContextProvider=({children}:Props)=>{
    const [users,setUser]=useState<UserType | null>(null!)
    const [notes,setNotes]=useState<NoteType[] | []>(dataNote)
    const [token,setToken]=useState<String | null>(null)
    const [stateModal,setStateModal]=useState<boolean>(false)

   const  Login=(data:UserType)=>{
    
    


   }
    const Register=(data:UserType)=>{
        let newUser={id:uuid(),...data }
        setUser(newUser)
        localStorage.setItem('user',JSON.stringify(newUser))

    }


    const addNote=(data:NoteType)=>{
        setNotes([data,...notes])


    }
    const deleteNote=(id:string)=>{
        let listNotesUpdate=notes.filter(item=>item.id !== id)
        setNotes([...listNotesUpdate])

    }
    const updateNote=(data:NoteType)=>{
        let dataId=notes.find(item=>item.id === data.id)
        dataId!.content=data.content
        dataId!.title=data.title

    }



    return <ContextApp.Provider value={{notes,users,addNote,deleteNote,Login,Register,updateNote,stateModal,setStateModal}}>
       {children}
    </ContextApp.Provider>
}