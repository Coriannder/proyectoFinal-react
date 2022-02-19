import { useState } from 'react'
import { ItemList } from '../ItemList/ItemList'
import './ItemListContainer.scss'
import {Items} from './products'


const getItems = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(Items);
    }, 2000);
});

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