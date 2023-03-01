import { Container } from "../../structure/Container/Index"
import {PropsComponents} from '../../../../Types/PropsComponents'


export const Card=({...PropsComponents}:PropsComponents)=>{
    return <Container
        {...PropsComponents}
        fontSize={PropsComponents.fontSize}
        fontFamilly={PropsComponents.fontFamilly}
     >
        {PropsComponents.children}
    </Container>

}