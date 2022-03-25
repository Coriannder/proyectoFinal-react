import { Timestamp } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'

import { generateOrder, updateStock } from '../../utils/Firebase'
import './CartForm.scss'


export const CartForm = ({contextValue, isDisplayVisible, setIsDisplayVisible})=>{

    const initialBuyer = {
        name: '',
        lastName: '',
        phone: '',
        email: ''
    }
    
    const [buyer, setBuyer] = useState(initialBuyer)
    const [cartItems] = useState(contextValue.cartItems)
    const [total, setTotal] = useState(contextValue.total)
    const [isOrderSet, setIsOrderSet] = useState(false)
    
    

    const handlerSubmit = (e) => {


        e.preventDefault()
        console.log('submit')
        console.log(contextValue.cartItems)
        if(buyer.name !== "" && buyer.lastName !== "" && buyer.email !== "" && buyer.phone !== ""){  // Verifica que los campos no esten vacios

            const order = {buyer, /* contextValue.cartItems, contextValue.total, (Por que no puedo hacerlo asi?) */ cartItems, total,  date: Timestamp.fromDate(new Date())}
            generateOrder(order).then(result =>{
                contextValue.clear()
                updateStock(cartItems)
            })
            
        } else{
            Swal.fire({                  // Alerta de libreria Sweet Alert 2
                icon: 'error',
                title: 'Error',
                text: handlerError(),
              })
        }
    }

    const handlerError = () =>{
        let text = '';
        if(buyer.name === ''){text += ' El campo Nombre esta vacio '}
        if(buyer.lastName === ''){text += 'El campo Apellido esta vacio '}
        if(buyer.phone === ''){text += 'El campo Telefono esta vacio '}
        if(buyer.email === ''){text += 'El campo email esta vacio '}

        return(text)
    }

    const handlerChange = (e) => {
        setBuyer({...buyer, [e.target.name] : e.target.value})
    }


    useEffect(() => {
        console.log('buyer', buyer);
    }, [buyer])

    return(
        
        <div className="container cart__containerForm" style={{display: isDisplayVisible? 'block':'none' }}>

                <form className="cart__form">

                    <p>Para terminar tu compra ingresa tus datos</p>

                    <div className="mb-3" >
                        <input type="text" className="form-control" name="name" placeholder='Nombre' onChange={handlerChange}></input>
                    </div>

                    <div className="mb-3" >
                        <input type="text" className="form-control" name="lastName" placeholder='Apellido' onChange={handlerChange} ></input>
                    </div>

                    <div className="mb-3">
                        <input type="email" className="form-control" name="email" placeholder='email' onChange={handlerChange} ></input>
                    </div>

                    <div className="mb-3">
                        <input type="number" className="form-control" name="phone" placeholder='Telefono' onChange={handlerChange} ></input>
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={handlerSubmit}>Comprar</button>
                </form>

            </div>
    )
}