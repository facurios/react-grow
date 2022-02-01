import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import { CartContext } from '../CartContext/CartContext'




function CartContainer() {

    const {carritoVacio} = useContext(CartContext)
  return<div>
            {carritoVacio()?
      <div>
      <h3>El carrito esta vacio</h3>
      <Link to='/'><button type="button" className="btn btn-success">Ir a comprar</button></Link>
      </div>
        :<div className='row'>
                            <div className='col-8'>
                                <Cart/>
                            </div>
                            
                        </div>

            }
            
        </div>;
}

export default CartContainer;
