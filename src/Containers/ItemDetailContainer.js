import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../Components/ItemDetail";
import '../Components/style.css'

export default ItemDetail


const ItemDetailContainer = () => {

    const [productos, setProducts] = useState ([]);
    
    const {productId} = useParams ();


}
