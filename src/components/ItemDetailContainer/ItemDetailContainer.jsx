import React, { useEffect, useState } from 'react'
import { getFetch } from '../ItemList/mock'
import ItemDetail from './ItemDetail/ItemDetail'

function ItemDetailContainer() {
    const [producto, setProducto] = useState({  })
    const [loanding, setLoanding]= useState(true)
    useEffect(() =>{
        getFetch
        .then(resp => setProducto(resp.find(prod => prod.id === "1")))
        .finally(()=> setLoanding(false))
    })
    console.log(producto)
    return (
        <div>
            {  loanding ? <h2>Cargando...</h2> :
            <ItemDetail producto={producto} />}
        </div>
    )
}

export default ItemDetailContainer
