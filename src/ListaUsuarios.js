import React from "react";

const ListaUsuarios= ({usuarios}) => {

    const manejarClick = () => {
        manejarClick();
    }

    return (
        <div>
            {usuarios.map((usuario,index) => <p key={index}>{usuario}</p>)}
            <button onClick={manejarClick}>Borrar lista</button>
        </div>
    )
}

export default ListaUsuarios