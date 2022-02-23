import { AuthContext } from "../context/admContext";
import { Form } from "./formEdit";
import { AuthContext as ContextAdm} from "../context/admContext";
import {AuthContext as ContextHome} from '../context/homeContext'
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";


export function Edit(){
        
    let {id} = useParams()

    const { Editar, setProprietario, setPlaca, setAno, setChassi, setModelo, setNumero, 
        setRenavam, setObs, setTitulo, setPreco, setPotencia, setTorque, setKm, setCor, setCabine, 
        setRelacao, setEntreEixos, setCapacidadeTanque, setInfo, setSuspensao, setOpcionais} = useContext(ContextAdm)

    const {elements, rediretToAnnounce} = useContext(ContextHome)    

    useEffect(()=>{
        rediretToAnnounce(id)
    },[])


    return(
            <div> 
                <>
                    {elements &&
                        <Form elements={elements} Editar={Editar} setProprietario={setProprietario} setPlaca={setPlaca} setAno={setAno} setModelo={setModelo}
                    setNumero={setNumero} setRenavam={setRenavam} setObs={setObs} setTitulo={setTitulo} setPreco={setPreco} setPotencia={setPotencia}
                    setTorque={setTorque} setKm={setKm} setCor={setCor} setCabine={setCabine} setRelacao={setRelacao} setEntreEixos={setEntreEixos}
                    setCapacidadeTanque={setCapacidadeTanque} setInfo={setInfo} setSuspensao={setSuspensao} setOpcionais={setOpcionais}  />
                    }
                </>
            </div>
    )
}