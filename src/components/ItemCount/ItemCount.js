
import { useState } from 'react';
import './ItemCount.scss';



export const ItemCount = ({stock, initial})=>{
    const [cantidad, setCantidad] = useState(Number(initial))

    const sumar = ()=>{
        setCantidad(cantidad+1);
    }
    const restar = ()=>{
        setCantidad(cantidad-1);
    }
    const onAdd = ()=>{
        console.log("Se sumo " +cantidad + " unidades del producto idProducto al carrito"  )
    }

    return(
        <div className='itemCount'>
            {/* <div className='itemCount__producto'>
                producto
            </div> */}
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

            <button disabled={cantidad<=0} 
                    type='button' className={cantidad<=0? 'itemCount__btnAgregar--off': 'itemCount__btnAgregar'} 
                    onClick={onAdd}>
                        Agregar al Carrito
            </button>

        </div>
    )
}

