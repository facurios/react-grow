import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import { getFetch } from '../ItemList/mock'

import './ItemListContainer.css'

function ItemListContainer({greeting}) {
    const [productos, setProductos]= useState([])
    const [loanding, setLoanding]= useState(true)

    const {idCategoria} = useParams()
    console.log(idCategoria)
    
    useEffect(() => {
        if (idCategoria) {
            getFetch
            .then(resp => setProductos(resp.filter(rubro => rubro.tipo === idCategoria)))
            .catch(err=>console.log(err))
            .finally(()=> setLoanding(false))
         }
    
          else {
        
            getFetch
            .then(resp => setProductos(resp))
            .catch(err=>console.log(err))
            .finally(()=> setLoanding(false)) 
    }
    },[idCategoria])
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
