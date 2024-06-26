

import { useState, useContext} from 'react';
import "./CartItemCount.scss"
import deleteIcon from './img/deleteIcon.png'
import { CartContext } from '../../Context/CartContext'



export const CartItemCount =({product})=>{

    const [cantidad, setCantidad] = useState(product.cantidad)
    const [price, SetPrice] = useState(product.item.price * product.cantidad)
    const contextValue = useContext(CartContext)
    

    const sumar = ()=>{

        setCantidad(cantidad + 1);
        SetPrice(product.item.price * (cantidad + 1 ))
        contextValue.upDateCantidad(product.item, + 1)
        contextValue.setCantidadTotal(contextValue.cantidadTotal + 1)
        contextValue.setTotal(contextValue.total + product.item.price)
    }

    const restar = ()=>{

        setCantidad(cantidad-1);
        SetPrice(product.item.price * (cantidad - 1))
        contextValue.upDateCantidad(product.item, - 1)
        contextValue.setCantidadTotal(contextValue.cantidadTotal - 1)
        contextValue.setTotal(contextValue.total - product.item.price)
    }


    return(
        <div className='row '>

            <div className='col-6 '>
                <div className='row cartItemCount__btnContainer'>

                    <button className='col-4 cartItemCount__button' onClick={cantidad>0 ? restar : contextValue.removeItem(product.item.id) }>
                        {cantidad<2
                            ?
                            <img src={deleteIcon} alt='Delete Button' className='cartItemCount__delete'/>
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