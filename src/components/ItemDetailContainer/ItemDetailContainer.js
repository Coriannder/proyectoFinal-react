import './ItemDetailContainer.scss'
import {useEffect, useState } from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import {useNavigate, useParams} from 'react-router-dom'

import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../utils/Firebase'


export const ItemDetailContainer = ()=>{

    const {Id} = useParams()
    const [item, setItem] = useState([])
    const navigate = useNavigate()

    

    useEffect(()=>{
        
        const getItem = async()=>{
            const q = query(collection(db, 'items'), where('id', '==', Id))
            const response = await getDocs(q);
            const data = response.docs.map(doc=> doc.data())[0];
            setItem(data);
        }

        getItem();

    },[Id])

    return(
        <div className='itemDetailContainer'>
            <button type="button" className="btn btn-outline-dark itemDetailContainer__btnCerrar"
            onClick={()=>navigate(-1)}>X</button>
        
            <ItemDetail item={item}/>
        </div>
    )
}
