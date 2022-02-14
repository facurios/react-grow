import { useEffect, useState } from 'react'
import { collection, getFirestore, query, getDocs, where, Timestamp, addDoc, documentId, writeBatch } from 'firebase/firestore'
import { Link, Navigate } from "react-router-dom"
import { useCartContext } from '../Context/CartContext'
import { useOrdenContext } from '../Context/OrderContext'
function ProcessOrder() {
  const { orderBuy } = useOrdenContext()
  const { cartList, total, cartEmpty } = useCartContext()
  const [processOrder, setProcessOrder] = useState(true)
  const [idOrder, setIdOrder] = useState()
  let order = {}

  const saveOrder = async (e) => {
    order.date = Timestamp.fromDate(new Date())
    order.buyer = orderBuy
    order.total = total()
    order.items = cartList.map(cartItem => {
      const id = cartItem.id
      const nombre = cartItem.name
      const precio = cartItem.precio * cartItem.cantidad
      const cantidad = cartItem.cantidad
      return { id, nombre, precio, cantidad }
    })
    const db = getFirestore()
    const orderCollection = collection(db, 'orders')
    await addDoc(orderCollection, order)
      .then(resp => setIdOrder(resp.id))
      .catch(err => console.log(err))

    //actualizar stock
    const queryCollection = collection(db, 'items')
    const queryActualizarStock = query(queryCollection, where(documentId(), 'in', cartList.map(it => it.id)))
    const batcha = writeBatch(db)
    await getDocs(queryActualizarStock)
      .then(resp => resp.docs.forEach(res => batcha.update(res.ref, {
        stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad

      })))
      .catch(err => err)
      .finally(setProcessOrder(false))

    batcha.commit()

    cartEmpty()//vaciar Carrito
  }
  useEffect(() => {
    if (cartList.length !== 0) {
      saveOrder() //guardar Orden
    }
  })

  if (cartList.length !== 0) {

    return (
      <div>
        {processOrder ? (
          <div className="col mt-5">
            <div className="spinner-border text-primary " role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) :
          (
            <>
              <Navigate to={`/cart/Order/${idOrder}`} />
            </>
          )
        }
      </div>
    )
  }

  return (
    <div>
      <div className="proxCart">
        <div className="proxCartContenido">
          <img className="proxCartImagen" alt="Logo Buceo" />
          <div className="proxCartCard">
            <h1>Su carrito esta Vacio</h1>
            <Link to="/productos">
              <button className="btnItemDetail btnCardItemDetail"  >ir A Comprar</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProcessOrder