
import './CartWidget.css';
import carritoImg from './img/carritoImg.png';

export const CartWidget = () => {
    return(

        <a className="nav-link" href="#" id="btn-carrito">
            <div className="containerImgCarrito">
              <img src= {carritoImg} alt=""/>
            </div>
        </a>

        
    )
}