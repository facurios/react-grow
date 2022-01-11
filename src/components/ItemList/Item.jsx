import React from 'react'

import './Item.css'


function Item({producto}) {

    return (
        <div key={producto.id}>
            <center >
                <div className='card col-2' >
                    <div class="card-header col-12"> 
                        <h5 className='card-title'>{producto.tipo}</h5>
                    </div>
                    <div className='card-img-top'>
                        <img src={producto.img} className='imgProd' alt='IMAGEN' style={{ width: 100}}/>
                    </div>
                    <div className='card-body col-12'> 
                        <h5 className='card-title'>{producto.nombre}</h5>
                        <p className="card-text">{producto.desc}</p>
                    </div>
                    <div className='card-footer col-12'>
                        <button className='btn btn-primary' > Ver Producto </button>
                    </div>
                </div>
            </center>
        </div>
    )
}

export default Item
