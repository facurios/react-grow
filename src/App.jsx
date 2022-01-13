import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import React from 'react';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';




function App() {
  
  return (

      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<ItemListContainer  greeting="Bienvenido a mi tienda Online"/>} />
          <Route exact path='/categoria/:idCategoria' element={<ItemListContainer greeting='Bienvenido a mi tienda Online'/>}/>
          <Route exact path='/detalle/:idDetalle' element={<ItemDetailContainer/>} />
          <Route exact path='/cart' element={<Cart/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
