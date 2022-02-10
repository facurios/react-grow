import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import React from 'react';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './components/Context/CartContext';
import Cart from "./components/Cart/Cart"
import CheckOut from "./components/CheckOut/CheckOut";
import ProcessOrder from "./components/CheckOut/ProcessOrder";
import Order from "./components/CheckOut/Order";
import { OrdenContextProvider } from './components/Context/OrderContext';
function App() {
  
  return (
      <CartContextProvider>
        <OrdenContextProvider>
          <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route exact path='/' element={<ItemListContainer  greeting="Bienvenido a mi tienda Online"/>} />
            <Route exact path='/categoria/:idCategoria' element={<ItemListContainer greeting='Bienvenido a mi tienda Online'/>}/>
            <Route exact path='/detalle/:idDetalle' element={<ItemDetailContainer/>} />
            <Route exact path ='/cart' element={<Cart />}/>
            <Route exact path ='/cart/CheckOut' element={<CheckOut />}/>
            <Route exact path ='/cart/ProcessOrder' element={<ProcessOrder />}/>
            <Route exact path ='/cart/Order/:idOrden' element={<Order />}/>
          </Routes>
        </BrowserRouter>
        </OrdenContextProvider>
      </CartContextProvider>
        
        
      
  );
}

export default App;
 