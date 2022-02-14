import "./Cart.css"
import { Link } from "react-router-dom"
import { useCartContext } from "../Context/CartContext"

function Cart() {
  const { cartList, cartEmpty, total, removeItem } = useCartContext()
  if (cartList.length !== 0) {
    return (
      <center className=' me-mt-3 px-5'>
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
                <th scope="row" ><img src={prod.imgUrl} alt="" style={{ width: 70 }} /></th>
                <td>{prod.name}</td>
                <td> {prod.cantidad}</td>
                <td>$ {prod.precio * prod.cantidad}</td>
                <td><button className='btn btn-danger btn-sm' onClick={() => removeItem(prod.id)}>X</button></td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col">Total</th>
              <th scope="col">$ {total()}</th>
              <th scope="col"></th>
            </tr>
          </tfoot>
        </table>
        <button className='btn btn-danger' onClick={cartEmpty} > Vaciar Carrito</button>
        <Link to="/cart/CheckOut">
          <button className='btn btn-success ms-1'>Realizar Compra</button>
        </Link>
      </center>
    )
  }
  return (<>
    <div >
      <div>
        <h1>Su carrito esta Vacio</h1>
        <Link to="/">
          <button className="btn btn-primary">Ir a comprar</button>
        </Link>
      </div>
    </div>

  </>
  )
}

export default Cart