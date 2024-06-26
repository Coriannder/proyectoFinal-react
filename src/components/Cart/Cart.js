import './Cart.scss'
import { useContext, useState} from 'react'
import { CartContext } from '../../Context/CartContext'
import { CartItemList } from '../CartItemList/CartItemList'
import { NavLink } from 'react-router-dom'
import { CartForm } from '../CartForm/CartForm'
import Swal from 'sweetalert2'


export const Cart = ()=>{

    const [isDisplayVisible, setIsDisplayVisible] = useState(false)    // Variable para hacer visible CartForm
    const contextValue = useContext(CartContext)
    const cartItems = useContext(CartContext).cartItems
    
    const terminarCompraFunction = () =>{

        if(cartItems.length !== 0){
            setIsDisplayVisible(true)
        }else{
            Swal.fire({
                icon: 'error',
                title: 'El Carrito esta vacio', 
            })
        }
    }

    
    return(

        <div className='cart'>
            <div className='cart__resumen'>

                {cartItems.length !== 0
                    ?
                    <>
                        <p>Estas Llevando</p>

                        <CartItemList cartItems={cartItems} />

                        <div className='row cart__totalContainer'>

                            <div className='col-6 cart__total' >

                                        <button className='cart__button' onClick={()=>contextValue.clear()} ><strong>Vaciar Carrito</strong></button>  
                            </div>

                            <div className='col-2 cart__total'>
                                Total
                            </div>

                            <div className='col-4 cart__total cart__total--larger'>
                                <strong>${contextValue.total}</strong>
                            </div>
                        </div>
                    </>
                    :
                    <div>El carrito esta vacio</div>
                }



                <div className='row cart__btnContainer'>

                    <NavLink to={'/'} style={{width:'auto'}}>
                    <button className='cart__button cart__button--seguirComprando'>Seguir Comprando</button>
                    </NavLink>

                    <button className='cart__button cart__button--finalizarCompra' onClick = {()=>terminarCompraFunction()} >Terminar compra</button>

                </div>
             </div>

            <CartForm isDisplayVisible={isDisplayVisible} setIsDisplayVisible={setIsDisplayVisible} contextValue={contextValue} />
        </div>
    )
}