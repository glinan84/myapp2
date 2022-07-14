import React, { useState, useEffect } from 'react'
import ItemCount from '../Components/ItemCount';
import Products from '../Data/Products';
import './style.css'
import { SpinnerDotted } from 'spinners-react';


const initialProducts = [
    {name: 'Cuadro espacio', id:0, price:'$'+ 1 + ',000 USD', stock:2},
    {name: 'Escultura acero', id:1, price:'$'+ 12 + ',500 USD', stock:1},
    {name: 'Pintura', id:2, price:'$'+ 3 + ',500 USD', stock:2},
    {name: 'Artesania clásica', id:3, price:'$'+250 + ' USD', stock:5},
]


/* EN ESTAS LÍNEAS, POSTERIOR A LA 15, SE CORTÓ Y RESPALDÓ CÓDIGO DE PROMESA NÚMERO:120720221016PM (ESTÁ EN BLOCK DE NOTAS)*/

const promesa = new Promise((res, rej) => {
    setTimeout(() => {
        res(initialProducts);
    }, 3000);
});

const ItemListContainer = ({ greeting }) => {

    const [products , setProducts] = useState([]);

    useEffect(() => {
        promesa.then((data) => {
            console.log(data);
            setProducts(data);
        }).catch(() => {
            console.log('error en sistema');
        }).finally(() => {})
    
}, []);}


const onAdd = (count) => {
    console.log('Deseo agregar' + count + 'estas piezas')
}




return (
    <div>
        <h1 style={styles.container}>{}</h1>
        <ItemCount initial={1} stock={10} onAdd={onAdd} />
        {products.map((product) => <div key={product.id}>{product.name + product.price}</div>)}
    </div>
)




export default ItemListContainer


const styles={
    container: {
        display: 'grid',
        font: 'bold',
        justifyContent: 'space.between',
        alignItems: 'center',
        paddingLeft: '50',
        paddingRight: '50'
    }
}