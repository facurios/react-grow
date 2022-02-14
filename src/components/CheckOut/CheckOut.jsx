import { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useOrdenContext } from '../Context/OrderContext'

function CheckOut() {
    const { newOrder } = useOrdenContext()
    const [processOrder, setProcessOrder] = useState(false)
    const [dataForm, setDataForm] = useState({
        name: '',
        email: '',
        phone: ''
    })
    let navegar = useNavigate()

    useEffect(() => {
        if (processOrder) {
            newOrder(dataForm)
            navegar("/cart/ProcessOrder")
        }
    })

    function handleChange(e) {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setProcessOrder(true)
    }

    return (<center>
        <form className='px-5' onSubmit={handleSubmit}>
            <div className='input-group mb-3'>
                <span className='input-group-text' >Nombre y Apellido</span>
                <input type="text" className='form-control'
                    name='name'
                    placeholder='Nombre y Apellido'
                    onChange={handleChange}
                    value={dataForm.name}
                    required />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" >Telefono</span>
                <input type="text" className="form-control"
                    name='phone'
                    placeholder='Teléfono'
                    onChange={handleChange}
                    value={dataForm.phone}
                    required />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Email</span>
                <input type="email" className="form-control"
                    name='email'
                    placeholder='Correo electrónico'
                    onChange={handleChange}
                    value={dataForm.email}
                    required />
            </div>
            <Link to='/'><button type='submit' className='btn btn-dark'>Seguir Comprando</button></Link>
            <button type='submit' className='btn btn-success ms-2 '>Generar Orden</button>
        </form>
    </center>
    )
}

export default CheckOut