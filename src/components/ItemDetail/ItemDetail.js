import './ItemDetail.scss'
import { ItemCount } from '../ItemCount/ItemCount'
import { useEffect, useState } from 'react'
import { NavLink} from 'react-router-dom'


export const ItemDetail = ({item})=>{
    
    const [itemCantidad, setItemCantidad] = useState(0)
    const [isItemCountVisible, setIsItemCountVisible] = useState(true)

    
    const guardarCantidad = (valor)=>{

        setItemCantidad(valor.cantidad)
        setIsItemCountVisible(false) 
    }

    useEffect(()=>{

        console.log('cantidad',itemCantidad)
        console.log('item', item.id )

    },[itemCantidad])

    

    return(
        <div className='itemDetail col'>

            <div className='row'>
                
                <img src={item.pictureUrl} alt={item.title} className='itemDetail_img'/>
                <div className='col'>

                    <p className='itemDetail_title'>
                        {item.title}
                    </p>
                    
                    <p className='itemDetail_price'>
                        ${item.precio}
                    </p>

                    <ItemCount visible={isItemCountVisible} stock='10' initial='0' onAdd={(valor)=>guardarCantidad(valor)}/> 
                    
                    <NavLink to={'/cart'} style={{margin: '10px'}} 
                        className={isItemCountVisible===true? 'notVisible':''}>

                        <button className='itemDetail_btnTerminarCompra'>
                            Finalizar mi Compra
                        </button>

                    </NavLink>

                </div>

            </div>
            
            <p className='itemDetail_descripcion'>
                {item.descripcion}
            </p>
        </div>
        
    
    )

}