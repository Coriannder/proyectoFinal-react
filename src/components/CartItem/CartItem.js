import { CartItemCount } from "../CartItemCount/CartItemCount"
import "./CartItem.scss"




export const CartItem = ({cartProduct})=>{

    console.log('cartProduct', cartProduct)


    return(

        <div className="row cartItem">

            <div className="col-2 cartItem__imgContainer" >
                <img src={cartProduct.item.pictureUrl} alt={cartProduct.item.title} className='CartItem_img'/>
            </div>

            <div className="col-6 align cartItem__title"  >
                {cartProduct.item.title}
            </div>
        
            <div className="col-4 align"  >
                <CartItemCount product={cartProduct}z/>
            </div>

            
        </div>

        
    )
}