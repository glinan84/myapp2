import React, { useState} from 'react'
import './style.css'

export const ItemListContainer = ({mensaje}) => {


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

        </div>

    )

}

export default ItemListContainer