import { useState } from 'react'
import { Link } from 'react-router-dom'

const InputCount = () =>{
    return <div>
        <Link to='/cart'><button type="button" className="btn btn-primary">Finalizar Compra</button></Link>
        <Link to='/'><button type="button" className="btn btn-success">Seguir Comprando</button></Link>
    </div> 
}

const ButtonCount = ({handleInter}) =>{
    return <button type="button" onClick={handleInter} className="btn btn-success">Agregar al carrito</button>
}

const Intercambio = () =>{

    const [inputType, setInputType] = useState ('button')
    
    const handleInter = () =>{
    
        setInputType('input')
    }
    return (
        <div>
            {inputType === 'button' ? <ButtonCount handleInter={handleInter}/> 
            :
            <InputCount/>
        }
        </div>
    )
    }
export default Intercambio
