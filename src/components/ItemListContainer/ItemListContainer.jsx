import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import {collection, getFirestore, query, getDocs, where} from 'firebase/firestore'

import './ItemListContainer.css'

function ItemListContainer({greeting}) {
    const [productos, setProductos]= useState([])
    const [loanding, setLoanding]= useState(true)

    const {idCategoria} = useParams()
    console.log(idCategoria)
    
    useEffect(() => {
        
        const db = getFirestore()

          if (idCategoria === undefined) {
            const queryCollection = query(collection(db, 'items'))
            getDocs(queryCollection)
            .then(resp => setProductos(resp.docs.map(prod => ({id: prod.id, ...prod.data()}) )))
            .catch(err=> err)
            .finally(setLoanding(false))

         }
    
           else {
            const queryCollection = query(collection(db, 'items'), where('category', '==', idCategoria))
            getDocs(queryCollection)
            .then(resp => setProductos(resp.docs.map(prod => ({id: prod.id, ...prod.data()}) )))
            .catch(err=> err)
            .finally(setLoanding(false))

     } 
    },[idCategoria])
    console.log(productos)
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
