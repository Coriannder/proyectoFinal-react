import './ItemDetailContainer.scss'
import {useEffect, useState } from 'react';
import {getItems} from '../ItemListContainer/products'
import { ItemDetail } from '../ItemDetail/ItemDetail';
import {useNavigate, useParams} from 'react-router-dom'


export const ItemDetailContainer = ()=>{

    const {Id} = useParams()
    const [item, setItem] = useState([])
    const navigate = useNavigate()
    
    useEffect(()=>{

        getItems.then(res => setItem(res.find(item => item.id===Number(Id))))

    },[Id])

    return(

        <div className='itemDetailContainer'>

            <button type="button" className="btn btn-outline-dark btn-cerrar"
            onClick={()=>navigate(-1)}>X</button>
        
            <ItemDetail item={item}/>
        
        </div>
    )


}
