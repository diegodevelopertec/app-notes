import { createContext,useContext } from "react"

export type NoteType={
    id:string,
    title:string,
    content:string,
   
}

export type UserType={
    id?:string,
    name?:string,
    email:string,
    password:string
}




export type ContextType={
    stateModal:boolean,
    setStateModal:(state:boolean)=>void,
    users:UserType | null,
    Login:(data:UserType)=>boolean | void,
    Register:(data:UserType)=>any,

    notes:NoteType[] | null,
    addNote:(data:NoteType)=>void,
    deleteNote:(id:string)=>void,
    updateNote:(data:NoteType)=>void
}

export const ContextApp=createContext<ContextType>({
  
    stateModal:false,
    setStateModal:()=>{},
    users:null,
    Login:()=>{},
    Register:()=>{},

    notes:[],
    addNote:()=>{},
    deleteNote:()=>{},
    updateNote:()=>{}

})

export const useContextApp=()=>useContext(ContextApp)