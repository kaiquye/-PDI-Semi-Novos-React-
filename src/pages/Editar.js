import { Container } from "../elements/Container"
import { useState } from "react"
import '../component/Style/pageAnnounce.css'
import { Edit } from "../component/pageEdit"

export function Editar(){
    const [teste, setTEste] = useState()

    return(
        <Container>
        <Container className='bodyEdit'>
                <Container className='formulario'>
                    <Edit/>
                </Container>
        </Container>
        </Container>
    )
}