import './Style/footer.css'
import img from '../../src/images/black-logo-tora.png'
import { Container } from '../elements/Container'
export function Footer(){


    return(
        <Container className='rodape'>
                          <h2>Contatos</h2>
                       <div>
                           <img src={img} />
                        </div>
                        <div>
                          <ul>
                                <li><h4>MATRIZ</h4></li>
                                <li>Av. Ápio Cardoso, 20 - Cincão
                                    Contagem-MG | CEP: 32371-615</li>
                                    <li>
                                    <label> (31) 2191-2522 </label>
                                </li>
                          </ul>
                          </div>
                          <div>
                                <ul>
                                  <li><h4>FILIAL</h4></li>
                                <li>Av. Ápio Cardoso, 20 - Cincão
                                    Contagem-MG | CEP: 32371-615</li>
                                    <li>
                                   <label> (31) 2191-2522 </label>
                                </li>
                              </ul>
                        </div>
        </Container>
    )
}