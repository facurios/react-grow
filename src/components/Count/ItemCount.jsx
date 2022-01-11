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
        <div className='centrar row'>
            <div >
                <h6>{contador}</h6>
                <button onClick={handleresta} className='btn btn-danger btn-sm'>-</button><button onClick={handlesuma} className='btn btn-primary btn-sm'>+</button>

            </div>
            
        </div>
    )
}

export default ItemCount
