

import { useState, useContext} from 'react';
import "./CartItemCount.scss"
import deleteIcon from './img/deleteIcon.png.png'
import { CartContext } from '../../Context/CartContext'



export const CartItemCount =({product})=>{

    const [cantidad, setCantidad] = useState(product.cantidad)
  
    const [price, SetPrice] = useState(product.item.precio)

    const contextValue = useContext(CartContext)
    

    const sumar = ()=>{

        setCantidad(cantidad + 1);
        SetPrice(product.item.precio * (cantidad + 1 ))
        contextValue.upDateCantidad(product.item, 1)
        contextValue.setCantidadTotal(contextValue.cantidadTotal + 1)
        contextValue.setTotal(contextValue.total + product.item.precio)

        console.log('total', contextValue.total + product.item.precio)
        console.log('cantidadTotal', contextValue.cantidadTotal + 1)

    }

    const restar = ()=>{

        setCantidad(cantidad-1);
        SetPrice(product.item.precio * (cantidad- 1))
        contextValue.upDateCantidad(product.item, -1)
        contextValue.setCantidadTotal(contextValue.cantidadTotal - 1)
        contextValue.setTotal(contextValue.total - product.item.precio)

        console.log('total', contextValue.total - product.item.precio)
        console.log('cantidadTotal', contextValue.cantidadTotal - 1)
    }

    

    return(
        <div className='row '>

            <div className='col-6 '>
                <div className='row CartItemCount__btnContainer'>

                    <button className='col-4 cartItemCount__button' onClick={cantidad>0 ? restar : contextValue.removeItem(product.item.id) }>
                        {cantidad<2
                            ?
                            <img src={deleteIcon} alt='Delete Button' className='cartItemCount_delete'/>
                            :
                            '-'
                        }
                    </button>

                    <div className='col-4 cartItemCount__quantity align'>
                        {cantidad}
                    </div>

                    <button className='col-4 cartItemCount__button' onClick={sumar}>
                        +
                    </button>

                </div>

            </div>           

            <div className='col-6 align cartItemCount__price'>
                ${price}
            </div>
        </div>
        
    )
}