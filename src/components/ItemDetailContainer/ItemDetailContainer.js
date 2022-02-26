import './ItemDetailContainer.scss'
import { useEffect, useState } from 'react';
import {getItems} from '../ItemListContainer/products'
import { ItemDetail } from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom'



export const ItemDetailContainer = ()=>{

    const {Id} = useParams()
    const [item, setItem] = useState([])


    useEffect(()=>{

        getItems.then(res => setItem(res.filter(item => item.id===Number(Id))[0]))


    },[Id])

    console.log(item)


    return(

    
        <div className='itemDetailContainer'>

            <ItemDetail item={item}>
                {item.id}
            </ItemDetail>
        
        </div>
    )


}
