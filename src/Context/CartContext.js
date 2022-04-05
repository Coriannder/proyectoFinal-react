import React, { useState } from "react";
import { useEffect } from "react";


export const CartContext = React.createContext();
export const CartProvider = ({children})=>{

    const [total, setTotal] = useState(0)
    const [cantidadTotal, setCantidadTotal] = useState(0)
    const [cartItems, setCartItems] = useState([])

    const isInCartItems = (producto)=>{
        return cartItems.some(element=>element.item.id===producto.id)
    }

    const upDateCantidad =(item, cantidad)=>{  // Funcion que actualiza la cantidad de algun item ya cargado en el carrito

        const index = cartItems.map(element=> element.item.id).indexOf(item.id)  //indice donde se encuentra el item a actualizar
        cartItems[index].cantidad += cantidad  // agrego nuevas cantidades
    }
    
    const addItem = (item, cantidad) =>{   // Funcion que agrega un item al carrito

        setCantidadTotal(cantidadTotal + cantidad)
        setTotal(total + item.price * cantidad)
        
        if(isInCartItems(item)){
            upDateCantidad(item, cantidad)
        }else{
            setCartItems([...cartItems, {item, cantidad}])
        }
    }

    const removeItem = (id)=>{                // Remover un item del carrito
        setCartItems(cartItems.filter(product=>product.item.id!==id))
    }

    const clear =()=>{                        //Eliminar todos los items del carrito
        setCartItems([]);
        setCantidadTotal(0);
        setTotal(0)
    }

    useEffect(()=>{
        setCantidadTotal(cartItems.map(element=>element.cantidad).reduce((a,b)=> a + b, 0))  // CAntidad total de items del carrito
        setTotal(cartItems.map(element => element.cantidad * element.item.price).reduce((a,b)=> a + b, 0)) // Precio total del carrito
    },[])


    return(

        <CartContext.Provider value={{cartItems, total, setTotal, cantidadTotal, setCantidadTotal, addItem, isInCartItems, removeItem, clear, upDateCantidad }}>
            {children}
        </CartContext.Provider>
    )
}