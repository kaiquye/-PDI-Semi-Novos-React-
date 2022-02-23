import './Style/formEdit.css'
import { useNavigate, useParams } from 'react-router'

export function Form(props) {

   let { id } = useParams()
   const Navigate = useNavigate()

   return (
      <div className="divForm">
         <form className="formularioEdit" onSubmit={(e) => props.Editar(e, props.elements, id)}>
            <section>
               <div>
                  {console.log('elemns', props.elements)
                  }
                  <label className="titulo">Titulo : </label>
                  <input placeholder={props.elements[0].titulo} onChange={(e) => props.setTitulo(e.target.value)} />
               </div>
               <div>
                  <label>Entre eixos </label>
                  <input placeholder={props.elements[0].Entre_Eixos} onChange={(e) => props.setEntreEixos(e.target.value)} />
               </div>

               <div>
                  <label>Preço </label>
                  <input placeholder={props.elements[0].Preco} onChange={(e) => props.setPreco(e.target.value)} />
               </div>

               <div>
                  <label>Ano  </label>
                  <input placeholder={props.elements[0].Ano} onChange={(e) => props.setAno(e.target.value)} />
               </div>

               <div>
                  <label>Relacâo  </label>
                  <input placeholder={props.elements[0].Relacao_Diferencial} onChange={(e) => props.setRelacao(e.target.value)} />
               </div>

               <div>
                  <label>Torque : </label>
                  <input placeholder={props.elements[0].Torque} onChange={(e) => props.setTorque(e.target.value)} />
               </div>

               <div>
                  <label>Suspensão : </label>
                  <input placeholder={props.elements[0].Suspensao} onChange={(e) => props.setSuspensao(e.target.value)} />
               </div>

               <div>
                  <label>Potencia :  </label>
                  <input placeholder={props.elements[0].Potencia} onChange={(e) => props.setPotencia(e.target.value)} />
               </div>
               <div>
                  <label>Opcionais :</label>
                  <input placeholder={props.elements[0].Opcionais_Do_Veiculo} onChange={(e) => props.setOpcionais(e.target.value)} />
               </div>

               <div>
                  <label>Observações : </label>
                  <input placeholder={props.elements[0].Obs} onChange={(e) => props.setObs(e.target.value)} />
               </div>

               <div>
                  <label>Tanque :</label>
                  <input placeholder={props.elements[0].Capacidade_Combustivel} onChange={(e) => props.setCapacidadeTanque(e.target.value)} />
               </div>

          
            </section>

            <section>

            <div>
                  <label>Proprietario : </label>
                  <input placeholder={props.elements[0].Proprietario} onChange={(e) => props.setProprietario(e.target.value)} />
               </div>
               <div>
                  <label>Placa :</label>
                  <input placeholder={props.elements[0].Placa} onChange={(e) => props.setPlaca(e.target.value)} />
               </div>

               <div>
                  <label>Chassi : </label>
                  <input placeholder={props.elements[0].Chassi} onChange={(e) => props.setChassi(e.target.value)} />
               </div>

               <div>
                  <label>Modelo : </label>
                  <input placeholder={props.elements[0].Modelo} onChange={(e) => props.setModelo(e.target.value)} />
               </div>

               <div>
                  <label>Numero : </label>
                  <input placeholder={props.elements[0].Numero} onChange={(e) => props.setNumero(e.target.value)} />
               </div>

               <div>
                  <label>Renavam : </label>
                  <input placeholder={props.elements[0].Renavam} onChange={(e) => props.setRenavam(e.target.value)} />
               </div>

               <div>
                  <label>Informações :</label>
                  <input placeholder={props.elements[0].Inf_Adicionais} onChange={(e) => props.setInfo(e.target.value)} />
               </div>

               <div>
                  <label>Cabine :</label>
                  <input placeholder={props.elements[0].Cabine} onChange={(e) => props.setCabine(e.target.value)} />
               </div>


               <div>
                  <label>Cor : </label>
                  <input placeholder={props.elements[0].Cor} onChange={(e) => props.setCor(e.target.value)} />
               </div>

               <div>
                  <label>Km  :</label>
                  <input placeholder={props.elements[0].Km} onChange={(e) => props.setKm(e.target.value)} />
               </div>

            </section>

            <div className='buttonForm'>
               <button type="submit" className='btnSalvaForm'>Salva</button>
               <button type='button' className='btnCancelarFom'
                  onClick={() => {
                     Navigate('/home')
                  }} >Cancelar</button>
            </div>
         </form>
      </div>
   )
}