import { collection, doc, getDoc, getFirestore} from 'firebase/firestore';
import React, { useState, useEffect } from 'react';

/* import './ChekOut.css' */
import { Link, useParams } from "react-router-dom";

import OrderItem from './OrderItem'


function Order() {

  const [detalleOrden,setDetalleOrden]=useState()
  const [ordenShow,setOrdenShow]=useState(false)

  const {idOrden} = useParams()

  const idCompra=idOrden
  
  // eslint-disable-next-line
  useEffect(() => {consultarOrden()},[])


async function consultarOrden(){
  const baseOrdenConexion= getFirestore()
  /* const baseOrdenFacturada= collection(baseOrdenConexion, 'Orders', idCompra) */
  const docOrdenFacturada = doc(baseOrdenConexion,'orders', idCompra)
  await getDoc(docOrdenFacturada)
        .then(resp => setDetalleOrden(resp.data()))
        .catch(err => console.log(err))
        .finally(()=> setOrdenShow(true))
        
      }


   return(
    <div>
          <div >
              <div>
                  <div >
                      <h3>Gracias por su Compra</h3>
                      <h3>Su ID es : {idCompra} </h3>

                        <div className="ordenBody">

                              {/* {ordenShow? detalleOrden.items.map(ordenDetalle =>(<OrderItem ordenDetalle={ordenDetalle} />)):""} */}
                              {ordenShow? <OrderItem ordenDetalle={detalleOrden.items} total={detalleOrden.total} />:""}
                        </div>
                                    
                  </div>
              </div>
              <div className="col-25-CK ">
                  <div className="containerCheckOut">
                      <h3>Gracias Por su Compra</h3>
                      <Link to="/">
                      <button className='btn btn-primary btn-lg'  >Inicio</button>
                      </Link>
                  <br/>
                  </div>
              </div>
          </div>
    </div>
  );
}

export default Order;