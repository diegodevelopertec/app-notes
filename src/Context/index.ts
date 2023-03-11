import { createContext,useContext } from "react"






export type NoteType={
    id:string,
    title:string,
    content:string,
  
}

export type UserType={
    name:string,
    email:string,
    password:string
}




export type ContextType={
    stateModal:boolean,
    token:string | null,
    setStateModal:(state:boolean)=>void,
    user:UserType | null ,
    Login:(data:UserType)=>boolean | void,
    Register:(data:UserType)=>any,
    Logout:()=>void,
    notes:NoteType[] | null,
    addNote:(data:NoteType)=>void,
    deleteNote:(id:string)=>void,
    updateNote:(data:NoteType)=>void
}

export const ContextApp=createContext<ContextType>({
  
    stateModal:false,
    token:null,
    setStateModal:()=>{},
    user:null,
    Login:()=>{},
    Register:()=>{},
    Logout:()=>{},

    notes:[],
    addNote:()=>{},
    deleteNote:()=>{},
    updateNote:()=>{}

})

export const useContextApp=()=>useContext(ContextApp)