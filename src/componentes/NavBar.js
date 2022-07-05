import React from 'react'
import './style.css'

const NavBar = () => {
  return (
    <div>
        <h1 className='titulo'>Viene°Usado</h1>
        <h2 className='slogan'>¿Te sobra...? Dale segunda vida...</h2>
            <button class="btn btn-primary" type="submit">Home</button>
            <button class="btn btn-primary" type="submit">Eventos</button>
            <button class="btn btn-primary" type="submit">Categorías</button>
            <button class="btn btn-primary" type="submit">Puntos de entrega</button>
            <button class="btn btn-primary" type="submit">Usuario</button>
            <img src="/imagenes/carrito.jpg" className='carrito' />
    </div>
  )
}

export default NavBar