import React, { useState} from 'react'


const ItemCount = ({stock, initial}) => {

    const [count, setCount] = useState (1);

    

    const decrease = () => {
    
        if (count > initial)
        setCount(count - 1);
    }

    const increase = () => {

        if (count < stock)
        setCount(count + 1);
    }

  return (
    <div>
            <button onClick={decrease}>-</button>
            <span className='conteoCarrito'>{count}</span>
            <button onClick={increase}>+</button>
            <div>
                <button>Agregar al carrito</button>
            </div>

    </div>
  )
}

export default ItemCount