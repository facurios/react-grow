import React from 'react'
import logo from '../img/logo.png'
import './NavBar.css'
function NavBar() {
    return (
        <div className='row' >
            <div className='col-md-3'>
                <img src={logo} alt="" />
            </div>
            
            <div className='col-md-5'>
                <div className='row navBar'>
                    <button className='btn btn-primary boton'>Primary</button>
                    <button className='btn btn-success boton' >Sustratos</button>
                    <button className='btn btn-danger boton' >Aditivos</button>
                </div>
            </div>
            <div className='col-md-4 titulo'>
                <h1>Waldos Grow</h1>
            </div>
            
        </div>
    )
}

export default NavBar
