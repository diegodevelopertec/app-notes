import { PropsComponents } from "../../../Types/PropsComponents"
import { Container } from "../structure/Container/Index"
import { useContextApp } from "../../Context"


export const Modal=({...props}:PropsComponents)=>{
    const {stateModal}=useContextApp()

    return <Container flexAlign="center" h={props.h} d={stateModal ?'flex' : 'none'} flexJustify="center" bg={props.bg} ps="fixed"  psTop="0" psBottom="0" psRight="0" psLeft="0" opacity={props.opacity}>
         {props.children}
    </Container>
}