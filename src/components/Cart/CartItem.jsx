import React, {useContext} from 'react'
import { useCartContext } from '../Context/CartContext';
import "./Cart.css"
import CartItemCount from './CartItemCount';

function CartItem({productos}) {
const{removeItemCarrito, modificoStockCarrito}=useCartContext()
    
const { id, imagen, titulo, desc, precio, qty, stock, minimo } =productos;

const modifycarQtyCart =(contador) => {
        modificoStockCarrito({...productos, contador})
}
    return (       
        <div className="cartItemDetails">
                  <div className="cartCelda">
                        <img className="cartItemImagen" src={imagen} alt={titulo} />
                  </div>
                  <div className="cartCelda">{desc}</div>
                  <div className="cartCelda">${precio}</div>
                  <CartItemCount
                    contadorQty={qty}
                    contadorStock={stock}
                    contadorMinimo={minimo} 
                    modifycarQtyCart={modifycarQtyCart}/>
                  
                  <div className="cartCelda">${qty*precio}
                     <span className="cartRemoverItemSpan"> 
                     <button className="cartBotonRemover" onClick={()=>removeItemCarrito(id)}>Remover</button>
                     </span>
                     </div>
                
        </div>
    );
}

export default CartItem


