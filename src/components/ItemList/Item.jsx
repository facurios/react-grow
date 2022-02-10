import React from 'react'
import { Link } from 'react-router-dom'

import './Item.css'


function Item({producto}) {

    return (
        <div className='row' key={producto.id}>
            <center>
                <div className='card col-sm-6 cartas' >
                    <div className="card-header col-12"> 
                        <h5 className='card-title'>{producto.category}</h5>
                    </div>
                    <div className='card-body col-12'>
                        <img src={producto.imgUrl} className='imgProd' alt='IMAGEN' style={{ width: 80}}/>
                    </div>
                    <div className='card-body col-12'> 
                        <h5 className='card-title'>{producto.name}</h5>
                        <p className="card-text">{producto.description}</p>
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
