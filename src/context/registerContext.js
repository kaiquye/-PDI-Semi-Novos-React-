import { createContext, useContext, useState } from "react";
import { Axios } from "../api/ApiDocument";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [images, setImages] = useState();
  const [Proprietario, setProprietario] = useState(null);
  const [Placa, setPlaca] = useState(null);
  const [Ano, setAno] = useState(null);
  const [Chassi, setChassi] = useState(null);
  const [Modelo, setModelo] = useState(null);
  const [Numero, setNumero] = useState(null);
  const [Renavam, setRenvam] = useState(null);
  const [titulo, setTitulo] = useState(null);
  const [Preco, setPreco] = useState(null);
  const [Potencia, setPotencia] = useState(null);
  const [Torque, setTorque] = useState(null);
  const [Km, setkm] = useState(null);
  const [Cor, setCor] = useState(null);
  const [Cabine, setCabine] = useState(null);
  const [R_Diferencial, setR_Diferencial] = useState(null);
  const [T_Suspensao, setT_Suspensao] = useState(null);
  const [EntreEixos, setEntreEixos] = useState(null);
  const [C_Cobustivel, setCombustivel] = useState(null);
  const [info, setInfo] = useState(null);
  const [Opcionais, setOpcionais] = useState(null);

  async function NewFormData(images) {
    let files = new FormData();
    for (let i = 0; images.length >= i; i++) {
      files.append("image", images[i]);
    }
    return files("image");
  }

  async function UploadImgs(id) {
    console.log(images);
    const files = new FormData();
    for (let i = 0; images.length > i; i++) {
      files.append("image", images[i]);
    }
    console.log('all',files.getAll('image'));
    await Axios.post("/image/"+id, files, {
      header: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    },files)
      .then((response) => {
        console.log(response)
        if (response.data.sucess !== true || response.data.status === 203) {
          alert("Ocorreu um erro, tente novamente Erro : ", response.data.erro);
          return document.location.reload();
        }
        return true;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  async function SaveFormDoc() {
    await Axios.post("/document", {
      Proprietario: Proprietario,
      Placa: Placa,
      Ano: Ano,
      Cor: Cor,
      Chassi: Chassi,
      Modelo: Modelo,
      Numero: Numero,
      Renavam: Renavam,
      Obs: null,
      titulo: titulo,
    })
      .then((response) => {
        if (response.data.sucess !== true || response.data.status === 203) {
          alert("Ocorreu um erro, tente novamente Erro : ", response.data.erro);
          return document.location.reload();
        }
        return response.data.id;
      })
      .catch((erro) => {
        console.log(erro);
      });
  }
  async function SaveFormFicha(id) {
    await Axios.post("/description/" + id, {
      Preco: Preco,
      Potencia: Potencia,
      Torque: Torque,
      Km: Km,
      Cor: Cor,
      Cabine: Cabine,
      Relacao_Diferencial: R_Diferencial,
      Tipo_Suspensao: T_Suspensao,
      Entre_Eixos: EntreEixos,
      Capacidade_Combustivel: C_Cobustivel,
      inf_Adcionais: info,
      Opcionais_Do_Veiculo: Opcionais,
    })
      .then((response) => {
        if (response.data.sucess !== true || response.data.status === 203) {
          alert("Ocorreu um erro, tente novamente Erro : ", response.data.erro);
          return document.location.reload();
        }
        return true;
      })
      .catch((erro) => {
        console.log(erro);
      });
  }
  function isNull() {
    let elements = [
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
    ];
    let boolean = 1;
    for (let i = 0; elements.length > i; i++) {
      console.log(elements[i]);
      if (!elements[i]) {
        return boolean - 1;
      }
    }
    return boolean;
  }

  async function SaveAll(e) {
    e.preventDefault();
    console.log(images);
     await UploadImgs(138).then((response)=>{
      console.log(response)
    }).catch((erro)=>{
      console.log(erro)
    })
    // if (isNull()) {
    //   try {
    //     const id = await SaveFormDoc();
    //     if (false) {
    //       alert("erro");
    //       return document.reload.location();
    //     } else {
    //         const boolean = await SaveFormFicha(id);
    //         if(!boolean){
    //           alert('erro ao inserir a ficha tecnica /SaveAll/Context')
    //           return document.location.reload()
    //         }else{
    //             const booleanImage = await UploadImgs(id);
    //             if(!booleanImage){
    //               alert('erro ao inserir a imagem no banco de dados  /SaveAll/Contex')
    //               return document.location.reload()
    //             }
    //         }
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // } else {
    //   console.log("erro");
    // }
  }
  return (
    <AuthContext.Provider
      value={{
        SaveAll,
        UploadImgs,
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
        setOpcionais,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
