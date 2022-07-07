import React, { useState, useEffect} from 'react'
import ItemCount from './ItemCount';
import './style.css'

const promesa = new Promise((res, rej) => {
    res('Puede Continuar')
});

const ItemListContainer = ({mensaje}) => {


    useEffect(() => {
        promesa.then((data) =>{
            console.log('Todo bien')
            console.log(data);
        }).catch(() => {
            console.log('Cuidado')
        })
    }, []);


/*SEGUNDA OPCIÓN DE CARGA DE TIEMPO + CATEGORÍAS*/

const initialCategories = [
    {name: 'Cuadros', id:0, price:10000, stock:2},
    {name: 'Escultura', id:1, price:200000, stock:1},
    {name: 'Pintura', id:2, price:70000, stock:2},
    {name: 'Artesanía', id:3, price:5000, stock:5},
]

const promesa = new Promise((res, rej) => {
    setTimeout(() => {
        res(initialCategories);
    }, 2000);
});





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