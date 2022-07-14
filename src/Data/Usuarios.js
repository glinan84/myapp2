import React, { useState } from "react"
import ListaUsuarios from "../Containers/ListaUsuarios";

const users = [
    {nombre: 'gerardo', apellido: 'linan'},
    {nombre: 'fernando', apellido: 'perez'},
    {nombre: 'karina', apellido: 'ornelas'},
    {nombre: 'humberto', apellido: 'concha'},
]

const Usuarios = () => {

    const [usuario, setUsuario] = useState ('');
    const [usuarios, setUsuarios] = useState ([]);

    const manejarCambio = (event) => {
        setUsuario(event.target.value);
    }

    const manejarClick = (event) => {
        /*usuarios.push(usuario);  esto no se debe hacer*/
        setUsuarios([...usuarios, usuario]); /*Esta línea sirve para guardar copia reales de usuarios, lo anterior no guarda*/
    }

    const manejarBorrado = (event) => {
        setUsuario([]);
    }  /*sirve para borrar listado de usuarios*/

    return (
        <div>
            <input onChange={manejarCambio} type="text" />
            <button onClick={manejarClick}>Agregar</button>
            <ListaUsuarios usuarios={usuarios} manejarBorrado='manejarBorrado'/>
        </div>
    )


}

export default Usuarios