import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import Index from './componentes/Index';
import ItemCount from './componentes/ItemCount';


function App() {
  return (
    <div className="App">

    <NavBar />
    <ItemListContainer mensaje = "Contador de compra"/>
    <ItemCount stock = {10} initial = {1}/>

    </div>
  );
}


export default App;
