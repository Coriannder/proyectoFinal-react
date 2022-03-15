import './Cart.scss'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { CartItemList } from '../CartItemList/CartItemList'
import { Link} from 'react-router-dom'




export const Cart = ()=>{

    
    const contextValue = useContext(CartContext)
    const cartItems = useContext(CartContext).cartItems

    //console.log('cartItems', contextValue.cartItems)

    //console.log('contextValue.cartItems.length == 0', cartItems.length === 0)




    return(
        cartItems.length !== 0
            ?
            <div className='cart' >
                <CartItemList cartItems={cartItems} />

                <div className='row cart__totalContainer'>

                    <div className='col-4 cart__total' >
                        <Link to={'/'}>
                            <button className='cart__button cart__button--seguirComprando'><strong>Seguir Comprando</strong></button>  
                        </Link>
                    </div>

                    <div className='col-4 cart__total'>
                        Total
                    </div>

                    <div className='col-4 cart__total cart__total--larger'>
                        <strong>${contextValue.total}</strong>
                    </div>
                </div>

                <div className='row cart__btnContainer'>
                        <button className='cart__button cart__button--finalizarCompra'>Terminar compra</button>
                </div>

            </div>       
            
            :
            <p className='cart' >no hay productos</p>
    )


}