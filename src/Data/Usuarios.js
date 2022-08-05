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
        setUsuarios([...usuarios, usuario]);
    }

    const manejarBorrado = (event) => {
        setUsuario([]);
    }

    return (
        <div>
            <input onChange={manejarCambio} type="text" />
            <button onClick={manejarClick}>Agregar</button>
            <ListaUsuarios usuarios={usuarios} manejarBorrado='manejarBorrado'/>
        </div>
    )


}

export default Usuarios