import "./CartItemList.scss"
import { CartItem } from "../CartItem/CartItem"


export const CartItemList = ({cartItems})=>{

    return(

        <div className="cartItemList">

            {cartItems.map(element=>
                <CartItem cartProduct={element} 
                key={element.item.id}/>
            )}

        </div>
    )
}