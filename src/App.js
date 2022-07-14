import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Containers/ItemListContainer';
import ItemCount from './Components/ItemCount';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import Usuarios from './Data/Usuarios';
import ItemDetail from './Containers/ItemDetailContainer';


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
    <ItemDetailContainer mensaje = "Detalle del producto"/>
    <ItemDetail />
    <Usuarios agregar = "text"/>
    <button onClick={cambio}></button>
    </div>
  );



    const [users, setUsers] = useEffect ([

        { id: 1, name: 'gerardo'},
        { id: 2, name: 'antonio'},
      ])

      return (
      <ul>
        {users.map(u => <li key={u.id}>{u.name}</li>)}
      </ul>

      )}

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
