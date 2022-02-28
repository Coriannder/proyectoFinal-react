import './ItemListContainer.scss'
import { useEffect, useState } from 'react'
import { ItemList } from '../ItemList/ItemList'
import {getItems} from './products'
import { useParams } from 'react-router-dom'


export const ItemListContainer = ({greeting}) =>{

    /* const [items, setItems]=useState([]) */
    const [itemsFiltrado, setItemsFiltrado]=useState([])
    const {categoryId} = useParams();
    
    useEffect(()=>{

        getItems.then((res)=>{
            
            if(categoryId !== undefined){
            
                const itemsAuxiliar = res.filter(item=>item.category === categoryId)
                setItemsFiltrado(itemsAuxiliar)
            }
            else{
                setItemsFiltrado(res)
            }
        })

    },[categoryId])

    return(
        
        <div className='itemListContainer'>
                <div className='itemListContainer_titulo'>
                    {greeting}
                </div>
                <ItemList items={itemsFiltrado}/>
                
        </div>
        
    )

}