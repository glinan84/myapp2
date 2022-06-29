import React, { useState} from 'react'
import './style.css'

export const ItemListContainer = ({mensaje}) => {
    const [count, setCount] = useState (1);


    const decrease = () => {
        setCount(count - 1);
    }

    const increase = () => {
        setCount(count + 1);
    }

    /*
    useEffect(() => {
        promesa.then((data) =>{
            console.log(data);
        }).catch(() => {
            console.log('adelante')
        })

    }
    
    )
    */
    
    return (

        <div className='counter'>

            <h1>{mensaje}</h1>

            <button onClick={decrease}>-</button>
            <span className='conteoCarrito'>{count}</span>
            <button onClick={increase}>+</button>
            <div>
                <button>Agregar al carrito</button>
            </div>
        </div>

    )

}

export default ItemListContainer