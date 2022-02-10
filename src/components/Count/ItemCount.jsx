import React, {useState} from 'react'

import './ItemCount.css'

function ItemCount({item, onAdd}) {
    const [contador, setContador] = useState(1)

   const handlesuma = () => {
      contador < item.stock ? setContador(prev => prev + 1)
      : alert("Stock máximo")
   }
   const handleresta = () => {
    contador > 1 ? setContador(prev => prev - 1)
    : alert("Mínimo permitido")
}

    return (
        <div className='centrar row'>
            <div >
                <h6>{contador}</h6>
                <button onClick={handleresta} className='btn btn-danger btn-sm'>-</button>
                <button onClick={handlesuma} className='btn btn-primary btn-sm'>+</button>
            </div>
            {item.stock !== 0 ?
                <button type="button" onClick={() => onAdd(contador)} className="btn btn-success btn-sm">Agregar al carrito</button>
                :
                <button type="button" onClick={() => onAdd(contador)} className="btn btn-success btn-sm disabled">Agregar al carrito</button>
            }
            
        </div>
    )
}

export default ItemCount
