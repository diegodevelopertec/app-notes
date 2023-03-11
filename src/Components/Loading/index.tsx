import ReactLoading from 'react-loading';
import { Container } from '../structure/Container/Index';
import { Text } from '../structure/Text';

type Props={
	typeLoad:any,
	color:string,
	text:string
}
export const Loading = ({typeLoad,color,text}:Props) => {
	return <Container d='flex' bg='red'  flexDirection='column' flexAlign='center' w='100vw' h='100vh' color='#2b79c2'  fontSize='18px'>
		<ReactLoading type={typeLoad} color={color} height={120} width={120} />
		<Text  fontFamilly='Roboto' fontSize='18px'>{text}</Text>
	</Container>
}
