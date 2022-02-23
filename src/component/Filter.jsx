import "./Style/filter.css";
import { useState, useContext } from "react";
import { AuthContext } from "../../src/context/homeContext";
export function Filter() {
  const {
    elements,
    setElements,
    FindByKm,
    cleanFilter,
    setMax,
    max,
    FilterByPreci,
    FilterByModel,
    FindByYear,
    setYear, Year
  } = useContext(AuthContext);

  function listModels() {
    return (
      <select
        onClick={(e) => {
          if (e.target.value !== "todos os modelos") {
            return FilterByModel(e.target.value);
          }
          return cleanFilter();
        }}
      >
        <option>todos os modelos</option>
        <option>Volvo</option>
        <option>Scania</option>
        <option>Volkswagem</option>
        <option>Daf</option>
        <option>Mercedes</option>
      </select>
    );
  }

  function listByYear() {
    return (
        <>
            <input type='number' placeholder='Ex : 2003'  onChange={(e)=>setYear(e.target.value)} />
            <button  onClick={()=> FindByYear(Year)}>Buscar</button>
        </>
    );
  }

  function listByKm() {
    return (
      <select
        onClick={(e) => {
          if (e.target.value !== "0") {
            return FindByKm(e.target.value);
          }
          return cleanFilter();
        }}
      >
        <option>0</option>
        {elements.map((km) => (
          <option>Ate : {km.Km} Km</option>
        ))}
      </select>
    );
  }

  function listByPreci() {
    return (
      <>
        <input
          type="text"
          placeholder="Maior preço"
          onChange={(e) => setMax(e.target.value)}
        />
        <button onClick={() => FilterByPreci(0, max)}>Buscar</button>
      </>
    );
  }
  return (
    <div className="Filter">
      <div className="filters">
        <h1>Filtrar por : </h1> <br />
        <div>
          <label>Modelo do veiculo : </label>
          {elements && listModels()}
        </div>
        <div>
          <label>Ano de fabricação : </label>
          {elements && listByYear()}
        </div>
        <div>
          <label>Quilometragem ate: </label>
          {elements && listByKm()}
        </div>
        <div>
          <label>Ate:R$</label>
          {elements && listByPreci()}
        </div>
        <button onClick={() => cleanFilter()}>Limpa</button>
      </div>
    </div>
  );
}
