import './Style/SpescPage.css'
import truck from '../../src/images/truck.png'
import street from '../../src/images/street.png'
import money from '../../src/images/hand.png'

export function SpescPage(){

    

    return(
        <div className='Spesc'>
            

            <div className='melhoresVeiculos'>
                 <div>
                    <label>Os melhores </label>    
                    <label>veiculos</label>
                    <img src={truck} />
                 </div>       
            </div>

            <div className='kmBaixa'>
                <div>
                    <label>Quilometragems baixas</label>    
                    <img src={street} />
                 </div>      
            </div>
       

            <div className='kmBaixa'>
            <div>
                  <label>Os melhores <br/> preços</label>    
                    <img src={money} />
                 </div>       
            </div>
        </div>

    )
}