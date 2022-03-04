import { useContext } from 'react'
import './Cart.scss'
import { CartContext } from '../../Context/CartContext'


export const Cart = ()=>{

    const item = useContext(CartContext)

    console.log('itemCart', item.cartItems)

    return(
        <div className='cart'>
            Proximamente un carrito
            <p>
                
            </p>
        </div>
    )
}