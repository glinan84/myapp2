import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemCount from './componentes/ItemCount';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import Usuarios from './Usuarios';


function App() {

  const [show, setShow] = useState(true);

  const cambio = () => {
    setShow(!show)
  }

  return (
    <div className="App">

    <NavBar />
    <ItemListContainer mensaje = "Contador de compra"/>
    <ItemCount stock = {10} initial = {1}/>
    <Usuarios agregar = "text"/>
    <button onClick={cambio}></button>
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


/*  ejecución de "eventos y target"
const App = () => {

const manejarClick = (event) => {
  console.log(event,target);
  const button = document.getElementsById ('button');
  console.log(button);
}

const manejarCambio = (event) => {
  console.log(event,target);
}

return (
  <div>
    <button onClick={manejarClick}>Click</button>
    <input type="text" onChange={manejarCambio}></input>
  </div>
)

}
*/

export default App;
