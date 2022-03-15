
import { NavLink } from 'react-router-dom';
import './CartWidget.scss';
import carritoImg from './img/carritoImg.png';
import {CartContext} from '../../Context/CartContext'
import { useContext } from 'react';

export const CartWidget = () => {

    const cantidad = useContext(CartContext).cantidadTotal;

    return(

        <NavLink to={'/cart'} className="nav-link">
            <div className="cartWidget__container">
                <img src= {carritoImg} alt=""/>
                {cantidad > 0?
                    <div className='cartWidget__circuloRojo'>{cantidad}</div>
                    :
                    '' }
                
            </div>
        </NavLink>
        
    )
}