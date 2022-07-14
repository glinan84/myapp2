import React from "react";
import '../Components/style.css'

const ListaUsuarios= ({usuarios}) => {

    /*
    const manejarClick = () => {
        manejarClick();
    }
    */

    const manejarBorrado = () => {
        manejarBorrado();
    }

    return (
        <div>
            {usuarios.map((usuario,index) => <p key={index}>{usuario}</p>)}
            <button onClick={manejarBorrado}>Borrar lista</button>
        </div>
    )
}

export default ListaUsuarios