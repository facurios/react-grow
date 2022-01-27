import { getDoc, getFirestore,doc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail/ItemDetail'


function ItemDetailContainer() {
    const [producto, setProducto] = useState({})
    const [loanding, setLoanding]= useState(true)
    const {idDetalle} = useParams()
    useEffect(() =>{
        const db = getFirestore()
        const queryProd = doc(db, 'items', idDetalle)
        console.log(idDetalle)
        getDoc(queryProd)
        .then(resp => setProducto({id: resp.id, ...resp.data()}))
        .catch(err => err)
        .finally(()=> setLoanding(false))
    },[idDetalle])
    return (
        <div>
            {  loanding ? <h2>Cargando...</h2> :
            <ItemDetail producto={producto} />}
        </div>
    )
}

export default ItemDetailContainer
