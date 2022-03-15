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

    const upDateCantidad =(item, cantidad)=>{
        let index = cartItems.map(element=> element.item.id).indexOf(item.id)  //indice donde  ya se encuentra el item a agregar
           // console.log('index', index)
            cartItems[index].cantidad += cantidad  // agrego nuevas cantidades
           // console.log('cartItems', cartItems)
    }
    

    const addItem = (item, cantidad) =>{

        setCantidadTotal(cantidadTotal + cantidad)
        setTotal(total + item.precio * cantidad)
        
        if(isInCartItems(item)){
            upDateCantidad(item, cantidad)
        }else{
            setCartItems([...cartItems, {item, cantidad}])
        }
        
        
    }

    const removeItem = (id)=>{
        setCartItems(cartItems.filter(product=>product.item.id!==id))
    }

    const clear =()=>{
        setCartItems();
    }

    useEffect(()=>{
        setCantidadTotal(cartItems.map(element=>element.cantidad).reduce((a,b)=> a + b, 0))
        setTotal(cartItems.map(element => element.cantidad * element.item.precio).reduce((a,b)=> a + b, 0))

        console.log('total', total)
        console.log('cantidadTotal', cantidadTotal)

    },[cartItems])


    return(

        <CartContext.Provider value={{cartItems, total, setTotal, cantidadTotal, setCantidadTotal, addItem, isInCartItems, removeItem, clear, upDateCantidad }}>
            {children}
        </CartContext.Provider>
    )
}