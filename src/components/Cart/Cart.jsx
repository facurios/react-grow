import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext/CartContext'



function Cart() {
   const {cartList, vaciarCarrito, borrarItem, total, carritoVacio} = useContext(CartContext)
  
    return (
      <>{carritoVacio()?
      <div>
      <h3>El carrito esta vacio</h3>
      <Link to='/'><button type="button" className="btn btn-success">Ir a comprar</button></Link>
      </div>
      :
      
      
      <center className=' me-mt-3'>
          <table className='table align-middle text-center'>
            <thead>
              <tr>
                <th scope="col">Imagen</th>
                <th scope="col">Nombre</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Total</th>
                <th scope="col">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {cartList.map(prod => 
                  
                      <tr key={prod.id}>
                        <th scope="row" ><img src={prod.imgUrl} alt="" style={{ width: 70}} /></th>
                        <td>{prod.name}</td>
                        <td> {prod.cantidad}</td>
                        <td>$ {prod.precio * prod.cantidad}</td>
                        <td><button className='btn btn-danger btn-sm' onClick={()=>borrarItem(prod)}>X</button></td>
                      </tr>
                    
                    
                      )}
            </tbody>
            <tfoot>
              <tr>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col">Total</th>
                <th scope="col">{total()}</th>
                <th scope="col"></th>
              </tr>
            </tfoot>
        </table>
           
                  
                  <button className='btn btn-danger btn-lg' onClick={vaciarCarrito} > Vaciar Carrito</button>

          </center>
      }
      </>
                
            
          
          
        
    )
}

export default Cart
