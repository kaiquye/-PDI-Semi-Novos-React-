import { createContext, useState } from "react";
import {useNavigate} from 'react-router-dom'
import { Axios } from "../api/ApiDocument";
export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [elements, setElemens] = useState(null);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [ Year, setYear] = useState(0);
  const [nextResult, setNextResult] = useState(12)

  const navigate = useNavigate()

  async function rediretToAnnounce(id){
    console.log(id)
    if(id === 'null' || id === undefined){
      return navigate('/home')
    }
    await Axios.get('/document/'+id)
    .then((response)=>{
      console.log(response)
      setElemens(response.data.data)
    }).catch((error)=>{
      console.log(error)
    })
  }
  async function FindVehicles() {
    await Axios.get("/document")
      .then((response) => {
        if (response.data.sucess !== true) {
          alert("Banco de dados não esta disponivel");
          return document.location.reload();
        }
        console.log(response.data.data)
        setElemens(response.data.data);
      })
      .catch((error) => {
        console.log('erro', error);
      });
  }
  function cleanFilter() {
    FindVehicles();
  }
  async function FilterByModel(model) {
    await Axios.get("/document/filter/" + model)
      .then((response) => {
        if (response.data.sucess !== true) {
          return elements;
        }
        return setElemens(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  async function FindByYear(year) {
    if(year <= 2000){
      return document.location.reload()
    }
    await Axios.get("/document/filteryear/" + year)
      .then((response) => {
        if (response.data.sucess !== true) {
          return elements;
        }
        return setElemens(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  async function FindByKm(km) {
    await Axios.get("/document/filterkm")
      .then((response) => {
        if (response.data.sucess !== true) {
          return elements;
        }
        return setElemens(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  async function FilterByPreci(mins, maxs) {
    if(maxs < 1){
        return elements
    }
    await Axios.get("/document/filter/" + mins+ '/' + maxs)
      .then((response) => {
          console.log(response)
          if(response.data.sucess !== true){
              return elements
          }
          setElemens(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  async function Next(){
    await Axios.get('/document/next/'+nextResult+'')
    .then((response)=>{
      if(response.data.sucess !== true){
        return elements
      }
      return setElemens(response.data.data)
    })
  }
  return (
    <AuthContext.Provider
      value={{
        elements,
        rediretToAnnounce,
        setMax,
        max,
        Next,
        nextResult,
        setNextResult
        ,
        FilterByPreci,
        setElemens,
        FilterByModel,
        cleanFilter,
        FindByKm,
        FindByYear,
        FindVehicles,
        Year, setYear
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
