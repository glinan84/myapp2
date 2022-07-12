import React, { useState, useEffect} from 'react'
import ItemCount from './ItemCount';
import './style.css'


const initialProducts = [
    {name: 'Cuadros', id:0, price:'$'+ 1 + ',000 USD', stock:2},
    {name: 'Escultura', id:1, price:'$'+ 12 + ',500 USD', stock:1},
    {name: 'Pintura', id:2, price:'$'+ 3 + ',500 USD', stock:2},
    {name: 'Artesanía', id:3, price:'$'+250 + ' USD', stock:5},
]



const promesa = new Promise((res, rej) => {
    res('Puede Continuar')
});

const ItemListContainer = ({greeting}) => {

    const [products] = useState ([]);

    useEffect(() => {
        promesa.then((data) =>{
            console.log('Todo bien');
            console.log(data);
            setProducts(data);
        }).catch(() => {
            console.log('Cuidado')
        })
    }, []);


const promesa = new Promise ((res, rej) => {
        setTimeout(() => {
            res(initialProducts);
        }, 3000);
    })


const onAdd = (count) => {
    console.log('Quiero agregar' + count + 'piezas de este producto')
}

return (
    <>
        <ItemCount initial={1} stock={10} onAdd={onAdd} />
        {products.map((product) => <div key={product.id}>{product.name}</div>)}
    </>
)


    const [productos, setProducts] = useState ([])
            useEffect(() => {
                console.log("cuadros")
            }, ["Esculturas"])


    
/*  
    return (

        <div className='categorias'>
            <h1>{greeting}</h1>
        </div>
    )
*/
}



export default ItemListContainer
