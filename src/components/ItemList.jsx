import React from 'react'
import Item from "./Item";
import {ProductsContainer} from "./styledComponents"

const ItemList = (props) => {
  return (
    <ProductsContainer>
    {
        props.items.length > 0
        ? props.items.map(item => <Item key={item.id} id={item.id} nombre={item.nombre} stock={item.stock} precio={item.precio} img={item.img} />)
        : <p>Cargando...</p>
    }
    </ProductsContainer>
  )
}

export default ItemList
