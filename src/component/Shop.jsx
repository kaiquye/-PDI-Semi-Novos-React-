import {useState, useContext, useEffect} from 'react'
import { AuthContext as ContextHome } from '../context/homeContext'
import {Announce} from '../component/Announce'
import './Style/shop.css'


export function Shop(){
    const {elements, setElements, setNextResult, Next, nextResult, FindVehicles} = useContext(ContextHome)
    useEffect(()=>{
        FindVehicles()
    },[])

    function ListElements(){
        return <>
                {elements.map((element)=>(
                    <>
                    <Announce Model={element.Modelo} id={element.Documento_Veiculo_id} title={element.titulo} preci={element.Preco} Km={element.Km} wallpaper={element.Imagem_1.data}/>
                    </>
              ))} 
               </>
    }

    return(
        <div className='mainShop'>
            <h1>Conheça nossos semi novos a venda</h1>     
              <div className='Shop'>
            {elements && ListElements()}
            </div>
             <div className='next'>
                        <button onClick={()=>{
                              setNextResult(nextResult + 5);
                              Next()
                        }}>
                            Proximo
                        </button>
            </div>
        </div>
      
    )
}