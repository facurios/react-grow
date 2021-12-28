import React from 'react'
import ItemCount from '../Count/ItemCount'
import './ItemListContainer.css'
function ItemListContainer({greeting}) {
    return (
        <div className='col-md-12'>
            <div className='row'>
                <h1>{greeting}</h1>
            </div>
            <div className='row'>
                <ItemCount stock={10} initial={1}/>
            </div>
            
        </div>
    )
}

export default ItemListContainer
