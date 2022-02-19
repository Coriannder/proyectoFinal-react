import './Item.scss'
import { ItemCount } from '../ItemCount/ItemCount'

export const Item = ({title, price, pictureUrl})=>{

    return(
        <div className='item'>
            <img src={pictureUrl} alt={title} className='item_img'/>
            <h3 className='item_title' >
                {title}
            </h3>
            <h4 className='item_price'>{price}</h4>
            <ItemCount stock='10' initial='0'/>
        </div>
    )
}
