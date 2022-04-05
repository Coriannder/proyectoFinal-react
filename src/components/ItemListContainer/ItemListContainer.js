import './ItemListContainer.scss'
import { useEffect, useState } from 'react'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../utils/Firebase'


export const ItemListContainer = ({greeting}) =>{

    const [itemsFiltrado, setItemsFiltrado]=useState([])
    const {categoryId} = useParams();

    useEffect(()=>{
        const getItems = async()=>{
            let q;
            categoryId !== undefined?
                q = query(collection(db, 'items'), where('category', '==', categoryId))
                :
                q = collection(db, 'items');
            const response = await getDocs(q);
            const data = response.docs.map(doc=>doc.data());
            return data
        }
        getItems().then(res=>{setItemsFiltrado(res)})
    },[categoryId])

    return(
        <div className='itemListContainer'>
                <div className='itemListContainer__titulo'>
                    {greeting}
                </div>
                <ItemList items={itemsFiltrado}/>       
        </div>
    )
}