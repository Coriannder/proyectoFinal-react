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

    const getItem = async()=>{

        console.log('id', Id);

        const q = query(collection(db, 'items'), where('id', '==', Id))
        const response = await getDocs(q);
        const data = response.docs.map(doc=> doc.data())[0];
        console.log('data', data);
        
        setItem(data);
    }

    
    useEffect(()=>{



        getItem();

       
        /* getItems.then(res => setItem(res.find(item => item.id===Number(Id)))) */

    },[Id])


    console.log('item',item)
    return(

        <div className='itemDetailContainer'>

            <button type="button" className="btn btn-outline-dark btn-cerrar"
            onClick={()=>navigate(-1)}>X</button>
        
            <ItemDetail item={item}/>
        
        </div>
    )


}
