import './BtnAgregarCarrito.scss'

export const BtnAgregarCarrito = ({cantidadProducto})=>{
        
    const onAdd = ()=>{
        console.log("Se sumo " +cantidadProducto + " unidades del producto idProducto al carrito"  )
    }
    if (cantidadProducto < 1){
        return(
            <button disabled type='button' className='itemCount__btnAgregar--off' onClick={onAdd}>
                Agregar Carrito
            </button>
        )
    }else{
        return(
            <button type='button' className='itemCount__btnAgregar' onClick={onAdd}>
                Agregar Carrito
            </button>
        )

    }
}