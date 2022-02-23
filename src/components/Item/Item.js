import './Item.scss'
import { ItemCount } from '../ItemCount/ItemCount'

export const Item = ({title, precio, pictureUrl})=>{

    return(
        <div className='item'>
            <img src={pictureUrl} alt={title} className='item_img'/>
            <h3 className='item_title' >
                {title}
            </h3>
            <h4 className='item_price'>${precio}</h4>
            
        </div>
    )
}
