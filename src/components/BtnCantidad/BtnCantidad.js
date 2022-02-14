import './BtnCantidad.scss';

export const BtnCantidad = ({titulo,disabled,operacion})=>{
    if(disabled == 'true'){
        return(
            <button disabled type='button' className='itemCount__btnCantidad--off' onClick={operacion}  >{titulo}</button>
        )
    }else{
        return(
            <button type='button' className='itemCount__btnCantidad' onClick={operacion}  >{titulo}</button>
        )
    }

}
