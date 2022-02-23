import './ItemListContainer.scss'
import { useState } from 'react'
import { ItemList } from '../ItemList/ItemList'
import {getItems} from './products'


export const ItemListContainer = ({greeting}) =>{

    const [items, setItems]=useState([])

    getItems.then(res =>{
        setItems(res)
    })

    return(
        
        <div className='itemListContainer'>
                <div className='itemListContainer_titulo'>
                    {greeting}
                </div>
                <ItemList items={items}/>
        </div>
        
    )

}