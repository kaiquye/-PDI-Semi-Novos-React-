import { useContext } from "react"
import { AuthContext } from "../context/registerContext"
import { PreviwImg } from "./previwImg"
import { FormRegister } from "./formRegister"
import { UploadImg as Upload} from "./uploadImg"
import './Style/pageRegister.css'

export function PageRegister(){

    const { SaveAll,  UploadImgs,
        images,
        setImages,
        Proprietario,
        Placa,
        setPlaca,
        Ano,
        Chassi,
        Modelo,
        Numero,
        Renavam,
        titulo,
        Preco,
        Potencia,
        Torque,
        Km,
        Cor,
        Cabine,
        R_Diferencial,
        T_Suspensao,
        EntreEixos,
        C_Cobustivel,
        info,
        Opcionais,
        setTitulo,
        setPreco,
        setPotencia,
        setTorque,
        setkm,
        setCor,
        setCabine,
        setR_Diferencial,
        setT_Suspensao,
        setEntreEixos,
        setCombustivel,
        setInfo,
        setOpcionais} = useContext(AuthContext)

    return(
        <div className='mainRegister'>
            {/* <div className='PreviwImage'>
                    {images &&  <PreviwImg images={images}  />}
             </div> */}
            <div className='uploadImage'>
                    <Upload setImages={setImages}/>
             </div>

            <div className='divForm'>
                <FormRegister SaveAll={SaveAll} setPreco={setPreco} setOpcionais={setOpcionais} setPlaca={setPlaca} setInfo={setInfo} setCombustivel={setCombustivel}
                setEntreEixos={setEntreEixos} setT_Suspensao={setT_Suspensao} setR_Diferencial={setR_Diferencial}
                setCabine={setCabine} setCor={setCor} setkm={setkm} setTorque={setTorque} setPotencia={setPotencia} setTitulo={setTitulo}
                Opcionais={Opcionais} info={info} combustivel={C_Cobustivel} EntreEixos={EntreEixos} T_Suspensao={T_Suspensao} R_Diferencial={R_Diferencial}
                Cabine={Cabine} Cor={Cor} Km={Km} Torque={Torque} Potencia={Potencia} Preco={Preco} titulo={titulo} Renavam={Renavam}
                Numero={Numero} Modelo={Modelo} Ano={Ano} Chassi={Chassi} Proprietario={Proprietario} Placa={Placa}   />
            </div>
        </div>
    )
}