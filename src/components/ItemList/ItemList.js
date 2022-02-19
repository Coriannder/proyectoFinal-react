import './ItemList.scss'
import { Item } from '../Item/Item'


export const ItemList = ({items})=>{
    return(

        <div className='itemList'>
            {items.map((item) => (
                <Item {...item}
                      key={item.id}
                      />
            ))}
        </div>
    )
}