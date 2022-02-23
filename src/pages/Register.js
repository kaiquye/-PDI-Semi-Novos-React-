import { Container } from "../elements/Container"
import { PageRegister } from "../component/pageRegister"
import './style/Register.css'


export function Register(){

    return(
        <Container className='Register'>
                <PageRegister/>
        </Container>
    )
}