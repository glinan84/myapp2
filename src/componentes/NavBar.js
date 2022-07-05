import React from 'react'
import './style.css'

window.alert ("Bienvenido");

const NavBar = () => {
  return (
    <div>
        <h1 className='titulo'>Corazón de arte</h1>
          <div className='navBar'>
            <button class="btn btn-primary" type="submit">Home</button>
            <button class="btn btn-primary" type="submit">Eventos</button>
            <button class="btn btn-primary" type="submit">Nuestros artistas</button>
            <button class="btn btn-primary" type="submit">Categorías</button>
                <div>
                  <li>Pinturas</li>
                  <li>Esculturas</li>
                  <li>Literatura</li>
                  <li>Pinturas</li>
                </div>
            <button class="btn btn-primary" type="submit">Puntos de entrega</button>
            <button class="btn btn-primary" type="submit">Usuario</button>
            <img src="/imagenes/carrito.jpg" className='carrito' />
          </div>


    </div>
  )
}





export default NavBar