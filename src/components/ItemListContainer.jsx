import React from "react";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {db} from "../utils/firebaseConfig"
import { collection, getDocs, query, where } from "firebase/firestore"; 

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const {idCategory} = useParams();

useEffect(() => {
    const fetchFromFirestore = async() => {
        let q
        if (idCategory) {
            q = query (collection(db, "products"), where ("categoryId", "==", idCategory))
        }else {
            q = query (collection(db, "products"))
        }
        const querySnapshot = await getDocs(q);
        const dataFromFirestore = querySnapshot.docs.map (document => ({
            id: document.id,
            ...document.data ()
        }))
        return dataFromFirestore;
        }
        fetchFromFirestore()
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    },[idCategory]);

    useEffect(() => {
        return (() => {
            setDatos([]);
        })
    }, []);

    return (
        <>
            <ItemList items={datos} />
        </>
    );
}
  
export default ItemListContainer;