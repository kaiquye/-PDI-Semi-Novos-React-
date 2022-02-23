import './Style/annouce.css'
import {useState,useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import { AuthContext } from '../context/homeContext'

export function Announce(props){
    const navigate = useNavigate()
    const {setId} = useContext(AuthContext)

    return(
        <div className="Announce">
            <div className="wallpaperAnnounce">
                  <img  src={'data:image/jpeg;base64,' + btoa(String.fromCharCode(...new Uint32Array(props.wallpaper)))}/>
            </div>
            <div className="infoAnnounce">
                <div className="specsAnnounce">
                    <h2>R${props.preci}</h2>
                    <label className='titulo'>{props.title}</label><br/>
                    <label>{props.Model} | </label>
                    <label>{props.Km} Km </label>
                </div>
                <div className="buttonAnnounce">
                    <button onClick={()=>{
                        // setId(props.id)
                        navigate(`/announce/${props.id}`)
                    }} >
                        Visitar
                    </button>
                </div>
            </div>
        </div>
    )
}