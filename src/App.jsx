import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import React from 'react';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './components/CartContext/CartContext';
import CartContainer from './components/Cart/CartContainer';





function App() {
  
  return (
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route exact path='/' element={<ItemListContainer  greeting="Bienvenido a mi tienda Online"/>} />
            <Route exact path='/categoria/:idCategoria' element={<ItemListContainer greeting='Bienvenido a mi tienda Online'/>}/>
            <Route exact path='/detalle/:idDetalle' element={<ItemDetailContainer/>} />
            <Route exact path='/cart' element={<CartContainer/>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
      
  );
}

export default App;
