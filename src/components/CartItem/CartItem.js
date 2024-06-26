import { CartItemCount } from "../CartItemCount/CartItemCount"
import "./CartItem.scss"




export const CartItem = ({cartProduct})=>{

    return(

        <div className="row cartItem">

            <div className="col-2 cartItem__imgContainer" >
                <img src={cartProduct.item.pictureUrl} alt={cartProduct.item.title} className='cartItem__img'/>
            </div>

            <div className="col-5 align cartItem__title"  >
                {cartProduct.item.title}
            </div>
        
            <div className="col-5 align"  >
                <CartItemCount product={cartProduct}/>
            </div>
  
        </div>
    )
}