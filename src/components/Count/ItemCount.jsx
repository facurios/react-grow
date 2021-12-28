import React, {useState} from 'react'
import './ItemCount.css'

function ItemCount({stock,initial}) {
    const [contador, setContador] = useState(1)

   const handlesuma = () => {
      contador < stock ? setContador(prev => prev + 1) : alert("Stock máximo")
   }
   const handleresta = () => {
    contador > initial ? setContador(prev => prev - 1) : alert("Mínimo permitido")
}

    return (
        <div className='centrar'>
            <h2>{contador}</h2>
            <button onClick={handleresta} className='btn btn-danger btn-lg'>-</button>
            <button onClick={handlesuma} className='btn btn-primary btn-lg'>+</button>
        </div>
    )
}

export default ItemCount
