import { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/homeContext";
import { Container } from "../elements/Container";
import { Banner } from "../component/bannerAnnounce";
import {PageAnnounce} from '../component/pageAnnounce'
import "./style/Announce.css";


export function Announce() {
  const fs = useRef()

  function Fs (){
    console.log(fs)

  if( fs.current ){
      fs.current.focus()
    } 
  }

  useEffect(() => {
    Fs()
  }, []);

  return (
        <Container  className='bodyAnnounce'>
                <Container className='pageBannerAnnounce'>
                            <Banner ref={fs}/>
                </Container>
                <div   className="mensagemAnnounce">
                  <label >Adquira o seu seminovo com qualidade, segurança e as melhores condições do mercado </label>
                </div>
                <Container className='pageMainAnnounce'>
                            <PageAnnounce/>
                </Container>
                <Container className='pageFooterAnnounce'>
                </Container>    
        </Container>
  );
}
