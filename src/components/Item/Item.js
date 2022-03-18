import { Link } from 'react-router-dom'
import './Item.scss'


export const Item = ({title, price, pictureUrl, id})=>{


    return(
        <Link to={`/Item/${id}`} className='item'>

            <img src={pictureUrl} alt={title} className='item_img'/>
            <h3 className='item_title' >
                {title}
            </h3>
            <h4 className='item_price'>${price}</h4>
            
        </Link>
    )
}


