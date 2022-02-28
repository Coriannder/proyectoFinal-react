import './ItemDetailContainer.scss'
import { useEffect, useState } from 'react';
import {getItems} from '../ItemListContainer/products'
import { ItemDetail } from '../ItemDetail/ItemDetail';
import {NavLink, useParams} from 'react-router-dom'



export const ItemDetailContainer = ({ruta})=>{

    const {Id} = useParams()
    const [item, setItem] = useState([])
    
    useEffect(()=>{

        getItems.then(res => setItem(res.filter(item => item.id===Number(Id))[0]))

    },[Id])

    return(

        <div className='itemDetailContainer'>

            <NavLink to={ruta} type="button" className="btn btn-outline-dark btn-cerrar">X</NavLink>
            
            <ItemDetail item={item}>
                {item.id}
            </ItemDetail>
        
        </div>
    )


}
