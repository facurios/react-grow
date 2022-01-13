import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../ItemList/mock'
import ItemDetail from './ItemDetail/ItemDetail'

function ItemDetailContainer() {
    const [producto, setProducto] = useState({})
    const [loanding, setLoanding]= useState(true)
    const {idDetalle} = useParams()
    useEffect(() =>{
        getFetch
        .then(resp => setProducto(resp.find(prod => prod.id === idDetalle)))
        .finally(()=> setLoanding(false))
    },[idDetalle])
    console.log(producto)
    return (
        <div>
            {  loanding ? <h2>Cargando...</h2> :
            <ItemDetail producto={producto} />}
        </div>
    )
}

export default ItemDetailContainer
