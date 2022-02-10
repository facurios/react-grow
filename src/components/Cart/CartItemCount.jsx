import React, { useState } from 'react';

function CartItemCount({ contadorQty, contadorStock, contadorMinimo, modifycarQtyCart }) {
 
    const [contadorCarrito, mueveContadorCarrito] = useState(contadorQty);

    const sumaContadorCart = () => {
        if(contadorCarrito < contadorStock){
            let sumaTemp=contadorCarrito +1
            mueveContadorCarrito(sumaTemp)
            modifycarQtyCart(sumaTemp)
        }else{
            alert("stock maximo alcanzado")
        }
    };
  
    const restaContadorCart = () => {
        if(contadorCarrito > contadorMinimo){
            let restaTemp=contadorCarrito -1
            mueveContadorCarrito(restaTemp)
            modifycarQtyCart(restaTemp)
        }
 
        
    };

    return( 
        <div className='cartCelda'>
            <button onClick={()=> {restaContadorCart()}}>-</button>
            <span> {contadorCarrito} </span>
            <button onClick={()=> {sumaContadorCart()}}>+</button>
    </div>
    );
}

export default CartItemCount;