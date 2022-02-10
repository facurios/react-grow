import React, { useEffect, useState, useContext} from 'react';
import {collection, getFirestore, query, getDocs, where, Timestamp, addDoc, documentId, writeBatch} from 'firebase/firestore'
import { Link, Navigate} from "react-router-dom";
import { useCartContext } from '../Context/CartContext';
import {useOrdenContext} from '../Context/OrderContext'
function ProcessOrder() {
    const {ordenCompra} =useOrdenContext()
    const {cartList, total, vaciarCarrito}= useCartContext() 
    const [procesandoOrden, setProcesandoOrden] = useState(true)
    const [ordenID, setOrdenID] =useState("")
    const datosOrden = ordenCompra
    const sumaCart=total()
    
      const [compra, setCompra] = useState(true)
      const [idOrden, setIdOrden] = useState() 
      let orden = {}
    //Orden de compra
      const grabarOrden = async (e) =>{
           
      orden.date = Timestamp.fromDate(new Date())
      orden.buyer = ordenCompra
      orden.total = total()
      orden.items = cartList.map(cartItem => {
        const id = cartItem.id
        const nombre = cartItem.name
        const precio = cartItem.precio * cartItem.cantidad
        const cantidad = cartItem.cantidad
      
        return {id, nombre, precio, cantidad}
      } )
     /* const grabarOrden = async(e) =>{

      let ordenDeCompra = {}
      ordenDeCompra.comprador = datosOrden
      ordenDeCompra.total = sumaCart
      ordenDeCompra.items = cartList.map(itemCarrito => {
              const itemID = itemCarrito.id;
              const itemTitle = itemCarrito.descripcion;
              const itemPrecio = itemCarrito.precio;
              const itemQty = itemCarrito.cantidad;
              const itemImg = itemCarrito.imgUrl;
              const itemTotal = itemCarrito.precio * itemCarrito.cantidad;
          return {itemID,itemTitle,itemPrecio,itemQty,itemTotal,itemImg}
          }) */
          console.log(ordenCompra)
          const db = getFirestore()
      const ordenCollection = collection(db, 'orders')
      console.log(ordenCollection)
      await addDoc (ordenCollection, orden)
        .then (resp => setIdOrden(resp.id) )
        .catch(err => console.log(err))
        .finally()
          /* const database = getFirestore()
          const databaseOrden = collection(database, 'Orders')
          await addDoc(databaseOrden, ordenDeCompra)
          .then(resp => setOrdenID(resp.id))
          .catch(err => console.log(err))
          .finally((res)=> console.log(res)) */
              
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
          .finally(setProcesandoOrden(false))

          batcha.commit()
        console.log(orden)
          /* const actualizarStock = collection(database, "items")
          const consultaStock = query( actualizarStock, where( documentId() , 'in', cartList.map(it => it.id))) 

          const procesoActualizarStock = writeBatch(database)
          await getDocs(consultaStock)
          .then(resp => resp.docs.forEach(res => procesoActualizarStock.update(res.ref, {stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad})))
          .catch(err => console.log(err))
          .finally(()=> setProcesandoOrden(false))
          procesoActualizarStock.commit() */

          vaciarCarrito()    
    }
    //eslint-disable-next-line
     useEffect(() => {if (cartList.length!==0){grabarOrden()}},[cartList]);

    if (cartList.length!==0){

      return(
       <div>
            {procesandoOrden ? (<div className="col mt-5">
                            <div className="spinner-border text-primary " role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
        ) : (
          <>
          <Navigate to= {`/cart/Order/${idOrden}`} />
          </>
       )
   }
       </div>
  )
}

return(
<div>
      <section className="proxCart">
            <div className="proxCartContenido">
                  <img className="proxCartImagen" alt="Logo Buceo"/>
                  <div className="proxCartCard">
                        <h1>Su carrito esta Vacio</h1>
                        <Link to="/productos">
                              <button className="btnItemDetail btnCardItemDetail"  >ir A Comprar</button>
                        </Link>
                  </div>
            </div>
      </section>
</div>
);
}
export default ProcessOrder;