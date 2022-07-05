import React, { useEffect, useState } from 'react';
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

const [users, setUsers] = useState ([
  { id: 1, name: 'gerardo'},
  { id: 2, name: 'antonio'},
])

return <ul>
  {users.map(u => <li key={u.id}>{u.name}</li>)}
</ul>

}

/*
const cuadros = () => {
  const [categorias,setCategorias] = useState([])
  useEffect(() => {
    consumeApiCategorias()
  },[])


}
*/

export default App;
