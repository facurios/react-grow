import React, { useContext, useState} from 'react'
import { CartContext } from '../CartContext/CartContext'
import {collection, getFirestore, query, getDocs, where, Timestamp, addDoc, documentId, writeBatch} from 'firebase/firestore'
import { Link } from 'react-router-dom';

function Cart() {
  const {cartList, vaciarCarrito, borrarItem, total} = useContext(CartContext) 
  const [compra, setCompra] = useState(true)
  const [idOrden, setIdOrden] = useState() 
  let orden = {}
    //Orden de compra
    const realizarCompra = async (e) =>{
      e.preventDefault()
      orden.date = Timestamp.fromDate(new Date())
      orden.buyer = dataForm
      orden.total = total()
      orden.items = cartList.map(cartItem => {
        const id = cartItem.id
        const nombre = cartItem.name
        const precio = cartItem.precio * cartItem.cantidad
        const cantidad = cartItem.cantidad
      
        return {id, nombre, precio, cantidad}
      } )
      const db = getFirestore()
      const ordenCollection = collection(db, 'orders',)
      await addDoc (ordenCollection, orden)
        .then (resp => setIdOrden(resp.id), setCompra(false), )
        .catch(err => console.log(err))
        .finally()

        //Actualizacion
        /* const orderDoc = doc(db, 'orders','TdVtmNg4qCUsyTpNG1sC' )
        updateDoc(orderDoc,{total: 200})
        .then(resp => console.log(resp)) */

        //actualizar stock
        const queryCollection = collection(db, 'items')
        const queryActualizarStock = query(
          queryCollection, where( documentId(), 'in', cartList.map(it => it.id) )
        )
          const batcha = writeBatch(db)
          await getDocs(queryActualizarStock)
          .then (resp => resp.docs.forEach(res => batcha.update(res.ref, {
            stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad

          })))
          .catch(err => err)
          .finally(fin => console.log(fin))

          batcha.commit()
        console.log(orden)
    }
    
    const [dataForm, setDataForm] = useState({
      email: '',
      name: '',
      phone: ''
    })
  function handleChange(e){
  
    setDataForm(
        {...dataForm,
        [e.target.name]: e.target.value,
        
      }
        
        )
      
    }

    return (<div>
      {compra ?
              <> <center className=' me-mt-3'>
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
                                {/* <button className='btn btn-success btn-lg' onClick={realizarCompra} > Realizar Compra</button> */}

                        </center>
                        <form onSubmit={realizarCompra}>
                              <input type='text'
                                  name='name'
                                  placeholder='name'
                                  onChange={handleChange}
                                  value={dataForm.name}
                              /><br/>
                              <input type='text'
                                  name='phone'
                                  placeholder='Telefono'
                                  onChange={handleChange}
                                  value={dataForm.phone}
                              /><br/>
                              <input type='email'
                                  name='email'
                                  placeholder='Correo electrónico'
                                  onChange={handleChange}
                                  value={dataForm.email}
                              />
                              <button type='submit'>Generar Orden</button>
                          </form></> :
                    <>
                          <h3>Su compra fue realizada</h3>
                          <h4>Su Id es {idOrden}</h4>
                          <Link to='/'><button onClick={vaciarCarrito}>Volver a Inicio</button></Link> 
                    </>
      }
    </div>

        
    )
}

export default Cart
