function OrderItem({ orderDetail, total }) {

  return (<div>
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
          {orderDetail.map(prod =>
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
  </div>
  )
}

export default OrderItem