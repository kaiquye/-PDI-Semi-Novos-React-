import {
  useContext,
  createContext,
  useEffect,
  useState,
  useRef,
  Children,
} from "react";
import {useParams, useNavigate } from "react-router";
import { Axios } from "../api/ApiDocument";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {

  const Navigate = useNavigate()

  const [state, setState] = useState();
  const [id, setId] = useState();
  const [isDisabled, setIsDisabled] = useState(false);
  const [Proprietario, setProprietario] = useState(null);
  const [Placa, setPlaca] = useState(null);
  const [Ano, setAno] = useState(null);
  const [Cor, setCor] = useState(null);
  const [Chassi, setChassi] = useState(null);
  const [Modelo, setModelo] = useState(null);
  const [Numero, setNumero] = useState(null);
  const [Renavam, setRenavam] = useState(null);
  const [Obs, setObs] = useState(null);
  const [titulo, setTitulo] = useState(null);

  const [Preco, setPreco] = useState(null);
  const [Potencia, setPotencia] = useState(null);
  const [Torque, setTorque] = useState(null);
  const [Km, setKm] = useState(null);
  const [Cabine, setCabine] = useState(null);
  const [Relacao, setRelacao] = useState(null);
  const [Suspensao, setSuspensao] = useState(null);
  const [EntreEixos, setEntreEixos] = useState(null);
  const [CapacidadeDoTanque, setCapacidadeTanque] = useState(null);
  const [info, setInfo] = useState(null);
  const [Opcionais, setOpicionais] = useState(null);

  const [imagem, setImagem] = useState(null);

  function Token() {
      console.log(state)
    if (state) {
      setState(false);
    } else {
      setState(true);
    }
  }
//   function isNull(elements) {
//     var boolean = 1;
//     for (let i = 0; elements.length > i; i++) {
//       if (!elements[i]) {
//         console.log(elements[i]);
//         return (boolean -= 1);
//       }
//     }
//     return boolean;
//   }

  async function Editar(event, params, id) {
    event.preventDefault();
    console.log(params)
    console.log(titulo)
      await Axios.patch("/document/" + id, {
          Proprietario : Proprietario || params[0].Proprietario,
          Placa : Placa || params[0].Placa,
          Ano : Ano || params[0].Ano, 
          Cor : Cor || params[0].Cor,
          Chassi : Chassi || params[0].Chassi,
          Modelo : Modelo || params[0].Modelo,
          Renavam : Renavam || params[0].Renavam,
          Obs : Obs || params[0].Obs,
          titulo : titulo || params[0].titulo
      })
        .then((response) => {
          if(response.data.sucess != true ||  response.data.status != 201){
            document.location.reload()
            return alert('Aconteceu algo inesperado, tente novamente')
          }
          alert('Anuncio salvo.')
          return Navigate('/announce/'+id)
        })
        .catch((erro) => {
          console.log(erro);
        });
  }

  function Apagar(id) {
    
    if(window.confirm('deseja apagar o anuncio ?')){
        Axios.delete('/document/'+id).then((response)=>{
          console.log(response)
          if(response.data.sucess !== true){
            return alert('Erro ao apagar o anuncio')
          }
           alert('Anuncio apagado. ')
           return Navigate('/home')
        })
    }
  }

  return (
    <AuthContext.Provider
      value={{
        Preco,
        setPreco,
        Potencia, 
        setPotencia,
        Torque,
        setTorque,
        Km,
        setKm,
        Cor,
        setCor,
        Cabine, 
        setCabine,
        Relacao,
        setRelacao,
        Suspensao,
        setSuspensao,
        EntreEixos,
        setEntreEixos,
        CapacidadeDoTanque,
        setCapacidadeTanque,
        info,
        setInfo,
        Opcionais,
        setOpicionais,
        setSuspensao,
        
        Proprietario,
        setProprietario,
        Placa,
        setPlaca,
        Ano,
        setAno,
        Chassi,
        setChassi,
        Modelo,
        setModelo,
        Numero,
        setNumero,
        Renavam,
        setRenavam,
        Obs,
        setObs,
        titulo,
        setTitulo,

        Editar,
        Apagar,
        Token,
        state,
        setId
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
