import './ItemDetailContainer.scss'
import { useEffect, useState } from 'react';
import {getItems} from '../ItemListContainer/products'
import { ItemDetail } from '../ItemDetail/ItemDetail';



export const ItemDetailContainer = ()=>{

    const [item, setItem] = useState([])


    useEffect(()=>{

        getItems.then(res => setItem(res.filter(item => item.id===4)[0]))


    },[])

    console.log(item)


    return(

    
        <div className='itemDetailContainer'>

            <ItemDetail item={item}>
                {item.id}
            </ItemDetail>
        
        </div>
    )


}
