import React, { useState } from "react";

const CartCustomerProvider = ({childer}) => {

    const [products, setProducts] = useState ([]) ;

    const getQtyProducts = () => {

    }

    const addProduct = (product) => {
        if(isInCart (product.id)){
            const aux = [...products];
            const found = aux.find(p => p.id === product.id);
            found.qty += product.qty;
            setProducts(aux);
        }else{
            setProducts ([...products, product])
        }
    }

    const deleteProducto = (id) => {};

    const isInCart = (i) => {
        products.some(product => product.id === id)
    };

}


export default CartContext