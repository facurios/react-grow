import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import { useCartContext } from '../Context/CartContext'
import './NavBar.css'

function CartWidget() {
    const {totalItems} = useCartContext()
    return (
        <div >
            <button className='btn btn-secondary botonCart' ><FaShoppingCart/>
            { totalItems()===0 ? <p></p> :<p className="badge bg-secundary">{totalItems()}</p>}
            </button>
        </div>
    )
}

export default CartWidget
