import React, { useState } from "react"
import ListaUsuarios from "./ListaUsuarios";


const Usuarios = () => {

    const [usuario, setUsuario] = useState ('');
    const [usuarios, setUsuarios] = useState ([]);

    const manejarCambio = (event) => {
        setUsuario(event.target.value);
    }

    const manejarClick = () => {
        /*usuarios.push(usuario);  esto no se debe hacer*/
        setUsuarios([...usuarios, usuario]); /*Esta línea sirve para guardar copia reales de usuarios, lo anterior no guarda*/
    }

    const manejarBorrado = () => {
        setUsuario([]);
    }  /*sirve para borrar listado de usuarios*/

    return (
        <div>
            <input onChange={manejarCambio} type="text" />
            <button onClick={manejarClick}>Agregar</button>
            <ListaUsuarios usuarios={usuarios} manejarBorrado={manejarBorrado}/>
        </div>
    )


}

export default Usuarios