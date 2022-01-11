import {useEffect, useState} from 'react'
import ItemList from '../ItemList/ItemList'
import { getFetch } from '../ItemList/mock'

import './ItemListContainer.css'

function ItemListContainer({greeting}) {
    const [productos, setProductos]= useState([])
    const [loanding, setLoanding]= useState(true)
    useEffect(() => {
        getFetch
        .then(resp => setProductos(resp))
        .catch(err=>console.log(err))
        .finally(()=> setLoanding(false))
    },[])

    return (
        
        <div className='col-md-12'>
            <div className='row'>
                <h1>{greeting}</h1>
            </div>
            <div>
            {  loanding ? <h2>Cargando...</h2> :
                <ItemList productos={productos} />}
            </div>
            
        </div>
    )
}

export default ItemListContainer
