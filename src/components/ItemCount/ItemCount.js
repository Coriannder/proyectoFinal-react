import './ItemCount.scss';

export const ItemCount = ({mensaje})=>{
    return(
        <div className='itemCount-container'>
            {mensaje}
        </div>
    )
}