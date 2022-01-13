import React from 'react'
import ItemCount from '../../Count/ItemCount'

function ItemDetail({producto}) {
    return (
        <div className='row'>
            <center >
                <div className="card mb-3" style={{width:900}}>
                
                    <div className="row g-0">
                        <div className="card-header">
                            {producto.tipo}
                        </div>
                        <div className="col-md-4">
                        <img src={producto.img} className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-4">
                            <div className="card-body">
                                <h5 className="card-title">{producto.nombre}</h5>
                                <p className="card-text">{producto.desc}</p>
                                <p className="card-text">Stock 10</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card-body">
                                <ItemCount stock={10} initial={1}/>

                            </div>
                            <div>
                            <button type="button" className="btn btn-primary">Agregar</button><button type="button" className="btn btn-success">Comprar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </center>
       </div> 
    )
}

export default ItemDetail
