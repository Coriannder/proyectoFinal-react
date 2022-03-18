import './ItemDetail.scss'
import { ItemCount } from '../ItemCount/ItemCount'
import { useContext, useState } from 'react'
import { NavLink} from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'


export const ItemDetail = ({item})=>{
    
    const [isItemCountVisible, setIsItemCountVisible] = useState(true)
    const contextValue = useContext(CartContext);


    const guardarCartItem = (valor)=>{

        setIsItemCountVisible(false)

        contextValue.addItem(item, valor.cantidad)
        
    }

    return(
        <div className='itemDetail col'>

            <div className='row'>
                
                <img src={item.pictureUrl} alt={item.title} className='itemDetail_img'/>
                <div className='col'>

                    <p className='itemDetail_title'>
                        {item.title}
                    </p>
                    
                    <p className='itemDetail_price'>
                        ${item.price}
                    </p>


                    {isItemCountVisible?
                        <ItemCount stock='10' initial='1' onAdd={(valor)=>guardarCartItem(valor)}/>
                        :
                        <NavLink to={'/cart'} style={{margin: '10px'}}>

                            <button className='itemDetail_btnTerminarCompra'>
                                Ir al carrito
                            </button>

                        </NavLink>
                    }

                </div>

            </div>
            
            <p className='itemDetail_descripcion'>
                {item.descripcion}
            </p>
        </div>
    )
}