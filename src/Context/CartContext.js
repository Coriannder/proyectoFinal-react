import React, { useState } from "react";


export const CartContext = React.createContext();


export const CartProvider = ({children})=>{

    const [cartItems, setCartItems] = useState([])

    const isInCartItems = (producto)=>{
        return cartItems.some(element=>element.item.id===producto.id)
    }

    const addItem = (item, cantidad) =>{
        isInCartItems(item)? console.log("El producto no se agrego porque ya existe en carrito")
            :setCartItems([...cartItems, {item, cantidad}]);
        console.log('isInCartItems', isInCartItems(item))
    }

    const removeItem = (id)=>{
        setCartItems(cartItems.filter(product=>product.item.id!==id))
    }

    const clear =()=>{
        setCartItems();
    }

    return(

        <CartContext.Provider value={{cartItems, addItem, isInCartItems, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    )
}