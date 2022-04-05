import './ItemCount.scss';
import { useState, useEffect} from 'react';





export const ItemCount = ({stock, onAdd})=>{

    
    const [cantidad, setCantidad] = useState()
    

    const sumar = ()=>{
        setCantidad(cantidad+1);

    }
    const restar = ()=>{
        setCantidad(cantidad-1);
    }

    useEffect(()=>{    // Si no hay Stock, cantidad es igual a 0 y botones '+' y '-' quedan bloqueados
               
        stock === undefined 
            ?
            setCantidad(1)
            :
            setCantidad(stock > 1 ? 1 : 0)

    },[stock])

   
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

            {stock < 1 ? <p>sin stock</p> : ''}

            

        </div>
    )
}

