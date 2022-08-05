import React, { useState, useEffect } from 'react'
import ItemCount from '../Components/ItemCount';
import '../Components/style.css'
import { SpinnerDotted } from 'spinners-react';
import { useParams } from 'react-router-dom';


export default ItemListContainer


const initialProducts = [
    {name: 'Cuadro espacio', id:0, price:'$'+ 1 + ',000 USD', stock:2},
    {name: 'Escultura acero', id:1, price:'$'+ 12 + ',500 USD', stock:1},
    {name: 'Pintura', id:2, price:'$'+ 3 + ',500 USD', stock:2},
    {name: 'Artesania clásica', id:3, price:'$'+250 + ' USD', stock:5},
]



const promesa = new Promise((res, rej) => {
    setTimeout(() => {
        res(initialProducts);
    }, 3000);
});

const ItemListContainer = ({ greeting }) => {

    const {categoryName} = useParams();

    const [product , setProducts] = useState([]);
    const [loaded, setLoaded] = useState(true);





    useEffect(() => {
        console.log(categoryName);
        fetch('https//fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log(err))
            .finally(() => setLoaded(false))
    }, [categoryName]);

    

    


const onAdd = (count) => {
    console.log('Deseo agregar' + count + 'estas piezas')
}




return (
    <div>
        <h1 style={styles.container}>{}</h1>
        <ItemCount initial={1} stock={10} onAdd={onAdd} />
        {product.map((product) => <div key={product.id}>{product.name + product.price}</div>)}
    </div>
)





const styles={
    container: {
        display: 'grid',
        font: 'bold',
        justifyContent: 'space.between',
        alignItems: 'center',
        paddingLeft: '50',
        paddingRight: '50'
    }
}}