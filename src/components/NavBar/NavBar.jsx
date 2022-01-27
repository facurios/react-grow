import { Link, NavLink } from 'react-router-dom'
import React from 'react'
import logo from '../../img/logo.png' 
import CartWidget from './CartWidget'
import './NavBar.css'

function NavBar() {
    return (
        <div className='row' >
            <Link to='/' className='col-md-2'>
                <img src={logo} alt="" />
            </Link>
            <div className='col-md-8'>
                <div className='navBar'>
                    <NavLink to={`/categoria/parafernalias`} className='btn btn-primary boton'>Parafernalia</NavLink>
                    <NavLink to={`/categoria/sustratos`} className='btn btn-success boton' >Sustratos</NavLink>
                    <NavLink to={`/categoria/aditivos`} className='btn btn-danger boton' >Aditivos</NavLink>
                </div>
            </div>
                <Link className='col-md-2 ' to='cart'>
                    <CartWidget/>
                </Link>
                    
                
        </div>
    )
}

export default NavBar
