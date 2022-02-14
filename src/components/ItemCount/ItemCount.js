
import { useState } from 'react';
import './ItemCount.scss';
import '../BtnCantidad/BtnCantidad'
import { BtnCantidad } from '../BtnCantidad/BtnCantidad';
import { BtnAgregarCarrito } from '../BtnAgregarCarrito/BtnAgregarCarrito';

export const ItemCount = ({stock, initial})=>{
    const [cantidad, setCantidad] = useState(Number(initial))

    const sumar = ()=>{
        setCantidad(cantidad+1);
    }
    const restar = ()=>{
        setCantidad(cantidad-1);
    }


    let botonMas = '';
    if(stock > cantidad){
        botonMas = 'false'
    }else{
        botonMas = 'true'
    }

    let botonMenos;
    if(cantidad < 1){
        botonMenos = 'true';
        
    }else{
        botonMenos = 'false'
        
    }

    return(
        <div className='itemCount__container'>
            <div className='itemCount__producto'>
                producto
            </div>
            <div className='itemCount__containerCantidad'>
                <BtnCantidad titulo="-" disabled={botonMenos} operacion={restar}/>
                <div className='itemCount__numero'>{cantidad}</div>
                <BtnCantidad titulo="+" disabled={botonMas} operacion={sumar}/>
            </div>
            <BtnAgregarCarrito cantidadProducto={cantidad}/>
            
        </div>
    )
}

