import React, {useContext} from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import { CartContext } from '../CartContext/CartContext'
import './NavBar.css'

function CartWidget() {
    const {totalItems} = useContext(CartContext)
    return (
        <div >
            <button className='btn btn-secondary botonCart' ><FaShoppingCart/>
            { totalItems()===0 ? <p></p> :<p class="badge bg-secundary">{totalItems()}</p>}
            </button>
        </div>
    )
}

export default CartWidget
