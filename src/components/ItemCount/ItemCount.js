import './ItemCount.scss';
import { useState} from 'react';





export const ItemCount = ({stock, initial, onAdd})=>{


    const [cantidad, setCantidad] = useState(Number(initial))
    

    const sumar = ()=>{
        setCantidad(cantidad+1);
        

    }
    const restar = ()=>{
        setCantidad(cantidad-1);
    }
    

    return(

        <div className='itemCount'>
            
            <div className='itemCount__cantidad'>

                <button disabled={cantidad<=0} 
                        type='button' 
                        className={cantidad<=0? 'itemCount__btnCantidad--off' : 'itemCount__btnCantidad'} 
                        onClick={restar}>-
                </button>

                <div className='itemCount__numero'>{cantidad}</div>

                <button disabled={cantidad>=stock} 
                        type='button' 
                        className={cantidad>=stock? 'itemCount__btnCantidad--off' : 'itemCount__btnCantidad'} 
                        onClick={sumar}>+
                </button>
                
            </div>

            <button onClick={()=>onAdd({cantidad})}
                    disabled={cantidad<=0} 
                    type='button' className={cantidad<=0? 'itemCount__btnAgregar--off': 'itemCount__btnAgregar'}
                    >
                        Agregar al Carrito
            </button>

        </div>
    )
}

