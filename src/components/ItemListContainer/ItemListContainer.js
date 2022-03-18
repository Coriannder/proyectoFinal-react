import './ItemListContainer.scss'
import { useEffect, useState } from 'react'
import { ItemList } from '../ItemList/ItemList'
/* import {getItems} from './products' */
import { useParams } from 'react-router-dom'


import { collection, getDocs, query, where } from 'firebase/firestore'

import { db } from '../../utils/Firebase'


export const ItemListContainer = ({greeting}) =>{

    const [itemsFiltrado, setItemsFiltrado]=useState([])
    const {categoryId} = useParams();


    const getData = async()=>{

        let q;

        categoryId !== undefined?
            q = query(collection(db, 'items'), where('category', '==', categoryId))
            :
            q = collection(db, 'items');

        const response = await getDocs(q);
        console.log('response', response);
        const data = response.docs.map(doc=>doc.data());
        console.log('data', data);
        setItemsFiltrado(data)
    }

    useEffect(()=>{

        getData()
        console.log('categoryId', categoryId);


        /* getItems.then((res)=>{
            
            if(categoryId !== undefined){
            
                const itemsAuxiliar = res.filter(item=>item.category === categoryId)
                setItemsFiltrado(itemsAuxiliar)
            }
            else{
                setItemsFiltrado(res)
            }
        }) */

    },[categoryId])

    console.log('itemsFitemsFiltrado',itemsFiltrado);

    return(
        
        <div className='itemListContainer'>
                <div className='itemListContainer_titulo'>
                    {greeting}
                </div>
                <ItemList items={itemsFiltrado}/>
                
        </div>
        
    )

}