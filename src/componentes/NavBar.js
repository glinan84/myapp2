import React from 'react'
import './style.css'

const NavBar = () => {
  return (
    <div>
        <h1 className='titulo'>Viene°Usado</h1>
        <h2 className='slogan'>¿Te sobra...? Dale segunda vida...</h2>
            <button src = "b-secondary">Home</button>
            <button>Eventos</button>
            <button>Categorías</button>
            <button>Puntos de entrega</button>
            <button>Usuario</button>
            <img src="/imagenes/carrito.jpg" className='carrito' />
    </div>
  )
}

export default NavBar