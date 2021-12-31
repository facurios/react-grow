import React, { useEffect, useState } from 'react'
import { getFetch } from './ItemList'



function Item() {
    const [productos, setProductos]= useState([])
    const [loanding, setLoanding]= useState(true)
    useEffect(() => {
        getFetch
        .then(resp => setProductos(resp))
        .catch(err=>console.log(err))
        .finally(()=> setLoanding(false))
    },[]

    )

    console.log(productos)
    return (
        <div>
            { loanding ? <h2>Cargando...</h2> :
            productos.map(prod =>
                <center>
                    <div className='card col-md-4'>
                        <img src={prod.img} className='card-img-top'/>
                        <div className='card-body'>
                            <h5 className='card-title'>{prod.nombre}</h5>
                            <p className="card-text">{prod.desc}</p>
                        </div>
                    
                    </div>
                </center>
                    

               

             )}
        </div>
    )
}

export default Item
