import "./Style/navBar.css";
import { Container } from "../elements/Container";
import { List } from "../elements/List";
import {Link} from 'react-router-dom'
import { useRef, useContext } from "react";
import {AuthContext} from '../../src/context/admContext'
export function NavBar(props) {

 const {Token} = useContext(AuthContext)
 const ref = useRef()

  return (
    <Container className='navBar'>
      <Container className='logoNavBar'>
        <label>TORA | SEMI NOVOS</label>
        <Container className='buttonMenu'>
        <button ref={props.ref} onClick={()=> {
          if(ref.current.style.display === "none"){
            return ref.current.style.display = "flex"
          }
          return ref.current.style.display = "none"
        }}>
          Menu
        </button> 
      </Container>
      </Container>
      <Container className='linksNavBar'>
        <List className='listLink'>
          <Link to='/home' className="link linkHome" >Home</Link>
          <Link to='/teste' className="link linkVeiculos">Veiculos</Link>
          <Link to='/teste' className="link linkQuemSomos">Quem Somos</Link>
          <button className="link linkContato" >Entrar em contato</button>
          <a onClick={()=>{Token()}} className="souAdm">Sou Administrador</a>
        </List>
      </Container>
    
      <div ref={ref}  className='MenuList' style={{display : "none" }} >
        <List  id='listLink2'>
          <Link to='/teste' className="link linkHome" >Home</Link>
          <Link to='/teste' className="link linkVeiculos">Veiculos</Link>
          <Link to='/teste' className="link linkQuemSomos">Quem Somos</Link>
          <button className="link linkContato" >Contato</button>
        </List>
      </div>
    </Container>
  );
}
