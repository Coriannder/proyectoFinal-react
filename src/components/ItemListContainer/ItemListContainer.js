import { ItemCount } from '../ItemCount/ItemCount'
import './ItemListContainer.scss'

export const ItemListContainer = ({greeting}) =>{
    return(
        <div className="forma">
           {greeting}
           <ItemCount stock='10' initial='0'></ItemCount>
        </div>
    )
}