import React from 'react'
import { Link } from 'react-router-dom'

import './Item.css'


function Item({producto}) {

    return (
        <div key={producto.id}>
            <center >
                <div className='card col-3' >
                    <div className="card-header col-12"> 
                        <h5 className='card-title'>{producto.tipo}</h5>
                    </div>
                    <div className='card-body col-12'>
                        <img src={producto.img} className='imgProd' alt='IMAGEN' style={{ width: 100}}/>
                    </div>
                    <div className='card-body col-12'> 
                        <h5 className='card-title'>{producto.nombre}</h5>
                        <p className="card-text">{producto.desc}</p>
                    </div>
                    <div className='card-footer col-12'>
                        <Link to={`/detalle/${producto.id}`}>
                            <button className='btn btn-primary' > Ver Producto </button>
                        </Link>
                        
                    </div>
                </div>
            </center>
        </div>
    )
}

export default Item
