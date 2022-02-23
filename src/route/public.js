import {BrowserRouter as Browser, Routes, Route} from 'react-router-dom'
import {Home} from '../pages/Home'
import { NavBar } from '../component/navBar'
import { Footer } from '../component/footer'
import { Announce } from '../pages/Announce'
import { Register } from '../pages/Register'
import { useRef, useEffect } from 'react'
import {AuthContextProvider as ContextHome} from '../../src/context/homeContext'
import {AuthContextProvider as ContextAdm} from '../../src/context/admContext'
import { AuthContextProvider as ContextRegister } from '../context/registerContext'
 
import { Editar } from '../pages/Editar'

export function Public(){
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


    return(
        <Browser>
            <ContextHome>
            <ContextAdm>
              <ContextRegister>
          <NavBar ref={fs}/>
                <Routes>
                    <Route path='/home' element={<Home/>} />
                    <Route path='/announce/:id' element={<Announce/>} />
                    <Route path='/editar/:id' element={<Editar/>} />
                    <Route path='/register' element={<Register/>} />
                </Routes>
                </ContextRegister>
                </ContextAdm>
            </ContextHome>
            <Footer/>
        </Browser>
    )
}
