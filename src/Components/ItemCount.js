import React, { useState, useEffect} from 'react'
import './style.css'


const ItemCount = ({stock, initial, contador}) => {

    const [count, setCount] = useState (1);


    useEffect(() => {
      setTimeout(() => {
          console.log('cambio');
      }, 2000);
    }, [contador]);



      useEffect(() => {
        setInterval(() => {
            console.log('cambioEjecutado');
        }, 2000);
      }, [contador])

      
      useEffect(() => {
        const intervalo = setInterval(() => {
          console.log('aviso 2');
        }, 2000);

  return () => {
    console.log('clean');
    clearInterval(intervalo);
  }
}, []);







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

