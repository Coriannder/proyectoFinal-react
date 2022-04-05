import './ItemDetail.scss'
import { ItemCount } from '../ItemCount/ItemCount'
import { useContext, useState} from 'react'
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
                
                <img src={item.pictureUrl} alt={item.title} className='itemDetail__img'/>

                <div className='col itemDetail__col'>

                    <p className='itemDetail__title'>
                        {item.title}
                    </p>
                    
                    <p className='itemDetail__price'>
                        ${item.price}
                    </p>


                    {isItemCountVisible?
                        <ItemCount stock={item.stock}  onAdd={(valor)=>guardarCartItem(valor)}/>
                        :
                        <NavLink to={'/cart'} >

                            <button className='itemDetail__btnTerminarCompra'>
                                Ir al carrito
                            </button>

                        </NavLink>
                    }

                </div>
            </div>
            
            <p className='itemDetail__descripcion'>
                {item.descripcion}
            </p>
        </div>
    )
}