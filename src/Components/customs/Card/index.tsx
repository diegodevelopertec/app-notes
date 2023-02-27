import { Container } from "../../structure/Container/Index"
import {PropsComponents} from '../../../../Types/PropsComponents'
import { ThemeStyle } from "../../../ThemeStyle"

export const Card=({...PropsComponents}:PropsComponents)=>{
    return <Container
        {...PropsComponents}
     >
        {PropsComponents.children}
    </Container>

}