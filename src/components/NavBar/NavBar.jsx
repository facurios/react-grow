import React from 'react'
import logo from '../../img/logo.png' 
import CartWidget from './CartWidget'
import './NavBar.css'

function NavBar() {
    return (
        <div className='row' >
            <div className='col-md-2'>
                <img src={logo} alt="" />
            </div>
            <div className='col-md-8'>
                <div className='row navBar'>
                    <button className='btn btn-primary boton'>Parafernalia</button>
                    <button className='btn btn-success boton' >Sustratos</button>
                    <button className='btn btn-danger boton' >Aditivos</button>
                </div>
            </div>
            
            <div className='col-md-2 '>
                <button className='btn btn-secondary boton' ><CartWidget/> </button>
            </div>
        </div>
    )
}

export default NavBar
