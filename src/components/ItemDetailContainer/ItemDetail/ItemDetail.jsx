import React, { useContext, useState } from 'react'
import ItemCount from '../../Count/ItemCount'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../Context/CartContext'



function ItemDetail({producto}) {
    const {cartList, addCart} = useCartContext()
    

    const [mostrar, setMostrar] = useState(true)
    const onAdd = (cant) => {
        setMostrar(false)
        addCart({...producto, cantidad: cant})
        console.log(cant)
    }
    console.log(cartList)
    return (
        <div className='row'>
            <center >
                <div className="card mb-3" style={{width:900}}>
                
                    <div className="row g-0">
                        <div className="card-header">
                            {producto.category}
                        </div>
                        <div className="col-md-4">
                        <img src={producto.imgUrl} className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-4">
                            <div className="card-body">
                                <h5 className="card-title">{producto.name}</h5>
                                <p className="card-text">{producto.description}</p>
                                <p className="card-text">Stock {producto.stock}</p>
                                <h5 className="card-text">$ {producto.precio}</h5>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card-body">
                                {mostrar ? <ItemCount item={producto} onAdd={onAdd} /> :
                                <div>
                                    <Link to='/cart'><button type="button" className="btn btn-primary">Finalizar Compra</button></Link>
                                    <Link to='/'><button type="button" className="btn btn-success">Seguir Compra</button></Link>
                                </div>}
                            </div>
                            
                        </div>
                    </div>
                </div>
            </center>
       </div> 
    )
}

export default ItemDetail
