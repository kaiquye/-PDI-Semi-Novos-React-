import './Style/formRegister.css'

export function FormRegister(props){

    return (
        <div className="divFormRegister">
                <form className="formRegister" onSubmit={(e)=>props.SaveAll(e)}>

                <section>
                    <h1>Ficha Tecnica</h1>
                <div>
                <label>Titulo do anuncio : </label>
                <input type='number' onChange={(e)=>props.setTitulo(e.target.value)}  placeholder='Ex : WHK3123' />
                </div>
                
                <div>
                <label>Preço : </label>
                <input type='number'  onChange={(e)=>props.setPreco(e.target.value)} placeholder='Ex : WHK3123' />
                </div>

                <div>
                <label>Potencia : </label>
                <input  type='number' onChange={(e)=>props.setPotencia(e.target.value)} placeholder='Ex : 470'/>
                </div>

                <div>
                <label>Torque : </label>
                <input  type='number'   onChange={(e)=>props.setTorque(e.target.value)}  placeholder='Ex : 29.9'/>
                </div>

                <div>
                <label>Km : </label>
                <input  type='number'  onChange={(e)=>props.setkm(e.target.value)}  placeholder='Ex : 300.000'/>
                </div>

                <div>
                <label>Cor : </label>
                <input  type='number'  onChange={(e)=>props.setCor(e.target.value)}  placeholder='Ex : Azul'/>
                </div>

                <div>
                <label>Cabine : </label>
                <input  type='number'  onChange={(e)=>props.setCabine(e.target.value)}  placeholder='Ex : Dupla'/>
                </div>

                <div>
                <label>R.Diferencial : </label>
                <input  type='number' onChange={(e)=>props.setR_Diferencial(e.target.value)}  placeholder='Ex : 3.0'/>
                </div>

                <div>
                <label>Tipo da Suspensão : </label>
                <input  type='number' onChange={(e)=>props.setT_Suspensao(e.target.value)}  placeholder='Ex : Coilover '/>
                </div>

                <div>
                <label>Entre eixos</label>
                <input  type='number' onChange={(e)=>props.setEntreEixos(e.target.value)}  placeholder='Ex : 3.0'/>
                </div>

                <div>
                <label>Tanque de combustivel</label>
                <input  type='number' onChange={(e)=>props.setCombustivel(e.target.value)}  placeholder='Ex : 34L'/>
                </div>

                <div>
                <label>Informações adicionais</label>
                <input  type='number' onChange={(e)=>props.setInfo(e.target.value)}  placeholder='Ex : pneus novos'/>
                </div>

                <div>
                <label>Opcionais do veiculo</label>
                <input  type='number' onChange={(e)=>props.setOpcionais(e.target.value)}  placeholder='Ex : Ar Condicionado'/>
                </div>
                </section>

                <section>
                <h1>Informarções do veiculo</h1>
                <div>
                <label>Placa : </label>
                <input type='number'  onChange={(e)=>props.setPlaca(e.target.value)} placeholder={'Ex : GHT8523'} />
                </div>

                <div>
                <label>Proprietario : </label>
                <input type='number' value={props.Proprietario}  placeholder={props.Proprietario}/>
                </div>

                <div>
                <label>Ano : </label>
                <input  type='number' value={props.Ano} placeholder={props.Ano}/>
                </div>

                <div>
                <label>Cor : </label>
                <input  type='number' value={props.Cor} placeholder={props.Cor}/>
                </div>

                <div>
                <label>Chassi : </label>
                <input  type='number' value={props.Chassi}  placeholder={props.Chassi}/>
                </div>

                <div>
                <label>Modelo : </label>
                <input  type='number'  value={props.Modelo}  placeholder={props.Modelo}/>
                </div>

                <div>
                <label>Numero : </label>
                <input  type='number' value={props.Numero} placeholder={props.Numero}/>
                </div>

                <div>
                <label>Renavam : </label>
                <input  type='number'  value={props.Renavam}  placeholder={props.Renavam}/>
                </div>
                </section>

                <div className='btnCadastrar'>
                <button >Cadastrar</button>
                </div>
              
            </form>
        </div>
    )
}