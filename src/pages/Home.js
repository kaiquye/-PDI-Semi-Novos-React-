import { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/homeContext";
import { Container } from "../elements/Container";
import { Banner } from "../component/banner";
import { Shop } from "../component/Shop";
import {News} from '../component/news'
import "./style/Home.css";
import { Filter } from "../component/Filter";
import { SpescPage } from "../component/SpecsPage";

export function Home() {

  const fs = useRef()

  function Fs (){
  if( fs.current ){
      fs.current.focus()
    } 
  }

  useEffect(() => {
    Fs()
  }, []);

  return (
    <Container className="homeBody">
      <Container ref={fs}  className='home'>
        <Container className="ContainerBanner">
          <Banner />
        </Container>
        <Container className='mensagem'>
                <p>Adquira o seu seminovo com qualidade, segurança e as melhores condições do mercado</p>
        </Container>
        <Container className="ElementHome"> 
            <Filter/>
            <Shop/>
            <News/>
            <SpescPage/>
        </Container>
      </Container>
    </Container>
  );
}
