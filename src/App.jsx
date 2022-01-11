import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import React from 'react';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';




function App() {
  
  return (

      <div>
        <NavBar/>
        <ItemListContainer greeting="Bienvenido a mi tienda Online"/>
        <ItemDetailContainer/>
      </div>
  );
}

export default App;
