import React from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { customFetch } from "../utils/customFetch";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../utils/products";

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const {idCategory} = useParams();

    console.log(idCategory);

    useEffect(() => {
        if(idCategory){
        customFetch(2000, products.filter(item => item.categoryId === idCategory))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
        }else{
            customFetch(2000, products)
            .then(result => setDatos(result))
            .catch(err => console.log(err))
        }
    },[idCategory]);

    return (
        <>
            <ItemList items={datos} />
        </>
    )
}
  
export default ItemListContainer;