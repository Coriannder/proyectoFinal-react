import './ItemDetail.scss'
import { ItemCount } from '../ItemCount/ItemCount'


export const ItemDetail = ({item})=>{
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
                    <ItemCount stock='10' initial='0'/>

                </div>


                

            </div>
            
            <p className='itemDetail_descripcion'>
                {item.descripcion}
            </p>
        </div>
        
    
    )

}