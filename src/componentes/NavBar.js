import React from 'react'
import './style.css'

window.alert ("Bienvenido");

const NavBar = () => {
  return (
    <div>
        <h1 className='titulo'>Corazón de arte</h1>
          <div className='navBar'>
            <button type="button" class="btn btn-outline-primary">Home</button>
            <button type="button" class="btn btn-outline-primary">Eventos</button>
            <button type="button" class="btn btn-outline-primary">Nuestros artistas</button>
            <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categorías</button>
                <div class="dropdown-menu">
                  <button class="dropdown-item" href="#">Pinturas</button>
                  <button class="dropdown-item" href="#">Esculturas</button>
                  <button class="dropdown-item" href="#">Literatura</button>
                  <button class="dropdown-item" href="#">Pinturas</button>
                </div>
            <button type="button" class="btn btn-outline-primary">Puntos de entrega</button>
            <button type="button" class="btn btn-outline-primary">Usuario</button>
            <img src="/imagenes/carrito.jpg" className='carrito' />
          </div>




    </div>
  )
}





export default NavBar