import React from 'react';
/* import './ChekOut.css' */

function OrderItem({ordenDetalle, total}) {
    console.log(ordenDetalle)
    /* const { itemPrecio , itemTotal, itemImg, itemQty, itemTitle } =ordenDetalle.ordenDetalle; */

  return (<div>
    {/* {ordenDetalle.map(producto) => (
        <Item key={producto.id} producto={producto} />
      ))} */}
            <center className=' me-mt-3  ml-5 px-5'>
                        <table className='table align-middle text-center'>
                          <thead>
                            <tr>
                              <th scope="col">Nombre</th>
                              <th scope="col">Cantidad</th>
                              <th scope="col">Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            {ordenDetalle.map(prod => 
                                
                                    <tr key={prod.id}>
                                      <td>{prod.nombre}</td>
                                      <td> {prod.cantidad}</td>
                                      <td>$ {prod.precio}</td>
                                    </tr>
                                    )}
                          </tbody>
                          <tfoot>
                          <tr>
                          <th scope="col"></th>
                              <th scope="col">Total</th>
                              <th scope="col">$ {total}</th>
                              
                            </tr>
                          </tfoot>
                      </table>
            </center>
            {/* <div className="cartItemDetails">
                <div className="ordenCelda">
                        <img className="cartItemImagen" src={ordenDetalle.imgUrl} alt={""} />
                </div>
                <div className="ordenCelda">{ordenDetalle.nombre}</div>
                <div className="ordenCelda">${ordenDetalle.precio}</div>
                <div className="ordenCelda">{ordenDetalle.cantidad}</div>
                <div className="ordenCelda">${ordenDetalle.cantidad*ordenDetalle.precio}</div>
             </div>*/}
          </div> 
     
                
  )
}

export default OrderItem;