import { useState, useEffect, useContext, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../src/context/homeContext'
import { AuthContext as ContextAdm } from '../../src/context/admContext'
import { Slider } from '../../src/component/sliderImage'
import './Style/pageAnnounce.css'

export function PageAnnounce() {

    let {id} = useParams()

    const { rediretToAnnounce, elements } = useContext(AuthContext)
    const { Apagar, Editar, setId, state } = useContext(ContextAdm)
    const Navigate = useNavigate()

    useEffect(() => {
        rediretToAnnounce(id);
    }, [state])

    function slider() {
        return <>
            <Slider elements={elements} />
        </>
    }
    function infoAnnounce() {
        return <>
            {elements.map((info) => (
                <div className='infosVeiculos'>
                    <h2>{info.titulo}</h2>
                    <h1>R${info.Preco}</h1>
                    <p>Ficha Tecnica</p>
                    <label>Quilometragem : {info.Km} Km</label>
                    <label>Modelo : {info.Modelo}</label>
                    <label>Potencia : {info.Potencia} Cv </label>
                    <label>Torque : {info.Torque} Kfmg </label>
                </div>
            ))
            }
        </>
    }
    function descriptionAnnounce() {
        return <>
            {elements.map((describe) => (
                <div>
                    <label> <h4>Suspensão</h4>     {describe.Tipo_Suspensao}</label>
                    <label> <h4>Entre Eixos</h4>  {describe.Entre_Eixos}</label>
                    <label> <h4>Capacidadte do tanque</h4> {describe.Capacidade_Combustivel} L</label>
                    <label> <h4>Potencia</h4> {describe.Torque}Whp</label>
                    <label> <h4>Torque</h4> {describe.Potencia}kfmg</label>
                    <label> <h4>Opcionais</h4> {describe.Opcionais_Do_Veiculo}</label>
                    <label> <h4>Observações sobre o veiculo </h4> {describe.Obs}Cv</label>
                </div>
            ))
            }
        </>
    }
    // function descriptionAnnounce(){
    //     return<>
    //             {elements.map((describe)=>(
    //                 <div>
    //                     <label>  <h4>Suspensão</h4>  <input id='isDisabled'  onChange={(e)=>setSuspensao(e.target.value)} placeholder={describe.Tipo_Suspensao} disabled /></label>
    //                     <label> <h4>Entre Eixos</h4> <input id='isDisabled' onChange={(e)=>{setEntreEixos(e.target.value)}} placeholder={describe.Entre_Eixos} disabled/></label>
    //                     <label> <h4>Capacidadte do tanque</h4> <input id='isDisabled' onChange={(e)=>{setCapacidadeTanque(e.target.value)}}  placeholder={describe.Capacidade_do_Tanque + 'L'} disabled/></label>
    //                     <label> <h4>Potencia</h4>  <input id='isDisabled' type='number'   onChange={(e)=>{setPotencia(e.target.value)}} placeholder={describe.Potencia + 'Whp'} disabled/></label>
    //                     <label> <h4>Torque</h4>  <input id='isDisabled' type='number' onChange={(e)=>{setTorque(e.target.value)}}  placeholder={describe.Torque + 'kfmg'} disabled/>kfmg</label>
    //                     <label> <h4>Opcionais</h4><input id='isDisabled' onChange={(e)=>setOpicionais(e.target.value)} placeholder={describe.Opcionais_do_Veiculo + 'kfmg'} disabled='true'/></label>
    //                     <label> <h4>Observações sobre o veiculo </h4> <input type='text' id='isDisabled' onChange={(e)=>{setObs(e.target.value)}} placeholder={describe.Obs + 'kfmg'} disabled/></label>
    //                 </div>
    //             ))
    //             }  
    //           </>
    // }

    return (
        <div className='pageAnnounce'>
            <div className='announceFist'>

                <div className='sliderImgs'>
                    {elements && slider()}
                </div>

                <div className='infoAnnouncePage' >
                    {elements && infoAnnounce()}
                    <button>ENTRAR EM CONTATO</button>
                    {state &&
                        <>
                            <button className='btn Editar' onClick={() => {
                                Navigate(`/editar/${id}`)
                            }}>EDITAR</button>
                            <button className='btn Editar' onClick={() => { Apagar(id) }}>APAGAR</button>
                        </>
                    }
                </div>

            </div>
            <div className='descriptionAnnounce'>
                <div>
                    {elements && descriptionAnnounce()}
                </div>
            </div>
        </div>
    )
}