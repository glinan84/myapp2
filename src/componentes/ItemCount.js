import React, { useState, useEffect} from 'react'
import './style.css'


const ItemCount = ({stock, initial}) => {

    const [count, setCount] = useState (1);

/*
    useEffect(() => {
      setTimeout(() => {
          console.log('cambio');
      }, timeout);
    }, [contador,numero]);
*/

    

    const decrease = () => {
    
        if (count > initial)
        setCount(count - 1);
    }

    const increase = () => {

        if (count < stock)
        setCount(count + 1);
    }

    const reset = () => {


        setCount(0);
    }

  return (
    <div className='zonaContador'>
            <div className='botonesContador'>
            <button onClick={decrease}>-</button>
            <span className='conteoCarrito'>{count}</span>
            <button onClick={increase}>+</button>
            </div>
            <div className='botonesCarrito'>
                <button>Agregar al carrito</button>
                <button onClick={reset}>Borrar</button>
            </div>

    </div>
  )
}

export default ItemCount