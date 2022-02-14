import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom"
import OrderItem from './OrderItem'

function Order() {
    const [orderDetail, setOrderDetail] = useState()
    const [orderShow, setOrderShow] = useState(false)
    const { idOrder } = useParams()
    const idBuy = idOrder

    useEffect(() => { consultarOrden() })

    const consultarOrden = async (e) => {
        const baseOrdenConexion = getFirestore()
        const docOrdenFacturada = doc(baseOrdenConexion, 'orders', idBuy)
        await getDoc(docOrdenFacturada)
            .then(resp => setOrderDetail(resp.data()))
            .catch(err => console.log(err))
            .finally(() => setOrderShow(true))
    }

    return (
        <div >
            <div>
                <div >
                    <h3>Gracias por su Compra</h3>
                    <h3>Su ID es : {idBuy} </h3>
                    <div className="ordenBody">
                        {orderShow ? <OrderItem orderDetail={orderDetail.items} total={orderDetail.total} /> : ""}
                    </div>
                </div>
            </div>
            <div>
                <Link to="/">
                    <button className='btn btn-primary btn-lg'  >Inicio</button>
                </Link>
            </div>
        </div>
    )
}

export default Order