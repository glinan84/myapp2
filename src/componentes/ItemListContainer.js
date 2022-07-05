import React, { useState, useEffect} from 'react'
import './style.css'

const ItemListContainer = ({mensaje}) => {


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

    const [categorias, setCategorias] = useState ([])
            useEffect(() => {
                console.log("cuadros")
            }, ["Esculturas"])


    
    
    return (

        <div className='categorias'>
            <h1>{mensaje}</h1>
        </div>
    )

}

export default ItemListContainer